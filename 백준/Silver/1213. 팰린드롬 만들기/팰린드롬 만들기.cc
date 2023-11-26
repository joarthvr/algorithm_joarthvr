#include <bits/stdc++.h>
using namespace std;

// 입력값을 수정하여 팰린드롬을 만듭니다.
// 오직 대문자 알파벳 문자만 입력됩니다.
// 여러 정답이 가능한 경우, 알파벳 순으로 가장 앞서는 것을 출력합니다.
// 팰린드롬이 불가능한 경우, "I'm Sorry Hansoo"를 출력합니다.

string s, s1, s2;
map<char, int> mp;
int odd = 0;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> s;
    sort(s.begin(), s.end());
    for (int i = 0; i < s.size(); i++) {
        mp[s[i]]++;
    }
    for (auto a : mp) {
        if (a.second % 2 == 1) {
            odd++;
        }
        if (odd >= 2) {
            cout << "I'm Sorry Hansoo";
            return 0;
        }
    }
    for (auto a : mp) {
        if (a.second % 2 == 0) {
            for (int i = 0; i < a.second / 2; i++) {
                s1 += a.first;
            }
        } else {
            for (int i = 0; i < a.second / 2; i++) {
                s1 += a.first;
            }
            s2 += a.first;
        }
    }

    string s1_rev = s1;
    reverse(s1_rev.begin(), s1_rev.end());
    cout << s1 << s2 << s1_rev;

    return 0;
}
