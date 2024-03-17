const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function makeLandGroup (land, height) {
    const N = land.length;
    const group = new Array(N).fill(-1).map(() => new Array(N).fill(-1));

    let cnt = 0;

    for (let i=0; i<N; i++) {
        for (let j=0; j<N; j++) {
            // 아직 방문 안했을 경우
            if(group[i][j] === -1) {
                cnt += 1;
                group[i][j] = cnt;
                let pivot = 0;
                const queue = [[i ,j]];
                
                while (queue.length > pivot) {
                    const [x, y] = queue[pivot++];
                    
                    for(let k=0; k<4; k++) {
                        const nx = x + dx[k];
                        const ny = y + dy[k];
                        
                        if(nx >= 0 && nx < N && ny >= 0 && ny < N && group[nx][ny] === -1) {
                            const dist = Math.abs(land[nx][ny] - land[x][y]);
                            if (dist <= height) {
                                queue.push([nx, ny]);   
                                group[nx][ny] = cnt;
                            }
                        }
                    }
                }
            }
        }
    }
    
    return [group, cnt];
}

function makeEdges (land, landGroup) {
    const edges = [];
    const N = land.length;
    
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    
    visited[0][0] = true;
    
    const queue = [[0, 0]];
    let pivot = 0;
    
    while(queue.length > pivot) {
        const [x, y] = queue[pivot++];
        for(let i=0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                const curLandGroup = landGroup[x][y];
                const nextLandGroup = landGroup[nx][ny];
                if (curLandGroup !== nextLandGroup) {
                    const dist = Math.abs(land[nx][ny] - land[x][y]);
                    edges.push([dist, curLandGroup, nextLandGroup]);
                }
                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    return edges;
}

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    }
    
    // num의 root parent return
    getParent(num) {
        if (this.parent[num] === num) return num;
        return this.parent[num] = this.getParent(this.parent[num]);
    }
    
    // a와 b의 부모가 같은지 return
    findParent(a, b) {
        const aParent = this.getParent(a);
        const bParent = this.getParent(b);
        return aParent === bParent;
    }
    
    // a, b의 부모 합치기
    unionParent(a, b) {
        const aParent = this.getParent(a);
        const bParent = this.getParent(b);
        if(aParent < bParent) this.parent[bParent] = aParent;
        else this.parent[aParent] = bParent;
    }
}

function solution(land, height) {
    let answer = 0;
    
    const [group, groupCnt] = makeLandGroup(land, height);
    
    const unionFind = new UnionFind(groupCnt);
    
    const edges = makeEdges(land, group);
    
    edges.sort((a, b) => a[0] - b[0]);

    console.log(edges)
    
    let cnt = 1;
    for (let i=0; i<edges.length; i++) {
        const [dist, from, to] = edges[i];
        if (!unionFind.findParent(from, to)) {
            unionFind.unionParent(from, to);
            answer += dist;
            cnt += 1;
        }
        if(cnt === groupCnt) break;
    }
    
    return answer;
}