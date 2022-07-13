def calc(x):
    total1 = ''
    for i in x:
        total1 += (str(ord(i)))
    total2 = total1.replace('7', '1')
    total1 = sum(map(int,str(total1)))
    total2 = sum(map(int,str(total2)))
    n = total1 - total2
    return n
