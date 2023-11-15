#include <bits/stdc++.h>
using namespace std;

string a;

int main() {
    getline(cin, a);
    for (int i = 0; i < a.size(); i++) {
        if (isupper(a[i])) {
            int b = (a[i] - 'A' + 13) % 26;  // 대문자를 13글자 뒤로 이동
            a[i] = 'A' + b;  // 결과를 다시 대문자로 저장
        }
				if (islower(a[i])) {
            int c = (a[i] - 'a' + 13) % 26;  // 소문자를 13글자 뒤로 이동
            a[i] = 'a' + c;  // 결과를 다시 소문자로 저장
        }
        
    }
    cout << a;
    return 0;
}
