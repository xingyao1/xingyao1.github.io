// let zhanghao3;
// let mima3
// let xianshi = document.querySelector('.xianshi');
// let xianshi2 = document.querySelector('.xianshi2');

// console.log( denglu1.children[1].children[2]);
// denglu1.children[1].children[2].onclick = function(){
//     let zhanghao = document.getElementById('zhanghao').value;
//     let mima = document.getElementById('mima').value;
// if(zhanghao == ''){
//     xianshi.innerHTML = '用户名不能为空';
// }else if(mima == ''){
//     xianshi.innerHTML = '密码不能为空';
// }else{
//     if(zhanghao3==zhanghao && mima3==mima){
//         alert('登录成功');
//    }else{
//       xianshi.innerHTML = '用户名或密码错误'
//    }
// }
// }
//   zhuce1.children[1].children[2].onclick = function(){
//     let zhanghao = document.getElementById('zhanghao2').value;
//     let mima = document.getElementById('mima2').value;
//     if(zhanghao ==''){
//        xianshi2.innerHTML = '注册用户名不能为空'
//     }else if(mima == ''){
//        xianshi2.innerHTML = '注册密码不能为空'
//     }else{
//       zhanghao3 = zhanghao;
//       mima3 = mima;
//       xianshi2.innerHTML = '注册成功';
//     }

// }
// ------------------------------------------------------------------------
let zhanghao3;
let mima3;
let xianshi = document.querySelector('.xianshi');
let xianshi2 = document.querySelector('.xianshi2');
let aaaa = document.getElementById('btn_login');
denglu1.children[1].children[2].onclick = function () {
  let zhanghao = document.getElementById('zhanghao').value;
  let mima = document.getElementById('mima').value;
  if (zhanghao == '') {
    xianshi.innerHTML = '用户名不能为空';
  } else if (mima == '') {
    xianshi.innerHTML = '密码不能为空';
  } else {
    if (zhanghao == localStorage.getItem('yonhuming') && mima == localStorage.getItem('mima')) {
      xianshi.style.color = 'green';
      xianshi.innerHTML = '登录成功';
      denglu1.children[1].children[2].href = 'getithub个人/dist/index.html';
    } else {
      xianshi.innerHTML = '用户名或密码错误';
    }
  }
}
zhuce1.children[1].children[2].onclick = function () {
  let zhanghao = document.getElementById('zhanghao2').value;
  let mima = document.getElementById('mima2').value;
  if (zhanghao == '') {
    xianshi2.innerHTML = '注册用户名不能为空';
  } else if (mima == '') {
    xianshi2.innerHTML = '注册密码不能为空';
  } else if (a.children[2].value == '') {
    xianshi2.innerHTML = '请输入验证码并验证';
  } else if (mmmxxx == 1) {
    xianshi2.innerHTML = '验证码错误请重新验证';
  } else if (a.children[2].value !== zhi) {
    xianshi2.innerHTML = '验证码错误请重新验证';
  } else if (mmmxxx == 2) {
    localStorage.setItem('yonhuming', zhanghao);
    localStorage.setItem('mima', mima);
    xianshi2.style.color = 'rgb(5, 203, 5)';
    xianshi2.innerHTML = '注册成功';
  }

}
// localStorage.clear();
