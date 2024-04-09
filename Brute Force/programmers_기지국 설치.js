function solution(n, stations, w) {
    let answer = 0;
    let start = 1;
    let stationIndex = 0;
    const coverage = w * 2 + 1;
    
    while(start <= n) {
        if(start >= stations[stationIndex] - w && start <= stations[stationIndex] + w) {
            start = stations[stationIndex] + w + 1;
            stationIndex += 1;
        } else {
            start += coverage;
            answer += 1;
        }
    } 

    return answer;
}