function solution(m, musicinfos) {
    // 샤프 변환 함수
    const convertSharp = (melody) => {
        if(!melody) return ""; 
        return melody
            .replaceAll('C#', 'c')
            .replaceAll('D#', 'd')
            .replaceAll('F#', 'f')
            .replaceAll('G#', 'g')
            .replaceAll('A#', 'a')
            .replaceAll('B#', 'b');
    };
    
    // 시간 계산 함수
    const getPlayTime = (start, end) => {
            const [startH, startM] = start.split(':').map(Number);
            const [endH, endM] = end.split(':').map(Number);
            
            if(isNaN(startH) || isNaN(startM) || isNaN(endH) || isNaN(endM)) {
                return 0;
            }
            
            const startMinutes = startH * 60 + startM;
            const endMinutes = endH * 60 + endM;
            
            return Math.max(0, endMinutes - startMinutes); 
    };
    
    // 재생 멜로디 생성 함수
    const generatePlayedMelody = (originalScore, playTime) => {
        if(!originalScore || playTime <= 0) return "";
        
        let result = "";
        for(let i = 0; i < playTime; i++) {
            result += originalScore[i % originalScore.length];
        }
        return result;
    };
    
    const targetMelody = convertSharp(m);
    
    // 타겟 멜로디가 빈 문자열이면 매칭 불가
    if(!targetMelody) return "(None)";
    
    const candidates = [];
    
    for(let i = 0; i < musicinfos.length; i++) {
        try {
            const parts = musicinfos[i].split(',');
            if(parts.length < 4) continue;  // 잘못된 형식
            
            const [start, end, title, score] = parts;
            
            const playTime = getPlayTime(start, end);
            if(playTime <= 0) continue;  // 재생시간 0 이하
            
            const convertedScore = convertSharp(score);
            if(!convertedScore) continue;  // 빈 악보
            
            const playedMelody = generatePlayedMelody(convertedScore, playTime);
            
            // 재생 멜로디가 타겟보다 짧으면 매칭 불가
            if(playedMelody.length < targetMelody.length) continue;
            
            if(playedMelody.includes(targetMelody)) {
                candidates.push({
                    title: title,
                    playTime: playTime,
                    index: i
                });
            }
        } catch(e) {
            continue;  // 오류 발생시 다음 음악으로
        }
    }
    
    if(candidates.length === 0) {
        return "(None)";
    }
    
    candidates.sort((a, b) => {
        if(a.playTime !== b.playTime) {
            return b.playTime - a.playTime;
        }
        return a.index - b.index;
    });
    
    return candidates[0].title;
}