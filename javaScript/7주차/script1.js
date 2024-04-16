// const promise = new Promise((resolev,reject) => {
//     console.log("Network 작업...")
//     setTimeout(() => {
//         // resolev('jjs')
//         reject(new Error("network error"))
//     },2000)
// })
// promise.then((value) => {
//     console.log(value) //약속된 작업
// })
// .catch((error) => {
// console.log(error)
// })
// .finally(() => {
//     console.log("무조건 실행")
// })

//프로미스 체이닝

const fetchNumber = new Promise((resolve,reject) =>{ 
    setTimeout(() => resolve(1),1000)    
})
fetchNumber
    .then((num) => {num * 2})
    .then((num) => {num * 3})
    .then((num) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => resolve(num-1),1000)
        })
    })
    
.then((num) => console.log(num))