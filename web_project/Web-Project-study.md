# javascript 공부
---
<br>

## javascript란?
* ### javacript는 웹 페이지를 동적으로 만들고 상호작용을 처리하기 위해 사용된다. javascript는 웹 브라우저에서 실행되며 클라이언트 측 웹 개발에 가장 널리 사용되는 언어 중 하나.
---
<br>

## 1.변수
<br>

### 변수의 종류
    let
    const
    var

## 변수

### 변수 재선언
* #### var는 변수 재선언 가능
        var name = 'Mike';
        console.log(name);//Mike

        var name = 'Jane';
        console.log(name);//Jane

* #### let은 변수 재선언 불가능

        let name = 'Mike';
        console.log(name);//Mike

        let name = 'Jane';//error!
        console.log(name);
### 호이스팅
    
    console.log(name);//undefined
    var name = 'Mike';
       
    var name; (hositing)
    console.log(name);//undefined
    name = 'Mike';//할당
        
#### var는 아래코드처럼 실제로 이동하지는 않지만 최상위에서 선언되기 때문에 작동은한다.(호이스팅 hositing) 하지만 할당은 호이스팅 되지않아 undefined라고 뜬다.

####
    console.log(name);//ReferenceError
    let name = 'Mike';

#### let과 const는 TDZ(Temporal Dead Zone)에 영향을 받아 할당을 할 수 없다. 오류 등을 방지한다.

### 변수의 생성과정
1. #### 선언 단계
2. #### 초기화 단계
3. #### 할당 단계
* #### var는 1,2단계를 동시에 진행
* #### const는 1,2,3단계를 동시에 진행

    
        let name;
        name = 'Mike';

        var age;
        age = 30;

        const gender;//error
        geder = 'male';

