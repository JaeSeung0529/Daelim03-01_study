class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(id === 'uhs' && password ===
                '1234'){
                    resolve(id);
                }else{reject(new Error("ID 또는 패스워드가 일치하지 않습니다."))}
                },2000)
        })
    }

    getRoles(user){
        return new Promise((resolve,reject) => { 
            setTimeout(() => { 
                if(user === 'uhs'){
                    resolve({name: 'uhs', role: 'admin'})
                }else{
                    reject(new Error("권한이 없슴다"))
                }
            },1000)
        })
       
    }
}
const userStorage = new UserStorage()
const id = prompt("ID를 입력하세요")
const password = prompt("패스워드를 입력하세요")
userStorage
    .loginUser(id,password)
    .then((user) =>userStorage.getRoles(user))
    .then((user) => alert(`Your role is ${user.role}`))
    // .catch((error) => console.log(error))
    .catch(console.log)