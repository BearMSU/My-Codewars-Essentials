from collections import Counter
def find_it(seq):
    count = Counter(seq)
    for key, value in count.items():
        if value % 2 != 0:
            return key
​