# -Web-BaseStudy

## 추천 사이트
[Can I use?](http://caniuse.com/): 폼 태그와 속성들을 각 브라우저에서 지원하는지 버전별로 확인할 수 있는 사이트
[Why can't we find FED](https://whycantwefindfed.jjperezaguinaga.com)
!DOCTYPE
- 문서의 유형을 지정

html
- lang = "de, en, fr, ja, ko, zh"

head
- 브라우저에게 정보를 주는 태그

title
- 문서의 제목

meta
- 문자 인코딩 및 문서의 키워드, 요약 정보 등

body
- 실제 브라우저에 표시될 내용

특수 기호

|기호 | 특수기호|
|-----|-----|
|&|\&amp;|
|공백한칸|\&nbsp;|
|<|\&lt;|
|>|\&gt;|
|"|\&quot;|
|\||\&#124;|
|(|\&#40;|
|)|\&#41;|
|,|\&#44;|
|-|\&#45;|
|'|\&acute;|

blockquote & q
- 인용문 넣기.
- cite 속성을 넣어 사이트 주소를 표시.
- blockquote 는 블록 레벨 태그.
- q 는 인라인 레벨 태그.

pre
- 입력하는 그대로 화면에 표시.
- 웹 접근성에 대해 고려: 스크린 리더가 pre 태그 적용 부분은 스킵.
- 반드시 사용해야 할 경우 대체 텍스트를 추가.

strong & b
- b 는 단순히 굵게 표시하는 기능.
- strong 은 의미를 강조(경고, 주의사항).
- 스크린 리더가 strong을 만나면 그 부분이 강조되었다고 알림.

em & i
- 문장 흐름 상 특정 부분을 의미 상 강조하고 싶을 때는 em.
- 단순 생각, 기술 용어, 관용구 등 단순 이탤릭체는 i.

ruby
- 주석을 함께 표시하는 기능
- 루비예제: <ruby>루비<rt>ruby</rt></ruby>

table - caption

table - figcaption

table - aria-describedby
- 표에 대한 설명을 제공

colgroup - col
- 여러 열을 묶어 스타일 지정

image

## 무료 이미지 제공 사이트
<a href="https://pixabay.com">Pixabay</a>
<br>

Graphic Interchange Form
- 표시할 수 있는 색상 수는 최대 256색. 파일 크기가 작고, 투명한 배경 및 움직이는 이미지를 만들 수 있다.

Joint Photographic Experts Group
- 다양한 색상과 명암을 표현할 수 있다. 저장을 반복하다보면 화질이 떨어질 수 있다.

Portable Network Graphic
- 투명 배경을 만들 수 있고, 다양한 색상을 표현할 수 있다. 최근 많이 사용하는 형식.

alt
bullet이나 작은 아이콘 등의 이미지에는 alt="" 로 해도 된다고 한다.

figure
- 설명 글을 붙일 대상을 지정

figcaption
- 설명 글

a - href
- 링크된 문서, 사이트의 주소로 이동합니다.

a - target
- 링크된 문서, 사이트가 표시될 위치를 지정합니다.

a - download
- 링크된 문서, 사이트로 이동하는 것이 아닌 다운로드합니다.

a - rel
- 링크된 문서, 사이트와 현재 문서와의 관계를 알려줍니다.

a - hreflang
- 링크된 문서, 사이트의 언어를 지정합니다.

a - type
- 링크된 문서 파일의 유형을 알려줍니다.
~~~css
a {
    text-decoration: none;
    color: black;
}
~~~

target
- _black: 새 창, 새 탭에서 열립니다.
- _self: target 속성의 기본 값입니다. 링크가 존재하는 화면에서 열립니다.
- _parent: 프레임을 사용했을 경우, 링크 내용을 부모 프레임에 표시합니다.
- _top: 프레임을 사용했을 경우, 프레임에서 벗어나 링크 내용을 전체 화면으로 표시합니다.

input type="range"
- 슬라이드 막대를 가지고 숫자를 지정할 수 있게 해주는 인풋 타입 속성

input type="color"
- 색상을 선택할 수 있게 하는 인풋 타입 속성

input type="data | month | week"
- 날짜를 선택할 수 있게 하는 인풋 타입 속성

input type="image"
- submit 대신 이미지를 넣은 버튼을 만들 수 있게 해주는 인풋 타입 속성

placeholder
- 입력에 대한 도움말 등을 표시

autofocus
- 입력 커서를 바로 추가하여 표시

readonly
- 읽기 전용

required
- 필수

select, optgroup, option
- 드롭다운 목록을 생성

datalist
- select와 비슷한 방식으로 선택해서 생성

output
- 계산된 결과값임을 브라우저에게 인식

progress
- 진행상태를 표시

meter
- low, high, optimum