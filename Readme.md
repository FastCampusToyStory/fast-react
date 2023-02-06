# 주제

https://jsonplaceholder.typicode.com/posts 로부터 게시글 리스트를 받아와서 보여주는 페이지

# 컨벤션

컴포넌트 파일 앞글자 대문자
index.jsx 제외

# work flow

main > feature
작업 할 때 feature/ 에서 작업해서 올린다음 pull request 작업

최신 반영은
feature 브런치에서 main을 머지
`git switch main`
`git pull origin main`
`git switch feature/~`
`git merge main`

## 키워드

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Env : 개발 환경 관련 설정
- Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
- Refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
- Design : CSS 등 디자인 추가/수정
- Comment : 주석 추가/수정
- Docs : 내부 문서 추가/수정
- Test : 테스트 추가/수정
- Chore : 빌드 관련 코드 수정
- Rename : 파일 및 폴더명 수정
- Remove : 파일 삭제
