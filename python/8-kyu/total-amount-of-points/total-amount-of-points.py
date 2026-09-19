def points(games):
    total = 0
    listed_scores = [[int(x) for x in s.split(':')] for s in games]
    for score in listed_scores:
        if score[0] > score[1]:
            total += 3
        elif score[0] == score[1]:
            total += 1
        else:
            total += 0
    return total