function solution(food_times, k) {
    const len = food_times.length;
    let foods = food_times.map((time, index) => {
        return [index + 1, time];
    }).sort((a, b) => a[1] - b[1]);
    
    let prev = 0;
    
    for(let i=0; i<len; i++) {
        const currentTime = foods[i][1];
        const remainLen = len - i;
        const timeTaken = (currentTime - prev) * remainLen;
        prev = currentTime;
        
        if(k < timeTaken) {
            foods = foods.slice(i).sort((a,b) => a[0] - b[0]);
            return foods[k % remainLen][0];
        }
        k -= timeTaken;
    }
    
    return -1;
}