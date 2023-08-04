# 6. 도커 사용해서 자동 배포 하기

## 목차

### [1. Docker Hub 설치](#1-docker-hub-설치-1)
### [2. Dokcer 이미지 생성 설정하기](#2-dokcer-이미지-생성-설정하기-1)
### [3. Docker Hub에 이미지 만들기](#3-docker-hub에-이미지-만들기-1)
### [4. Github Actions로 push 할 때마다 이미지 자동 업데이트 하기](#4-github-actions로-push-할-때마다-이미지-자동-업데이트-하기-1)
### [5. Docker 컨테이너가 이미지 동기화 하도록 만들기](#5-docker-컨테이너가-이미지-동기화-하도록-만들기-1)
### [6. 자동 배포 과정 간략 정리](#6-자동-배포-과정-간략-정리-1)

<br />

-----------------------------

<br />

### 1. Docker Hub 설치

- [Docker Hub 페이지](https://hub.docker.com/)

<br />

---------------------

<br />

### 2. Dokcer 이미지 생성 설정하기

- 이 프로젝트는 프론트엔드가 백엔드 프로젝트 내부에 build 되므로, 최종적으로는 Spring Boot 서버를 Docker 이미지화 해야 함.
- 그러므로 backend 폴더 내부에 도커 이미지 설정 파일 생성
- 현재 자신이 사용하는 JDK 버전을 써줄 것
- Maven을 사용하냐, Gradle을 사용하냐에 따라 최종 build 파일의 위치가 다르므로 고려하여 설정할 것

```
/backend/Dockerfile

// 자바 17버전 사용 중
FROM eclipse-temurin:17-jdk-alpine
ARG JAR_FILE

// Maven을 사용 중이므로 target 폴더 내부에 최종 build 파일 위치
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

<br />

-------------------

<br />

### 3. Docker Hub에 이미지 만들기

- Docker에 로그인

```
docker login
```

<br />

- Docker 이미지 생성
- '/'의 앞의 부분은 본인의 Docker Hub 아이디를 넣어야 함
- Docker를 로컬에서만 쓴다면 아이디 넣을 필요 없음.
- Dockerfile이 있는 경로에서 명령어 입력할 것, 그렇지 않을 시 경로를 명시해줘야 함

```
// Dokcerfile이 있는 곳에서 명령어를 실행했기 때문에 '.'으로 경로 지정 가능

docker build -t kahyungkim/noky:latest .
```

<br />

-----------------

<br />

### 4. Github Actions로 push 할 때마다 이미지 자동 업데이트 하기

- 프로젝트 내용이 변경될 때마다, github 내에서 자동으로 Docker 이미지를 업데이트 하도록 함
- Github의 Actions 탭으로 이동
- New workflow 생성
- 레파지토리에 새 내용이 push 된 이후 실행하고 싶은 코드 작성
- 현재 자신이 사용하고 있는 자바 버전 명시할 것
- 주의) build를 actions에서 처리하지 않을 시 Docker 이미지에서 변경점을 못찾아 업데이트가 안될 가능성이 있음
- 따라서 build된 파일을 push 하는 것이 아닌, push 된 파일들을 다시 build 하도록 과정을 만들 것

```
/docker-image.yml

name: Docker Image CI

// 해당 작업을 언제 실행 시키고 싶은지 설정
// main 브랜치에 'push'하거나 'pull request' 했을 때 동작
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

      // 자신이 사용하는 자바 버전 기입
    - name: Set up JDK 17
      uses: actions/setup-java@v2
      with:
        java-version: '17'
        distribution: 'temurin'

      // 경로가 root 폴더에서 시작되므로 front 폴더로 이동해 vue 프로젝트를 build
    - name: Build Vue project
      run: cd front && npm i && npm run build

      // 이전 과정에서 front 폴더에서 코드를 실행했더라도, 다음 과정에서는 root 폴더로 경로가 초기화 되므로 바로 backend 경로로 이동
    - name: Build Spring Boot JAR && Build the Docker image
      run: cd backend && mvn clean package -DskipTests && docker build -t kahyungkim/noky:latest .

      // Docker 로그인
    - name: Login to Docker Hub
      run: echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin

      // 새로 만들어진 Docker 이미지, Docker Hub에 업데이트
    - name: Push Docker image to Docker Hub
      run: docker push kahyungkim/noky:latest
```

<br />

-------------

<br />

### 5. Docker 컨테이너가 이미지 동기화 하도록 만들기

- 일반적인 방법으로는 Docker 컨테이너 내에서 실행되는 이미지가 업데이트 되었을 때, 수동으로 이미지를 다시 받아와 컨테이너를 재실행해야 했음
- Docker Compose, Watchtower를 사용하면 일정 주기로 이미지가 달라졌는지 확인하여, 달라졌을 시 업데이트 반영 후 컨테이너를 재시작하게 만들 수 있음

<br />

- Ec2 인스턴스 접속
- Docker와 Docker-compose 설치

```
sudo apt update
sudo apt install docker
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

<br />

- docker-compose.yml 파일 작성

```
vi docker-compose.yml
```
<br />

- 아래 내용 입력
- 이미지 만들 때의 설정 외에, watchtower 설정 추가

```
/docker-compose.yml

version: "3"

services:
  app:
    image: kahyungkim/noky
    ports:
      - "8080:8080"
    working_dir: /app

  watchtower:
    container_name: watchtower
    restart: always
    image: containrrr/watchtower
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock'
    environment:
      TZ: Asia/Seoul
        // 이미지 변경점 확인 주기
        // "분 시 일 월 요일" 기준
        // 현재 값은 매 시간 정각 변경점 확인
      WATCHTOWER_SCHEDULE: "0 * * * *"

        // 이전 파일 삭제 여부
      WATCHTOWER_CLEANUP: "true"
      WATCHTOWER_DEBUG: "true"
```

<br />

- docker-compose 명령어 사용해서 이미지를 컨테이너에 담아 실행
- docker-compose.yml 파일이 있는 경로에서 실행할 것

```
docker-compose up
```

<br />

-----------------

<br />

### 6. 자동 배포 과정 간략 정리

- 깃허브 레파지토리의 main 브랜치에 푸시 혹은 pull request 시 github actions 작동
- actions 내에서 프론트엔드 빌드, 백엔드 빌드 후 이미지 생성하여 Docker Hub에 업데이트
- 매 시간 정각, watchtower에서 이미지 변경점 감지
- 이미지 업데이트 후 컨테이너 재시작
- 변경점 반영된 프로젝트 배포
