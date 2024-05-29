#include <iostream>
#include <vector>
#include <limits.h>

using namespace std;

int n; // 노드의 수
vector<vector<int>> graph; // 인접 행렬
vector<bool> visited; // 방문 여부를 저장하는 배열
int min_cost = INT_MAX; // 최소 비용

void tspBacktracking(int curr_pos, int count, int cost, int start_pos) { // 백트래킹 알고리즘
    if (count == n && graph[curr_pos][start_pos] > 0) { // 모든 노드를 방문했을 때
        min_cost = min(min_cost, cost + graph[curr_pos][start_pos]); // 최소 비용 갱신
        return; 
    }
    for (int i = 0; i < n; i++) { // 모든 노드에 대해
        if (!visited[i] && graph[curr_pos][i] > 0) { // 방문하지 않았고, 갈 수 있는 노드일 때
            visited[i] = true; // 방문 표시
            tspBacktracking(i, count + 1, cost + graph[curr_pos][i], start_pos); // 다음 노드로 이동
            visited[i] = false;
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
   
    cin >> n; // 노드의 수 입력 받기
    graph.resize(n, vector<int>(n)); // 인접 행렬 생성
    visited.resize(n, false); // 방문 여부를 저장하는 배열 생성

    for (int i = 0; i < n; i++) { // 인접 행렬 입력 받기
        for (int j = 0; j < n; j++) {
            cin >> graph[i][j];
        }
    }

    visited[0] = true; // 시작 노드 방문 표시

    
    tspBacktracking(0, 1, 0, 0); // 백트래킹 알고리즘 호출
   
    cout << min_cost << endl;// 최소 비용 출력
    
    return 0;
}