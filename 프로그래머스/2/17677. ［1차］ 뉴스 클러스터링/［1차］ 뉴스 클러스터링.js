function isRealEng(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function splitter(word) {
  const result = [];
  for (let i = 0; i < word.length - 1; i++) {
    if (isRealEng(word[i]) && isRealEng(word[i+1])) {
      result.push(word.slice(i, i+2).toLowerCase());
    }
  }
  return result;
}

function calculateJaccardSimilarity(arr1, arr2) {
  const JACCARD_CONST = 65536;
  
  const countMap1 = new Map();
  const countMap2 = new Map();
  
  arr1.forEach(item => countMap1.set(item, (countMap1.get(item) || 0) + 1));
  arr2.forEach(item => countMap2.set(item, (countMap2.get(item) || 0) + 1));
  
  let intersection = 0;
  let union = 0;
  
  for (const [item, count1] of countMap1) {
    const count2 = countMap2.get(item) || 0;
    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  }
  
  for (const [item, count2] of countMap2) {
    if (!countMap1.has(item)) {
      union += count2;
    }
  }
  
  if (union === 0) return JACCARD_CONST;
  
  return Math.floor((intersection / union) * JACCARD_CONST);
}

function solution(str1, str2) {
  const arr1 = splitter(str1);
  const arr2 = splitter(str2);
  return calculateJaccardSimilarity(arr1, arr2);
}

// 테스트
console.log(solution("FRANCE", "french")); // 예상 출력: 16384
console.log(solution("handshake", "shake hands")); // 예상 출력: 65536