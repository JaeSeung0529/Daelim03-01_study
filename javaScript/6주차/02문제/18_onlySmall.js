function onlySmall(str) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    let answer = '';
    for(let i = 0; i<str.length; i++){
        let temp = str[i];
        if(upper.includes(str[i])){
            const targetIndex = 
                upper.indexOf(str[i]);
            temp = lower[targetIndex];
        }
        answer = answer + temp;
        
}
    return answer;
}
onlySmall("Hello World")