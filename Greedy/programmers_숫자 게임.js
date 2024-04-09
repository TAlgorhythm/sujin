function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    let pA = 0;
    let pB = 0;
    
    while(pA < A.length && pB < B.length) {
        if(A[pA] < B[pB]) {
            answer += 1;
            pA += 1;
            pB += 1;
        } else {
            pA += 1;
        }
        
    }
    
    return answer;
}