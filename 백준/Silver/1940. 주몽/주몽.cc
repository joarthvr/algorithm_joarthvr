#include <bits/stdc++.h>
using namespace std;

// 갑옷 재료는 고유 번호를 가지고 있습니다 (중복 번호 x).
// 갑옷은 두 개의 재료로 만들어집니다 (두 숫자를 더함).
// 두 재료의 합이 1000만 이하일 때만 갑옷을 만들 수 있습니다.
// 최대 15000개의 갑옷 재료가 입력됩니다.
// 첫 번째 줄에는 재료의 수 N(1 ≤ N ≤ 15,000)이 주어집니다.
// 두 번째 줄에는 갑옷을 만드는 데 필요한 수 M(1 ≤ M ≤ 10,000,000)이 주어집니다.
// 세 번째 줄에는 N개의 재료의 고유 번호가 공백으로 구분되어 주어집니다.
// 고유 번호는 100,000 이하의 자연수입니다.

int n, m, cnt = 0;
vector<int> k;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> n >> m;
    k.resize(n); // 벡터의 크기를 n으로 설정합니다.
    for(int i = 0; i < n; i++){
        cin >> k[i];
    }
    for(int i = 0; i < n; i++){
        for(int j = i + 1; j < n; j++){ // j = i + 1로 시작하여 중복 계산을 방지합니다.
            if(k[i] + k[j] == m) cnt++;
        }
    }
    cout << cnt << "\n";
    return 0;
}
