#include <bits/stdc++.h>
using namespace std;

int a, b;
int psum[100004];
int tmp = -10000001;

int main(){

	cin >> a >> b;
	
	for(int i = 1; i <= a; i++){
		int input;
		cin >> input;
		psum[i] = psum[i - 1] + input;
	}
	
	for(int i = b; i <= a; i++){
		tmp = max( tmp, psum[i] - psum [i - b] );
	}
	
	cout << tmp;

	return 0;
}