function solution(x) {
    var answer = true;
    let sum = 0;
    let ori = x;
    
    while(x > 0) {
        sum = sum + x % 10;
        x = parseInt(x / 10);
    }

    if(ori % sum === 0) answer = true;
    else answer = false;
    
    return answer;
}