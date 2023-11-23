#include <bits/stdc++.h>
using namespace std;

//테스트 케이스는 최대 100 t
// 가진 의상 수 n
// 의상의 이름과 의상의 졸류가 공백으로 구분돼 주어짐
//같은 종류의 의상의 하나만 입을 수 있음 
//경우의 수는 long long  
int t,n;
string s, s1;

int main(){
	ios_base::sync_with_stdio(false);cin.tie(NULL); cout.tie(NULL);
	cin >> t;
	for(int i = 0; i < t; i++){
		map<string, int> mp; 
		cin >> n;
		for(int j = 0; j < n; j++){
			cin >> s >> s1;
			mp[s1]++;
		}
		long long ret = 1;
		for(auto a : mp){
			ret *= ((long long)a.second +1);
		}
		ret--;
		cout << ret << "\n";
	}
	
	return 0;
}