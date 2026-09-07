def high_and_low(numbers):
    # ...
    arr = numbers.split(" ")
    int_arr = [int(x) for x in arr]
    sorted_arr = sorted(int_arr)
    high = sorted_arr[-1]
    low = sorted_arr[0]
    return str(high) + " " + str(low)