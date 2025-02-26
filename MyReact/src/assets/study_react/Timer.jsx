//* useEffect Hook
//& useEffect(<function>,<dependency>)
//^ ex) 타이머

//* useEffect와 useState를 사용하겠다.
import { useEffect, useState } from "react";

//* Timer컴포턴트
function Timer() {
  //# 구조분해로 count와 setCount를 useState를 대입하겠다.
  //? (1*)
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1);
    },1000);
  });

  //& Timer컴포넌트가 반환하는 것
  return <h4>I've rendered {count} time!</h4>;
}

//* Timer컴포넌트 발행
export default Timer;


//% 위 코드를 원하는게 아니다
//$ 계속해서 타임카운트가 올라간다.
//# useEffect가 모든 렌더에서 실행된다.
//# 개수가 변경되면 렌더링이 발생하여 다른 효과가 트리거 된다.


//? (1*)
/* 
! Hook 함수
리엑트 컴포넌트에는 클래스와 함수가 있다.
import react를 해야한다.
Hook을 사용하면 애플리케이션 상태(State)를 추적한다.
상태(State)는 추적해야 하는 응용프로그램 데이터 또는 속성을 나타낸다.
- Hook은 함수형 컴포넌트에만 호출 가능하고
- Hook은 최상위 컴포넌트에서만 호출 할 수 있다.
- Hook은 조건부일 수 없다.
^ 정리) Hook은 함수형 컴포넌트의 상태(State)를 추적한다.
^      상태(State)는 데이타 or 속성이다.

컴포넌트 맨위에는 Hook이 있다.
`import { useState } from "react";`

! useState()에 대해서
function 구성 요소를 호출하여 상태를 초기화한다 useState
useState는 초기 상태를 받아들이고(인자) 두개의 값을 반환한다.
첫번째 값은 현재 상태
두번째 값은 상태를 업데이트 하는데 사용되는 함수
^ 정리) useState() 는 현재 상태를 인자로 받고
^      현재상태와 상태업데이트 함수를 반환한다.

% ES6에서 사용 되는 구조분해
반환된 값을 구조화한다.
const [color,setColor] = useState("");
//// const [add,sub,mul,div] = calculate(4,7); 형태가 비슷하다.





 */