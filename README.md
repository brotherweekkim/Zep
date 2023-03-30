# Zep
Zep을 활용한 멀티버스 만들기

https://docs-kr.zep.us/creator/zep-script-guide 참고

1. https://zep.us/home/spaces에 접속한다.

2. 로그인 후 계정 클릭 후 나의 앱에 들어간다.

3. 앱 업로드를 한다. (앱 이름, 앱 설명, 앱 타입을 필수적으로 입력)

## CLI로 배포하기

1. 프로젝트 폴더 안에 res와 main.js 만들기

2. window PowerShell에
```
npx zep-script archive
```
입력

3. zep-script.json 파일 생성 후 앱 정보 입력

```
{
    "appId": "Zjkgoj",  // app ID
    "name": "Template", // app 이름
    "description": "Template application" , // app 설명
    "type": "normal" // app 타입 ( "normal" or "minigame" or "sidebar" )
}
```

4. powerShell 창에 아래 코드 입력
```
npx zep-script publish
```
계정 인증 후 메타버스 방에 적용
