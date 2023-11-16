#include <iostream>

using namespace std;

int main(void)
{
	int x, y;

	cin >> x >> y;

	y -= 45;

	if (y<0 && x>0)
	{
		cout << x - 1 << " " << 60 + y << endl;

	}
	else if (x==0 && y<0)
	{
		x = 23;
		cout << x<< " " << 60 + y << endl;
	}
	else
	{
		cout << x << " " << y << endl;
	}

	
}