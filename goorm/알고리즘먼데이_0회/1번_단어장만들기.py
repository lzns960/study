# 문제의 요구사항
# 1. 주어진 단어를 주어진 기준에 따라서 정렬하기
# 2. k번째 위치한 단어를 찾기 
# 단어 정렬기준: 길이가 짧을수록, 길이가 같다면 사전 순으로 정렬

import sys
input = sys.stdin.readline
word = list()
n, k = map(int, input().split())
for i in range(n):
    word.append(input().rstrip())
word.sort()
word.sort(key = lambda x : len(x))
print(word[k-1])

# 대부분의 정렬문제는 효율적인 자료구조와, 효율적인 정렬방법을 찾는 것이 항상 중요합니다. 
# 때문에 정렬문제를 마주하였을 때, 반복문을 사용하는 것보다는 정렬을 최소화하는 방법을 고민하는 것이 중요합니다.

