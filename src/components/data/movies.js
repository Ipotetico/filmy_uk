const movies = [
  {
    id: 1,
    hash: 'PESEL',
    title: 'Jak uzyskać PESEL',
    opis: 'W tym filmie dowiesz się jak założyć profil zaufany oraz jak uzyskać nr PESEL, by legalnie korzystać z opieki zdrowotnej, pomocy społecznej lub założyć firmę.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%201%20-%20Jak%20uzyskac%20PESEL%20-%20clean%20FC3%20v2022-05-20.mp4',
  },
  {
    id: 2,
    hash: 'praca',
    title: 'Legalna praca w Polsce',
    opis: 'W tym filmie dowiesz się, jak podjąć legalną pracę w Polsce.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%202%20-%20Legalna%20praca%20w%20Polsce%20FC5%20v2022-06-01.mp4',
  },
  {
    id: 3,
    hash: 'leczenie',
    title: 'Dostęp do lekow',
    opis: 'W tym filmie dowiesz się, czy możesz korzystać z refundowanych leków w Polsce.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%203%20-%20Dostep%20do%20lekow%20-%20clean%20FC5%20v2022-05-30v2.mp4',
  },
  {
    id: 4,
    hash: 'leczenie',
    title: 'Publiczna opieka medyczna',
    opis: 'W tym filmie dowiesz się, jak możesz skorzystać z publicznej opieki medycznej w Polsce',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%204%20-%20Publiczna%20opieka%20medyczna%20FC2%20v2022-05-31.mp4',
  },
  {
    id: 5,
    hash: 'pobyt',
    title: 'Legalny pobyt w Polsce',
    opis: 'W tym filmie dowiesz się, jak zalegalizować swój pobyt w Polsce.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%205%20-%20Legalny%20pobyt%20w%20Polsce%20-%20clean%20FC3%20v2022-06-03.mp4',
  },
  {
    id: 6,
    hash: 'podatki',
    title: 'Zwolnienia z podatku',
    opis: 'W tym filmie dowiesz się kiedy przysługuje Ci zwolnienie z podatku od uzyskanych świadczeń,',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%206%20-%20Zwolnienia%20z%20podatku%20-%20clean%20FC2%20v2022-06-03.mp4',
  },
  {
    id: 7,
    hash: 'edukacja',
    title: 'Dofinansowanie żłobka',
    opis: 'W tym filmie dowiesz się, jak otrzymać dofinansowanie pobytu dziecka w żłobku, klubie dziecięcym lub u dziennego opiekuna.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%207%20-%20Dofinansowanie%20%c5%bc%c5%82obka%20FC1%20v2022-06-03.mp4',
  },
  {
    id: 8,
    hash: 'zapomogi',
    title: 'Jednorazowa pomoc pieniężna',
    opis: 'W tym filmie dowiesz się, jak otrzymać jednorazową pomoc pieniężną.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%208%20-%20Jednorazowa%20pomoc%20pieni%c4%99%c5%bcna%20FC1%20v2022-06-08.mp4',
  },
  {
    id: 9,
    hash: 'zapomogi',
    title: 'Pomoc społeczna',
    opis: 'W tym filmie dowiesz się, jak otrzymać pomoc społeczną w formie świadczeń pieniężnych, niepieniężnych lub żywnościowych.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
        'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%209%20-%20Pomoc%20spo%c5%82eczna%20FC1%20v2022-06-09.mp4',
  },
  {
    id: 10,
    hash: 'edukacja',
    title: 'Żłobek dla dziecka',
    opis: 'W tym filmie dowiesz się, jak i kiedy zapisać dziecko do żłobka.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%2011%20-%20%c5%bb%c5%82obek%20dla%20dziecka%20FC1%20v2022-06-14.mp4',
  },
  {
    id: 11,
    hash: 'edukacja',
    title: 'Szkoła dla dziecka',
    opis: 'W tym filmie dowiesz się, jak zapisać dziecko do szkoły.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
      'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%2013%20-%20Szko%c5%82a%20dla%20dziecka%20FC1%20v2022-06-10.mp4',
  },
  {
    id: 12,
    hash: 'edukacja',
    title: 'Studia i praca naukowa',
    opis: 'W tym filmie dowiesz się, jak kontynuować studiowanie lub pracę na uczelni.',
    length: '4 min 13 sek',
    weight: '326 Mb',
    address:
        'https://consolatrix.pl/UKRY/FILMY/EDUKR%20-%20Film%20nr%2014%20-%20Studia%20i%20praca%20naukowa%20FC1%20v2022-06-17.mp4',
  },
];

export default movies;
