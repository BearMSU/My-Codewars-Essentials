def number(lines):
    #your code here
    new_lines = []
    for index, value in enumerate(lines):
        new_lines.append(f"{index + 1}: {value}")
    return new_lines