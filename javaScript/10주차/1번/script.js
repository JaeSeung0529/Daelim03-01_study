    var num = parseInt(Math.random() * 45 + 1);
  

    var lotto = [];
    lotto.push(parseInt(Math.random()*45+1));
    lotto.push(parseInt(Math.random()*45+1));
    lotto.push(parseInt(Math.random()*45+1));
    lotto.push(parseInt(Math.random()*45+1));
    lotto.push(parseInt(Math.random()*45+1));
    lotto.push(parseInt(Math.random()*45+1));
    lotto.sort((a,b)=>a-b); 
   

    lotto.sort((a,b)=>a-b); 
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");