#include <bits/stdc++.h>
using namespace std;

int n;
string s, ptrn, pre, suf;


int main(){
	cin >> n;
	cin >> ptrn;
	
	int pos = ptrn.find('*');
	pre = ptrn.substr(0,pos);
	suf = ptrn.substr(pos+1);
	
	for(int i = 0; i < n; i++){
		cin >> s;
		//반례 
		if(pre.size() + suf.size() > s.size())
			cout << "NE\n";
		else if(pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size()))
			cout << "DA\n";
		else cout << "NE\n";
	}
	return 0;
	}