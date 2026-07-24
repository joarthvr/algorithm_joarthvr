import math

def solution(progresses, speeds):
    # 각 기능이 완료되기까지 걸리는 날짜 계산
    days = [
        math.ceil((100 - p) / s)
        for p, s in zip(progresses, speeds)
    ]

    answer = []
    # 첫 번째 기능을 기준 배포일로 설정
    current_max = days[0]
    count = 1

    # 두 번째 기능부터 순회
    for d in days[1:]:
        if d <= current_max:
            # 같은 날에 배포 가능 → 현재 묶음에 포함
            count += 1
        else:
            # 새 배포 묶음 시작
            answer.append(count)
            current_max = d
            count = 1

    # 마지막 묶음 추가
    answer.append(count)

    return answer