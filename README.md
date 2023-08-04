# 프로젝트 제목
## 목차

### [1. 프로젝트 소개 및 목적](#1-프로젝트-소개-및-목적-1)
### [2. 설치 방법](#2-설치-방법-1)  
### [3. 사용 방법](#3-사용-방법-1)  
### [4. 사용 기술](#4-사용-기술-1)
### [5. 목표 기능](#5-목표-기능-1)  
### [6. 진행 과정](#6-진행-과정-1)
### [7. 폴더 구조](#7-폴더-구조-1)

<br />

---

<br />

## 1. 프로젝트 소개 및 목적
- 프로젝트 제목: NOKY
  - OKKY 사이트의 클론 코딩입니다.
  
- 프로젝트 목적
  - Vue로 프론트엔드, Spring Boot로 백엔드 기능을 완성하여 풀스택 구현.
  - AWS로 배포 학습.
  - Docker를 통한 CI/CD 학습.

<br />

---

<br />

## 2. 설치 방법
- front 폴더에서 명령어 입력

```
npm i
```

- backend 폴더에서 명령어 입력
```
mvn clean install
```

<br />

---

<br />

## 3. 사용 방법
- BackendApplication.java의 main 메서드 실행

```
package com.noky.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

         // 아래 메서드 실행
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
```

<br />

---

<br />

## 4. 사용 기술
- 프론트엔드:  
![vue3](https://github.com/ka0824/noky_vue_spring/assets/79782594/f6091e62-4bf3-4b0a-af0e-898cbce6d6cd)

- 백엔드:  
![springboot](https://github.com/ka0824/noky_vue_spring/assets/79782594/c5f5f777-ab60-42a7-856e-03acc3c4d877)

- DevOps:  
![aws](https://github.com/ka0824/noky_vue_spring/assets/79782594/8e272f34-f907-44b2-b674-d07046dd1c81)
![docker](https://github.com/ka0824/noky_vue_spring/assets/79782594/7b957e9e-22b2-47c3-9772-dd3f77963810)

<br />

---

<br />

## 5. 목표 기능

<details>
<summary>프론트엔드</summary>
<div markdown="1">
	
- [ ] 페이지 라우팅  	
- [ ] 반응형 
- [ ] 태그에 따라 게시글 분류
- [ ] 페이지네이션
- [ ] 좋아요 기능
- [ ] 다크모드
- [ ] 검색 기능

</div>
</details>

<details>
<summary>백엔드</summary>
<div markdown="1">
	
- [ ] 토큰을 이용한 로그인
- [ ] mysql을 통한 게시판글 CRUD
- [ ] 페이지네이션
- [ ] 좋아요 기능
- [ ] 검색 기능


</div>
</details>

<details>
<summary>배포</summary>
<div markdown="1">

- [ ] aws 통한 배포
- [ ] Docker를 통한 통합/배포

</div>
</details>

<br />

---

<br />

## 6. 진행 과정

### [1. 프론트엔드, 백엔드 연결하기](https://github.com/ka0824/noky_vue_spring/blob/main/workflow/1_connect_front_back.md)

### [2. 다크모드 적용하기](https://github.com/ka0824/noky_vue_spring/blob/main/workflow/2_make_darkmode.md)

<br />

---

<br />

## 7. 폴더 구조
- 프론트엔드

```
/front/src

📦src
 ┣ 📂assets
 ┃ ┗ 📜vue.svg
 ┣ 📂components
 ┃ ┣ 📜Darkmode.vue
 ┃ ┗ 📜Nav.vue
 ┣ 📂router
 ┃ ┗ 📜router.ts
 ┣ 📂template
 ┃ ┗ 📜Template.vue
 ┣ 📂views
 ┃ ┣ 📜Community.vue
 ┃ ┣ 📜Home.vue
 ┃ ┣ 📜Qna.vue
 ┃ ┣ 📜Read.vue
 ┃ ┗ 📜Write.vue
 ┣ 📜App.vue
 ┣ 📜main.ts
 ┣ 📜reset.css
 ┗ 📜vite-env.d.ts

```

- 백엔드
```
./backend/src

📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂noky
 ┃ ┃ ┃ ┃ ┗ 📂backend
 ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TestController.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜BackendApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📜index-127f2da4.js
 ┃ ┃ ┃ ┃ ┣ 📜index-c322ae43.css
 ┃ ┃ ┃ ┃ ┗ 📜vue-5532db34.svg
 ┃ ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┃ ┗ 📜vite.svg
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜application.properties
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂noky
 ┃ ┃ ┃ ┃ ┗ 📂backend
 ┃ ┃ ┃ ┃ ┃ ┗ 📜BackendApplicationTests.java
```
