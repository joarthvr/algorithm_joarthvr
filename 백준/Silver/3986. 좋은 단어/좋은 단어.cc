#include <bits/stdc++.h>
using namespace std;

//첫째 줄에 단어의 수 n이 주어진다(1~100)
//다음 n개의 줄에는 A와 B로만 이뤄진 단어가 한 줄에 하나씩 주어진다.
//단어의 길이는 2와 100,000사이
//모든 단어 길이의 합은 1,000,000을 넘지 않음 
int n, ret;
string s;
int main(){
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> n;
    for(int i =0; i < n; i++){
    	cin >> s;
    	stack<char> stk;
    	for(char a : s){
    		//항상 스택 사이즈(스택에 값이 있는가)를 확인해야한다
				//왜냐하면 값이 없을 경우 참조 에러 발생 
    		if(stk.size() && stk.top() == a) stk.pop();
    		else stk.push(a);
			}
			if(stk.size() == 0) ret++;
		}
		cout << ret;
    
    return 0;
}
