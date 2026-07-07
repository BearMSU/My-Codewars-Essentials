def abbrev_name(name):
    list_name = name.split()
    abbrev = f"{list_name[0][0]}.{list_name[1][0]}"
    return abbrev.upper()