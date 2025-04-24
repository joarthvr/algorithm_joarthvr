function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    cities = cities.map((e) => e.toLowerCase());
    
    let cache = [];
    let time = 0;
    
    for(let i = 0; i < cities.length; i++){
        if(cache.includes(cities[i])){
            // 캐시 히트
            cache = cache.filter((e) => e !== cities[i]);
            cache.push(cities[i]);
            time += 1;
        } else {
            // 캐시 미스
            if(cache.length >= cacheSize){
                cache.shift();  // LRU 제거
            }
            cache.push(cities[i]);
            time += 5;
        }
    }
    return time;
}