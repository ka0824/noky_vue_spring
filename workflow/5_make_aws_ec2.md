# 5. AWS EC2 인스턴스 만들기

## 목차

### [1. EC2 인스턴스 생성하기](#1-ec2-인스턴스-생성하기-1)
### [2. 보안 그룹 생성](#2-보안-그룹-생성-1)
### [3. EC2 인스턴스 보안 그룹 변경](#3-ec2-인스턴스-보안-그룹-변경-1)
### [4. EC2 인스턴스 접속하기](#4-ec2-인스턴스-접속하기-1)

<br />

-------

<br />

### 1. EC2 인스턴스 생성하기

- 운영체제 선택하기
- 프리티어(무료) 지원하는 것 선택

<br />

![1](https://github.com/ka0824/noky_vue_spring/assets/79782594/0509a8a7-8c35-4226-b644-76d47a537b58)

<br />

- 키 페어 생성
- RSA 유형, .pem 형식 선택
- 생성한 인스턴스에 접속하려면 키 페어가 필요하므로 저장 위치 기억해 놓을 것

<br />

![2](https://github.com/ka0824/noky_vue_spring/assets/79782594/e124c93f-fac6-4355-b28c-a8ae06fe716f)

<br />

![3](https://github.com/ka0824/noky_vue_spring/assets/79782594/b436a5b9-ee02-43ac-813a-e6269c020b05)

<br />

- 용량 설정하기
- 프리티어는 30기가 바이트를 제공하므로 해당 용량 이하로 설정할 것

<br />

![4](https://github.com/ka0824/noky_vue_spring/assets/79782594/bf97e116-5001-41a9-a4df-a04fcd342fcb)

<br />

- 인스턴스 생성

<br />

![5](https://github.com/ka0824/noky_vue_spring/assets/79782594/93380445-515f-431e-9f53-77b95de39cab)

<br />

-------------------------------

<br />

### 2. 보안 그룹 생성

- 왼쪽 탭에서 보안 그룹 선택

<br />

![6](https://github.com/ka0824/noky_vue_spring/assets/79782594/f986bbf5-1a99-4743-8a94-56dc508c0431)

<br />

- 보안 그룹 생성 페이지 이동

<br />

![7](https://github.com/ka0824/noky_vue_spring/assets/79782594/3b790ee7-b2f4-45e8-a17d-642a72779691)

<br />

- 인스턴스 접근 허용 방법 설정하기
- SSH, Anywhere-Ipv4 추가
- HTTP, Anywhere-Ipv4 추가
- HTTPS, Anywhere-Ipv4 추가

<br />

![8](https://github.com/ka0824/noky_vue_spring/assets/79782594/115d5b7d-d547-453c-bb72-f0a658f158bc)

<br />

------------------------

<br />

### 3. EC2 인스턴스 보안 그룹 변경

- 보안 그룹 변경 페이지 이동

<br />

![9](https://github.com/ka0824/noky_vue_spring/assets/79782594/f6d60eca-c1ce-49c0-bafb-abdb1bc98fb1)

<br />

- 생성한 보안 그룹으로 변경

<br />

![10](https://github.com/ka0824/noky_vue_spring/assets/79782594/c508ff10-7483-45f5-ac14-177ab455c129)

<br />

-----------------------

<br />

### 4. EC2 인스턴스 접속하기

- 연결 페이지 이동

<br />

![11](https://github.com/ka0824/noky_vue_spring/assets/79782594/41a4b492-b605-4701-8cfa-6ce59eb4cd89)

<br />

- 생성한 키가 있는 경로로 이동(.pem 확장자)
- SSH 클라이언트 탭에 있는 명령어 입력

```
chmod 400 nokyssh.pem
 ssh -i "nokyssh.pem" ubuntu@ec2-13-211-168-207.ap-southeast-2.compute.amazonaws.com
```

<br />

![12](https://github.com/ka0824/noky_vue_spring/assets/79782594/026bcba5-a8ad-4205-9588-c4264483b756)

<br />








