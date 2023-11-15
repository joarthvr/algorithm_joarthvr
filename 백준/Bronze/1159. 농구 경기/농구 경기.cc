#include <bits/stdc++.h>
using namespace std;

int a;
vector<string> b;
vector<char> c; // 첫 번째 문자를 저장할 벡터
set<char> d;
int main(){
	cin >> a;
	b.resize(a); // 벡터 크기를 입력값 a에 맞게 조정
    for (int i = 0; i < a; i++) {
        cin >> b[i]; // 문자열을 벡터 b에 저장
    }
	for(auto s : b){
	if(!s.empty()){
		c.push_back(s[0]);
	}}
	for(int i = 0; i < c.size(); i++){
		int count = 0;
		for(int j = 0; j < c.size(); j++){
			if(c[i] == c[j]){
			count++;
		}
			}
			if(count >= 5){
				d.insert(c[i]);
		}
	}
	if(d.empty() == 1){
			cout << "PREDAJA";
			return 0;
		}
	for(auto i : d)
		cout << i;
	return 0;
}