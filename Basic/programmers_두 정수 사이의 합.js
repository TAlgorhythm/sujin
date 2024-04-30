function solution(a, b) {
    var answer = 0;
    if(b < a) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    for(let i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}