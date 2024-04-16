// 동기적 vs 비동기적
//동기적인 프로그래밍
console.log(1)
setTimeout(function(){
    console.log(2)
},1000);
console.log(3)
//비동기적인 프로그래밍
//네트워크 통신/파일 입출력 ->시간이 오래걸림
//오래 기다린 다음에 다음 작업
//setTimeout -- 정해진 시간이 지나면 callback
//동기적인 콜백
function print1(print){
    print()
}
print1(() => console.log("print1"));
// 비동기적인 콜백
function print2(print,timeout){
    setTimeout(print,timeout);
}
print2(() => console.log("print2"),
2000)
//콜백 지옥
//서버로부터 사용자의 데이터를 받는 클래스
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(() => {
        if(id === 'uhs' && password ===
        '1234'){
            onSuccess(id)
        }else{onerror(new Error("ID 또는 패스워드가 일치하지 않습니다."))}
        },2000)
    }

    getRoles(user,onSuccess,onError){
        setTimeout(() => { 
            if(user === 'uhs'){
                onSuccess({name: 'uhs', role: 'admin'})
            }else{
                onError(new Error("권한이 없슴다"))
            }
        },1000)
    }
}
const userStorage = new UserStorage()
const id = prompt("ID를 입력하세요")
const password = prompt("패스워드를 입력하세요")
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Welcome ${userWithRole.name},you have a ${userWithRole.role}role`)
            },
            (error) =>{
                console.log(error);
            }
        )
    },
    (error) =>{
        console.log(error);
    }
)