def count_by(x, n):
    """
    Return a sequence of numbers counting by `x` `n` times.
    """
#     z = []
#     for i in range(1, n + 1):
#         z.append(x * i)
#     return z
​
    return [x * i for i in range(1, n + 1)]
    