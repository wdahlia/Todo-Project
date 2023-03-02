
<br>

[Figma 설계](https://www.figma.com/file/OgvFaRLxQeAQ4pKSFpGV85/To-Do-List?node-id=1%3A31&t=xDk5xXifWSqS7JqV-1)

![ezgif-2-e0d207b91f](https://user-images.githubusercontent.com/108653518/222407255-cd47b0ad-0341-4ee6-bb80-a17502fe19aa.gif)

+ 할 일 스크롤이 아닌 Pagination 기능 추가 예정
+ 배포 예정

### 컴포넌트 구성 순서
- container
	-  dark mode, light mode 변경
	-  Context API 사용하여 구현
- navbar
	- all, active, completed - 필터링 기능 구현
	- `all` - 전체 Todo 리스트 출력
	- `active` - checked 되지 않은 Todo 리스트 출력
	- `completed` - checked 된 Todo 리스트 출력
- todo list
	- `ul` 태그와 `li` 태그 부분, 컴포넌트 쪼개기
- todo
	- checkbox가 되었을때 체크 표시 아이콘이 담긴 inline-block
	- input checkbox (완료, 미완료)
	- 휴지통 Icon
	- todo 삭제 기능 구현
	- todo checked 된 상태 기억 구현
- todo input
	- todo add 하는 input text 부분
	- submit시 todo input 글자 수 제한 처리 해주기
		- 즉, 글자 수 넘기면 submit 안되고 todo 생성 안되게끔

<br />

### CSSModule
- 컴포넌트를 스타일링 할때 CSS Module이라는 기술을 사용시 **CSS 클래스가 중첩되는 것을 방지**
- CSS 파일을 `Box.module.css` 처럼 `.module.css` 형식으로 파일을 만듦
- import로 불러온 styles에서 객체안에 있는 값을 참조해야함
- 레거시 프로젝트에 리액트를 도입 시 유용
	- 기존 프로젝트에 있던 CSS 클래스와 이름이 중복되어도 스타일이 꼬이지 않게 도와줌
	- CSS 클래스 네이밍 규칙을 만들기 귀찮을 때
- 네이밍 규칙
1.  컴포넌트의 이름은 다른 컴포넌트랑 중복되지 않게 한다.
2.  컴포넌트의 최상단 CSS 클래스는 컴포넌트의 이름과 일치시킨다. (예: `.Button`
3.  컴포넌트 내부에서 보여지는 CSS 클래스는 CSS Selector 를 잘 활용한다. (예: `.MyForm .my-input`)

<br />

### window.matchMedia()
- 주어진 미디어 쿼리 문자열의 분석 결과를 나타내는
	- 아래의 코드의 경우  min-width: 400px 뷰포트 너비 400px 이상일때 if 문의 코드 실행 나머지는 else 문의 코드 실행

```javascript
if (window.matchMedia("(min-width: 400px)").matches) {
	// ...
} else {
}
```
<br />

### prefers-color-scheme
- 운영체제에서 야간에 눈을 편안하게 하고 작업의 집중도 높이게 할 수 있게끔 시스템 전반에 어두운 색상 체계를 적용해주는 기능
- 2018년 macOS Mojave에 처음 소개되고 현재는 Windows 10을 비롯하여 많은 운영 체제에서 지원
- 고려해서 코드를 작성하는것의 필요성 대두

<img width="528" alt="스크린샷 2023-02-23 오후 9 30 16" src="https://user-images.githubusercontent.com/108653518/222405444-7a6b4102-52bf-420c-9c2f-483c9e302aa0.png">
- onAdd props 전달하기 console.log(todo) 찍었을때 나오는 인자

<br>

### Array.prototype.filter()
- filter 내부에서 주어진 조건을 충족하는 친구를 새로운 배열로 반환