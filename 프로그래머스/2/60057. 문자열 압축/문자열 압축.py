def solution(s):
    n = len(s)
    compression_length_array = []  # 1~len까지 압축했을때 길이 값
    if n == 1:
        return 1
    for split_size in range(1, n // 2 + 1):
        compressed = ""
        # string 갯수 단위로 쪼개기 *
        splited = [
            s[i:i + split_size] for i in range(0, n, split_size)
        ]
        count = 1

        for j in range(0, len(splited)-1):
            cur, next = splited[j], splited[j + 1]
            if cur == next:
                count += 1
            else:  # 이전 문자와 다르다면
                if count > 1:
                    compressed += (str(count) + cur)
                else:  # 문자가 반복되지 않아 한번만 나타난 경우 1은 생략함
                    compressed += cur
                count = 1  # 초기화
        if count > 1:
            compressed += (str(count) + splited[-1])
        else:  # 문자가 반복되지 않아 한번만 나타난 경우 1은 생략함
            compressed += splited[-1]
        compression_length_array.append(len(compressed))

    return min(compression_length_array)  # 최솟값 리턴

