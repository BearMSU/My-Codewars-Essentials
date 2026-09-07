def high_and_low(numbers):
    # ...
    new_arr = [int(x) for x in numbers.split(" ")]
    return f"{max(new_arr)} {min(new_arr)}"