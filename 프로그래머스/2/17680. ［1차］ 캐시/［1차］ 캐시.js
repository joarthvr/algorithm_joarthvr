function solution(cacheSize, cities) {
    let cache = new Array(cacheSize).fill("");
    let time = 0;
    let k = 0
    cities = cities.map((e)=>{return e.toLowerCase();})
    if(cacheSize === 0 )
        return cities.length * 5;
    
    for(let i = 0; i < cities.length; i++){
        if(cache.indexOf(cities[i]) > -1){
            cache.splice(cache.indexOf(cities[i]),1);
            cache.unshift(cities[i]);
            time++;
            continue;
        }
        if(cache.indexOf(cities[i]) === -1){
            k = k % cacheSize;
            cache.pop();
            cache.unshift(cities[i]);
            k++;
            time += 5;
            continue;
        }
        
    }
    return time;
}

//똑같은 애가 있으면 히트
//원하는 애가 없으면 미스 그리고 교체