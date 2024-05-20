function stonejump (list, k, min, max) {
    if(min === max) return min;
    let mid = Math.round((min + max) / 2);
    let count = 0;
    for(let i=0; i< list.length; i++) {
        if(count === k) break;
        let value = list[i] - mid + 1;
        if(value <= 0) count++;
        else count = 0;
    }
    if(count === k) return stonejump(list, k, min, mid - 1);
    else return stonejump(list, k, mid, max);
}

function solution(stones, k) {
    var answer = 0;
    return stonejump(stones, k, 1, 200000000);
}