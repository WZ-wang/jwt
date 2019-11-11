// 事件环分浏览器和node两种
//浏览器：
//  宏任务： setTimeout 事件 setInterval script setImmediate ajax MessageChannel  I/O  requestAnimationFrame
//  微任务： promise.then  muitionsObserve
//node：
//  宏任务： setTimeout 事件 setInterval script setImmediate ajax MessageChannel  I/O  
//  微任务： promise.then  process.nextTick

//node示例 then2 then3 timer1 timer2 then1
// setTimeout(()=>{
//     console.log("timer1")
//     Promise.resolve().then(data=>{
//         console.log("then1")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then2")
//     setTimeout(()=>{
//         console.log("timer2")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then3")
// })


//then1 then2 timer1 timer2 then3
// setTimeout(()=>{
//     console.log("timer1")
//     setTimeout(()=>{
//         console.log("timer3")
//     })
// })
// setTimeout(()=>{
//     console.log("timer2")
//     Promise.resolve().then(data=>{
//         console.log("then4")
//     })
// })
// setTimeout(()=>{
//     console.log("timer4")
// })
// Promise.resolve().then(data=>{
//     console.log("then1")
// })
// Promise.resolve().then(data=>{
//     console.log("then2")
// })
// then1
// then2
// timer1
// timer2
// timer4
// then4
// timer3


//timer2 timer1 then3
// setTimeout(()=>{
//     console.log("timer1")
//     Promise.resolve().then(data=>{
//         console.log("then3")
//     })
// },3)
// setTimeout(()=>{
//     console.log("timer2")
// },0)  // 0 ---> 3ms  4ms


// 浏览器示例
// <!--  2 then1 then2 setTimeout1 then3 setTimeout2 -->
// <!-- <script>
//     setTimeout(() => {
//         console.log('setTimeout1');
//         Promise.resolve().then(data => {
//             console.log('then3');
//         });
//     }, 1000);
//     Promise.resolve().then(data => {
//         console.log('then1');
//     });
//     Promise.resolve().then(data => {
//         console.log('then2');
//         setTimeout(() => {
//             console.log('setTimeout2');
//         }, 1000);
//     });
//     console.log(2);
// </script> -->





// 小测试
// var a =1 
// function f(){
//     console.log(a)  //undefined
//     var a = 5
//     console.log(a)  //5
// }
// f()

//10-100 排序 随机10个数
// function get(start,end){
//     return Math.floor(Math.random()*(end-start+1)+start)
// }
// let arr =[]
// for(let i =0 ; i<10;i++){
//     arr.push(get(10,100))
// }
// arr.sort()
// console.log(arr)