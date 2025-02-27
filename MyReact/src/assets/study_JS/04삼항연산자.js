//* 삼항연산자
// condition ? <expression if true> : <expression if false>

//// 옛날방식
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

//& 새로운 방식
authenticated ? renderApp() : renderLogin();