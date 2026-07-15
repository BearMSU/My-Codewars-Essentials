def multiple_of_index(arr):
    multi_arr = []
    for i, val in enumerate(arr):
        if i == 0 and val == 0:
            multi_arr.append(val);
        elif i > 0 and val % i == 0:
            multi_arr.append(val);
    return multi_arr