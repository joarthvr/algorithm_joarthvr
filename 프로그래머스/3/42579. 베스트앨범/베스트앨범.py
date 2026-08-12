def solution(genres, plays):
    ans = []
    total = {}
    songs = {}
    
    for i, (genre, play) in enumerate(zip(genres, plays)):
        total[genre] = total.get(genre, 0) + play
        songs.setdefault(genre, []).append((play, i))
    ordered_genres = sorted(total, key = lambda x : total[x], reverse=True)
    
    for genre in ordered_genres:
        
        songs[genre].sort(key = lambda x : (-x[0], x[1]))
        
        for play, index in songs[genre][:2]:
            ans.append(index)

    return ans