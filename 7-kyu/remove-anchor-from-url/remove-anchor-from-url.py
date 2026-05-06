def remove_url_anchor(url):
    new_url = ""
    # TODO: complete
    for char in url:
        if char != "#":
            new_url += char
        else:
            break
    return new_url