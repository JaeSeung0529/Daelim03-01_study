// // async function 함수명(){
// //     await 비동기함수();//axios 같은거 들어감
// // }

// function fetchItem(){
//     return new Promise((resolve,reject) => { 
//         var items = [1,2,3]
//         resolve(items)
//     })
// }
// async function logItems(){
//     var result = (local var)
// }

// async function fetchUser(){
//     //사용자 정보 가져오는 비동기 함수(시간걸림)
//         return 'uhs'
// }
// const user = fetchUser()
// user.then((user) => {
//     console.log(user)
// })
function delay(ms){
    return new Promise((resolve) => {
        setTimeout() =>
    })
}
async function getApple(){
    await delay(5000)
    return 'apple'
}
async function getBanana(){
    await delay(5000)
    return 'banana'
}
// async function pickFruits() {
//     // const apple = await getApple();
//     // const banana = await getBanana();
//     const applePromis = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromis;
//     const banana = await bananaPromis;
//     return `${apple} + ${banana}`
//     // return getApple()
//     // .then(apple => {
//     //     return getBanana()
//     //     .then(banana => `${apple} + ${banana}`) 
//     //     })
// }

function pickFruits(){
return Promise.all([getApple(),getBanana()]).then(fruits => fruits.join(' + '))
}
pickFruits().then(console.log)