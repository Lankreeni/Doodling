print("Lamperin tietovisa")
vastaus = input('Ootko valmis pelaamaan? yes/no :')
pisteet = 0
kysymysMäärä = 5

if vastaus.lower()== 'yes':
    vastaus = input('Kysymys 1: What is the word? ')
    if vastaus.lower()=='bird':
        pisteet += 1
        print('Oikein!')
    else:
        print('Väärin! Oikea vastaus oli bird.')
    
    vastaus = input('Kysymys 2: Mikä oli Uranuksen nimi ennen uranusta? ')
    if vastaus.lower()== 'george':
        pisteet += 1
        print('Oikein!')
    else:
        print('Väärin! Oikea vastaus oli george.')

    vastaus = input('Kysymys 3: Mikä on ainoa kehon osa joka ei paranna itseään? ')
    if vastaus.lower()== 'hampaat':
        pisteet += 1
        print('Oikein!')
    else:
        print('Väärin! Oikea vastaus oli hampaat.')
    
    vastaus = input('Kysymys 4: Kuka oli ensimmäinen nainen joka voitti Nobelin palkinnon vuonna 1903? ')
    if vastaus.lower()== 'Marie Curie':
        pisteet += 1
        print('Oikein!')
    else:
        print('Väärin! Oikea vastaus oli Marie Curie.')
    
    vastaus = input('Kysymys 5: Minä vuonna Berliinin muurin, joka jakoi Itä-Saksan ja Länsi-Saksan, purku aloitettiin? ')
    if vastaus.lower()== '1989':
        pisteet += 1
        print('Oikein!')
    else:
        print('Väärin! Oikea vastaus oli 1989.')


    print('Kiitos pelaamisesta! Sait',pisteet,"vastausta oikein!")

    vastaus = input("Oliko peli viihdyttävä? (kyllä/ei) ")
    if vastaus.lower()== 'kyllä':
        pisteet += 1
        print('Kiitos, Moikka!')
    else:
        print('not cool dude')


    

    

