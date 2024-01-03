var mmmxxx = 0;
// 验证码正确切换
let a = document.querySelector('.yanzheng');
// 验证码正确切换结束
// 验证码校验
let zhi;
function fun1(min, max) {
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    let c = Math.floor(Math.random() * (max - min + 1)) + min;
    let d = Math.floor(Math.random() * (max - min + 1)) + min;
    return a + '' + b + '' + c + '' + d;
}
a.children[1].onclick = function () {
    zhi = fun1(0, 9);
    a.children[0].innerHTML = zhi;
}
//  a.children[3].onclick = function(){
//      console.log(a.children[2].value);
//     if(a.children[2].value == zhi){
//       mmmxxx=2; // 2 通过
//      a.nextElementSibling.style.display = 'block';
//      a.style.display = 'none';
//      xianshi2.innerHTML = '';
//     }else if(a.children[2].value == ''){
//         mmmxxx = 0;
//      xianshi2.innerHTML = '请填获取验证码并验证';
//     }else if(a.children[2]!==zhi){
//         mmmxxx=1;
//      xianshi2.innerHTML = '验证码错误请重新填写';
//     }
//  }
// 获得焦点事件
a.children[2].addEventListener('focus', function (e) {
    document.addEventListener('keyup', function (e) {
        if (a.children[2].value == zhi) {
            mmmxxx = 2; // 2 通过
            a.nextElementSibling.style.display = 'block';
            a.style.display = 'none';
            xianshi2.innerHTML = '';
        } else if (a.children[2].value == '') {
            mmmxxx = 0;
            xianshi2.innerHTML = '请填获取验证码并验证';
        } else if (a.children[2] !== zhi) {
            mmmxxx = 1;
            // xianshi2.innerHTML = '验证码错误请重新填写';
        }
    })
})
//  验证码校验结束