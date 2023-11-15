#include <bits/stdc++.h>
using namespace std;

int main() {
    string a;
    int b[26] = {0};

    cin >> a;

    for (char i : a) {
        if (isalpha(i)) { // 알파벳인 경우만 처리
            int index = i - 'a'; // 알파벳을 0부터 25까지의 인덱스로 변환
            b[index]++;
        }
    }

    for (int i = 0; i < 26; i++) {
        cout << b[i] << ' ';
    }
    
    return 0;
}