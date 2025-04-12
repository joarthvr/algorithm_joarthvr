function solution(wallpaper) {
    let lux = 999;
    let luy = 999;
    let rdx = 999;
    let rdy = 0;
  
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                lux = lux === 999 ? i : lux;
                rdx = i;
            }
        }
        
    }
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                luy = luy > j ? j : luy;
                rdy = rdy < j ? j : rdy;
            }
        }
        
    }
    
    return[lux, luy, rdx + 1, rdy+1];
    
}