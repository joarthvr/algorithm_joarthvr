#include <bits/stdc++.h>
using namespace std;

string a;
string b ="";
int main(){
	cin >> a;
	b =a;
	reverse(a.begin(), a.end());
	if( a == b){
		cout << 1;
		return 0;
	}
	cout << 0;
	return 0;
}