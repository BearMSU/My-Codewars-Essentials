def divisors(integer):
    d_list = [n for n in range(2, integer) if integer % n == 0]
    
    if len(d_list) == 0:
        return f"{integer} is prime"
    return d_list