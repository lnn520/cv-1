let html = document.querySelector("#html")
let n = 0;
let string2 = ''
let style = document.querySelector("#style");
let string = `
/*你好，我是王裕翔，是一个新人.
我要添加样式了*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* *接下来我要把div变一个八卦
* 注意看好了
* 首先变一个圆
* */
#div1{
       border-radius:50%;
       box-shadow:0 0 30px rgba(0,0,0,0.5);
       border:none
   }
/* 八卦是阴阳合成的
 *  一黑一白
 * */

 #div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
 }

 /* 加两个xxx */

 #div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    border-radius:50%
    

 }
 #div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    border-radius:50%

 }
`;
//string = string.replace(/\n/g, "<br>")会出现<括号
let step = () => {

    setTimeout(() => {

        // string2 += string[n] === "\n" ? "<br>" : string[n]
        if (string[n] === "\n") {
            string2 += "<br>" //回车就加回车符号
        } else if (string[n] === " ") {
            string2 += "&nbsp";


        } else {
            string2 += string[n] //照搬
        }

        //length 55
        if (n < string.length - 1) { //多次尝试，关于字符串长度问题
            n += 1; // 54
            step();
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)

    }, 10)

}

step();