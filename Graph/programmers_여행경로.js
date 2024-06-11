function solution(tickets) {
    let answer = [];
    const len = tickets.length;
    const result = [];
    const visited = Array(len).fill(false);
    
    tickets.sort();
    
    const dfs = (cur, count) => {
        result.push(cur);
        if(count === len) {
            answer = result;
            return true;
        }
        
        for(let i=0; i<len; i++) {
            if(!visited[i] && tickets[i][0] === cur) {
                visited[i] = true;
                if(dfs(tickets[i][1], count + 1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
        
        return false;
    }
    
    dfs("ICN", 0);
    
    return answer;
}