def luck_check(sl):
    if type(sl) == bool:
        return 'error'
    if type(sl) == int:
        return 'error'
    if type(sl) == float:
        return 'error'
    r = int((len(sl) / 2))
    sl = list(sl)
    print(sl)
    one = []
    two = []
    c1 = 0
    c2 = 0
    for i in sl:
        one += i
        c1 += 1
        if c1 >= r:
            break
    for i in reversed(sl):
        two += i
        c2 += 1
        if c2 >= r:
            break
    print(one, two)
    one = [int(item) for item in one]
    two = [int(item) for item in two]
    luck1 = sum(one)
    luck2 = sum(two)
    print(luck1, luck2)
    if luck1 == luck2:
        return True
    if luck1 != luck2:
        return False
    else:
        return 'error'
