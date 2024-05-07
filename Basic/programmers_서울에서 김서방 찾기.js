function solution(seoul) {
    let idx = -1;
    for(let i=0; i<seoul.length; i++) {
        if(seoul[i] === 'Kim') {
            idx = i;
            break;
        }
    }
    return `김서방은 ${idx}에 있다`;
}