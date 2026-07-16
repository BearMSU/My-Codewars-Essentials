def square_sum(numbers):
    #your code here
    num_squared = list(map(lambda n: n ** 2, numbers))
    total = 0
    for n in num_squared:
        total += n
    return total