#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    int truck1_in, truck1_out, truck2_in, truck2_out, truck3_in, truck3_out;
    cin >> truck1_in >> truck1_out >> truck2_in >> truck2_out >> truck3_in >> truck3_out;

    vector<int> time(101, 0); // 101 크기의 벡터를 0으로 초기화

    for (int t = truck1_in; t < truck1_out; t++) {
        time[t]++;
    }
    for (int t = truck2_in; t < truck2_out; t++) {
        time[t]++;
    }
    for (int t = truck3_in; t < truck3_out; t++) {
        time[t]++;
    }

    int total_cost = 0;

    for (int t = 1; t <= 100; t++) {
        if (time[t] == 1) {
            total_cost += a;
        } else if (time[t] == 2) {
            total_cost += (b * 2);
        } else if (time[t] == 3) {
            total_cost += (c * 3);
        }
    }

    cout << total_cost << endl;

    return 0;
}
