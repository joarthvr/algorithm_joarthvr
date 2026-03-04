function solution(genres, plays) {
    const ans = [];
    
    const playObj = {}; // genre : total
    const genreObj = {}; // genre: [ [idx, plays], ...]
    
    for(let i = 0; i < genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        
        if(!(genre in genreObj)){
            genreObj[genre] = [];
            playObj[genre] = 0;
        }
        
        genreObj[genre].push([i, play]);
        playObj[genre] += play;
    }
    
    //정렬
    const sortedGenres = Object.keys(playObj).sort((a,b) => playObj[b] - playObj[a]);
    for(const sortedGenre of sortedGenres){
        genreObj[sortedGenre].sort((a,b) => b[1] - a[1]);
        const top2 = genreObj[sortedGenre].slice(0,2).map((x) => x[0]);
        ans.push(...top2)
    }
    return ans;
}