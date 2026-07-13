const questions = [
  {
    "id": 1,
    "num": 0,
    "page": 1,
    "question": "Kur u miratua Kushtetuta e Republikës së Maqedonisë?",
    "options": [
      "17.11.1991",
      "25.01.1991",
      "08.09.1991"
    ],
    "answerIndex": 0
  },
  {
    "id": 2,
    "num": 1,
    "page": 1,
    "question": "Si përcaktohet sovraniteti në nenin 1, paragrafi (2) të Kushtetutës së Republikës së Maqedonisë?",
    "options": [
      "i pandashëm, i patjetërsueshëm dhe i pabartshëm",
      "i pandashëm, i ndryshueshëm dhe i pabartshëm",
      "i ndryshueshëm, i ndashëm dhe i pabartshëm"
    ],
    "answerIndex": 0
  },
  {
    "id": 3,
    "num": 2,
    "page": 1,
    "question": "Sovraniteti buron dhe u përket:",
    "options": [
      "qytetarëve",
      "ligjeve",
      "Kushtetutës"
    ],
    "answerIndex": 0
  },
  {
    "id": 4,
    "num": 3,
    "page": 1,
    "question": "Republika e Maqedonisë, sipas Kushtetutës është...",
    "options": [
      "shtet sovran dhe demokratik",
      "shtet sovran dhe i pavarur",
      "shtet sovran, i pavarur, demokratik dhe social"
    ],
    "answerIndex": 2
  },
  {
    "id": 5,
    "num": 4,
    "page": 1,
    "question": "Territori i Republikës së Maqedonisë është:",
    "options": [
      "i pacenueshëm dhe i patjetërsueshëm",
      "i pandashëm dhe i patjetërsueshëm",
      "i pandashëm dhe i pacenueshëm"
    ],
    "answerIndex": 2
  },
  {
    "id": 6,
    "num": 5,
    "page": 1,
    "question": "Sundimi i ligjit është një nga vlerat themelore të Kushtetutës së Republikës së Maqedonisë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 7,
    "num": 6,
    "page": 2,
    "question": "Shtetasit të Republikës së Maqedonisë nuk mund t'i merret shtetësia, dhe as të dëbohet apo të dorëzohet në shtet tjetër.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 8,
    "num": 7,
    "page": 2,
    "question": "Kufiri i Republikës së Maqedonisë mund të ndryshohet vetëm...",
    "options": [
      "në bazë të ligjit",
      "në përputhje me Kushtetutën",
      "në përputhje me Kushtetutën, bazuar në parimin e vullnetarizmit dhe në përputhje me normat e pranuara përgjithësisht ndërkombëtare"
    ],
    "answerIndex": 1
  },
  {
    "id": 9,
    "num": 8,
    "page": 2,
    "question": "Simbolet shtetërore të Republikës së Maqedonisë janë:",
    "options": [
      "ushtria, policia dhe doganat",
      "kuvendi, qeveria dhe gjykatat",
      "stema, flamuri dhe himni"
    ],
    "answerIndex": 2
  },
  {
    "id": 10,
    "num": 9,
    "page": 2,
    "question": "Ligji për stemën, flamurin dhe himnin e Republikës së Maqedonisë miratohet me...",
    "options": [
      "shumicën e numrit të përgjithshëm të deputetëve",
      "dy të tretat e votave të numrit të përgjithshëm të deputetëve",
      "shumicën e deputetëve të pranishëm"
    ],
    "answerIndex": 1
  },
  {
    "id": 11,
    "num": 10,
    "page": 2,
    "question": "Çdo qytetar, në komunikim me ministritë mund të përdorë njërën nga gjuhët zyrtare dhe shkrimin e saj, ndërkaq ministritë përgjigjen...",
    "options": [
      "në gjuhën maqedonase dhe shkrimin e saj cirilik, si dhe gjuhën zyrtare dhe shkrimin që e flet qytetari",
      "në gjuhën maqedonase dhe angleze",
      "në gjuhën maqedonase dhe shkrimin e saj cirilik"
    ],
    "answerIndex": 0
  },
  {
    "id": 12,
    "num": 11,
    "page": 2,
    "question": "Liritë dhe të drejtat themelore të njeriut dhe qytetarit janë:",
    "options": [
      "të pavarura",
      "materie kushtetuese në Republikën e Maqedonisë",
      "personale"
    ],
    "answerIndex": 1
  },
  {
    "id": 13,
    "num": 12,
    "page": 2,
    "question": "Dënimi me vdekje në Republikën e Maqedonisë nuk mund të shqiptohet në asnjë bazë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 14,
    "num": 13,
    "page": 2,
    "question": "Integriteti fizik dhe moral i njeriut është i pacenueshëm.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 15,
    "num": 14,
    "page": 3,
    "question": "I thirruri, i ndaluari ose i privuari nga liria ka të drejtën e mbrojtësit....",
    "options": [
      "në procedurën gjyqësore",
      "në procedurën policore dhe gjyqësore",
      "me miratimin e prokurorit publik"
    ],
    "answerIndex": 1
  },
  {
    "id": 16,
    "num": 15,
    "page": 3,
    "question": "I privuari nga liria duhet patjetër të dalë para gjyqit...",
    "options": [
      "brenda shtatë ditëve",
      "brenda tri ditëve",
      "menjëherë, ndërkaq brenda 24 orëve nga çasti i privimit nga liria"
    ],
    "answerIndex": 2
  },
  {
    "id": 17,
    "num": 16,
    "page": 3,
    "question": "Deri në ngritjen e aktakuzës, paraburgimi mund të zgjasë më së shumti...",
    "options": [
      "180 ditë nga dita e paraburgimit",
      "90 ditë nga dita e paraburgimit",
      "30 ditë nga dita e paraburgimit"
    ],
    "answerIndex": 0
  },
  {
    "id": 18,
    "num": 17,
    "page": 3,
    "question": "Censura në Republikën e Maqedonisë është:",
    "options": [
      "e lejuar, kur bëhet fjalë për përmbajtje fyese",
      "e ndaluar me Kushtetutë",
      "nuk lejohet"
    ],
    "answerIndex": 1
  },
  {
    "id": 19,
    "num": 18,
    "page": 3,
    "question": "A garantohet siguria dhe fshehtësia e të dhënave personale me Kushtetutën e Republikës së Maqedonisë?",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 20,
    "num": 19,
    "page": 3,
    "question": "Liria e tregut dhe sipërmarrësia…",
    "options": [
      "janë të garantuara me Kushtetutë",
      "nuk janë të garantuara me Kushtetutë"
    ],
    "answerIndex": 0
  },
  {
    "id": 21,
    "num": 20,
    "page": 3,
    "question": "Shtetasit të Republikës së Maqedonisë:",
    "options": [
      "mund t'i hiqet shtetësia, të dëbohet ose të ekstradohet në një vend tjetër, vetëm në raste të jashtëzakonshme",
      "nuk mund t'i hiqet shtetësia, as që mund të dëbohet apo të dorëzohet në një shtet tjetër",
      "mund t'i hiqet shtetësia, të dëbohet ose të ekstradohet në një vend tjetër"
    ],
    "answerIndex": 1
  },
  {
    "id": 22,
    "num": 21,
    "page": 3,
    "question": "I akuzuari për vepër të dënueshme do të konsiderohet si i pafajshëm derisa të fajësia e tij të vërtetohet me:",
    "options": [
      "vendim",
      "aktvendim",
      "vendim gjyqësor të formës së prerë"
    ],
    "answerIndex": 2
  },
  {
    "id": 23,
    "num": 22,
    "page": 4,
    "question": "E drejta e votës fitohet duke mbushur:",
    "options": [
      "18 vjet jetë",
      "16 vjet jetë",
      "14 vjet jetë"
    ],
    "answerIndex": 0
  },
  {
    "id": 24,
    "num": 23,
    "page": 4,
    "question": "Ekstradimi i një të huaji mund të kryhet:",
    "options": [
      "vetëm në bazë të një marrëveshjeje ndërkombëtare të ratifikuar",
      "vetëm në bazë të parimit të reciprocitetit",
      "vetëm në bazë të një marrëveshjeje ndërkombëtare të ratifikuar dhe të parimit të reciprocitetit"
    ],
    "answerIndex": 2
  },
  {
    "id": 25,
    "num": 24,
    "page": 4,
    "question": "Veprimet e terrorizmit konsiderohen vepra penale politike",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 26,
    "num": 25,
    "page": 4,
    "question": "Ushtrimi i të drejtës së grevës mund të kufizohet me ligj te...",
    "options": [
      "ushtria dhe policia",
      "forcat e armatosura, policia dhe autoritetet",
      "institucionet shëndetësore"
    ],
    "answerIndex": 1
  },
  {
    "id": 27,
    "num": 26,
    "page": 4,
    "question": "I huaji në Republikën e Maqedonisë mund të fitojë të drejtën e pronës sipas kushteve të përcaktuara me ligj.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 28,
    "num": 27,
    "page": 4,
    "question": "Fëmijëve pa prindër dhe fëmijëve pa kujdes prindëror, kujdes të veçantë u siguron...",
    "options": [
      "një anëtar i familjes së ngushtë",
      "Republika e Maqedonisë",
      "njësia e vetëqeverisjes lokale në të cilën jetojnë"
    ],
    "answerIndex": 1
  },
  {
    "id": 29,
    "num": 28,
    "page": 4,
    "question": "Nuk mund të jetë i punësuar personi më i ri se:",
    "options": [
      "15 vjeç",
      "16 vjeç",
      "18 vjeç"
    ],
    "answerIndex": 0
  },
  {
    "id": 30,
    "num": 29,
    "page": 5,
    "question": "Të miturit nuk guxojnë të punësohen...",
    "options": [
      "në vende pune për të cilat është paraparë punë gjatë natës",
      "në vende pune që kërkojnë punë me tre ndërrime",
      "në vende pune të dëmshme për shëndetin dhe moralin e tyre"
    ],
    "answerIndex": 2
  },
  {
    "id": 31,
    "num": 30,
    "page": 5,
    "question": "Arsimi fillor është i detyrueshëm dhe falas.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 32,
    "num": 31,
    "page": 5,
    "question": "Secili është i detyruar të paguajë tatim dhe detyrime të tjera publike, dhe të marrë pjesë në shlyerjen e shpenzimeve publike sipas mënyrës së përcaktuar me ligj.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 33,
    "num": 32,
    "page": 5,
    "question": "Pjesëtarët e bashkësive kanë të drejtë të mësojnë në gjuhën e tyre.",
    "options": [
      "në arsimin fillor",
      "në arsimin fillor dhe të mesëm, sipas mënyrës së përcaktuar me ligj",
      "në arsimin fillor, në bazë të vendimit të njësisë së vetëqeverisjes lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 34,
    "num": 33,
    "page": 5,
    "question": "Republika e Maqedonisë kujdeset për të drejtat kulturore, ekonomike dhe sociale të qytetarëve të Republikës së Maqedonisë jashtë vendit",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 35,
    "num": 34,
    "page": 5,
    "question": "Çdo qytetar, në procedurë të bazuar në parimet e prioritetit dhe të urgjencës, mund të thirret në mbrojtjen e lirive dhe të drejtave të përcaktuara me Kushtetutën e Republikës së Maqedonisë para...",
    "options": [
      "organeve të administratës shtetërore",
      "Gjykatës Kushtetuese të Republikës së Maqedonisë",
      "gjykatave dhe para Gjykatës Kushtetuese të Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 36,
    "num": 35,
    "page": 5,
    "question": "Ligjet dhe rregulloret e tjera botohen:",
    "options": [
      "në internet",
      "në \"Gazetën Zyrtare të Republikës së Maqedonisë\"",
      "nuk botohen"
    ],
    "answerIndex": 1
  },
  {
    "id": 37,
    "num": 36,
    "page": 5,
    "question": "Ligjet dhe dispozitat e tjera botohen në \"Gazetën Zyrtare të Republikës së Maqedonisë\" më së voni...",
    "options": [
      "pesë ditë nga nga miratimi i tyre",
      "shtatë ditë nga miratimi i tyre",
      "dhjetë ditë nga nga miratimi i tyre"
    ],
    "answerIndex": 1
  },
  {
    "id": 38,
    "num": 37,
    "page": 6,
    "question": "Ligjet dhe rregulloret e tjera nuk mund të kenë veprim kthyes, përveç përjashtimit, në rastet kur është më e favorshme për qytetarët.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 39,
    "num": 38,
    "page": 6,
    "question": "Avokatura është...",
    "options": [
      "shërbim privat që qytetarëve u ofron ndihmë juridike",
      "shërbimi gjyqësor që qytetarëve u ofron ndihmë juridike",
      "shërbim publik i pavarur që siguron ndihmë juridike dhe ushtron autorizime publike në përputhje me ligjin"
    ],
    "answerIndex": 2
  },
  {
    "id": 40,
    "num": 39,
    "page": 6,
    "question": "Liritë dhe të drejtat e njeriut dhe qytetarit mund të kufizohen vetëm në rastet e përcaktuara me...",
    "options": [
      "pëlqim personal",
      "ligj",
      "Kushtetutën e Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 41,
    "num": 40,
    "page": 6,
    "question": "Bankë përgjegjëse për stabilitetin e valutës në Republikën e Maqedonisë është:",
    "options": [
      "Banka Europiane për Rindërtim dhe Zhvillim",
      "Banka Popullore e Republikës së Maqedonisë",
      "Banka Botërore"
    ],
    "answerIndex": 1
  },
  {
    "id": 42,
    "num": 41,
    "page": 6,
    "question": "Kuvendi i Republikës së Maqedonisë përbëhet prej:",
    "options": [
      "100 deri 120",
      "120 deri 140 deputetësh",
      "130 deri 150 deputetësh"
    ],
    "answerIndex": 1
  },
  {
    "id": 43,
    "num": 42,
    "page": 6,
    "question": "Deputetët e Kuvendit të Republikës së Maqedonisë zgjidhen me mandat:",
    "options": [
      "4 vjeçar",
      "6 vjeçar",
      "7 vjeçar"
    ],
    "answerIndex": 0
  },
  {
    "id": 44,
    "num": 43,
    "page": 6,
    "question": "Heqjen e mandatit të deputetit e vërteton:",
    "options": [
      "Kryetari i Kuvendit të Republikës së Maqedonisë",
      "Komisioni i zgjedhjeve dhe i emërimeve pranë Kuvendit të Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 45,
    "num": 44,
    "page": 7,
    "question": "Kuvendi i sapozgjedhur i Republikës së Maqedonisë mblidhet në seancë konstituive",
    "options": [
      "më së voni 15 ditë pas zgjedhjeve të mbajtura",
      "më së voni 20 ditë pas zgjedhjeve të mbajtura",
      "më së voni 30 ditë pas zgjedhjeve të mbajtura"
    ],
    "answerIndex": 1
  },
  {
    "id": 46,
    "num": 45,
    "page": 7,
    "question": "Kuvendi i Republikës së Maqedonisë shpërbëhet:",
    "options": [
      "nuk mund të shpërbëhet",
      "me shumicë prej dy të tretat",
      "nëse deklarohet shumica e numrit të përgjithshëm të deputetëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 47,
    "num": 46,
    "page": 7,
    "question": "Deputetit i ndërpritet mandati kur dënohet për vepër penale për të cilën është përcaktuar dënim me burg në kohëzgjatje prej më së paku:",
    "options": [
      "tre vjet",
      "katër vjet",
      "pesë vjet"
    ],
    "answerIndex": 2
  },
  {
    "id": 48,
    "num": 47,
    "page": 7,
    "question": "Seancat e Kuvendit të Republikës së Maqedonisë janë:",
    "options": [
      "publike",
      "të hapura",
      "të mbyllura"
    ],
    "answerIndex": 0
  },
  {
    "id": 49,
    "num": 48,
    "page": 7,
    "question": "Funksioni i kryetarit të Kuvendit të Republikës së Maqedonisë është i mospërputhshëm me kryerjen e një funksioni tjetër publik, një profesioni ose një funksioni në parti politike.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 50,
    "num": 49,
    "page": 7,
    "question": "Seancat e Kuvendit të Republikës së Maqedonisë i thërret:",
    "options": [
      "sekretari i Kuvendit të Republikës së Maqedonisë",
      "shërbimi profesional i Kuvendit të Republikës së Maqedonisë",
      "kryetari i Kuvendit të Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 51,
    "num": 50,
    "page": 7,
    "question": "Buxhetin e Republikës dhe llogarinë përfundimtare të buxhetit e miraton:",
    "options": [
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë",
      "ministri i Financave"
    ],
    "answerIndex": 1
  },
  {
    "id": 52,
    "num": 51,
    "page": 8,
    "question": "Të drejtë për të propozuar miratimin e një ligji ka:",
    "options": [
      "çdo deputet i Kuvendit të Republikës së Maqedonisë dhe së paku 10.000 votues",
      "çdo deputet i Kuvendit të Republikës së Maqedonisë",
      "çdo deputet i Kuvendit të Republikës së Maqedonisë, Qeveria e Republikës së Maqedonisë dhe së paku 10.000 votues"
    ],
    "answerIndex": 2
  },
  {
    "id": 53,
    "num": 52,
    "page": 8,
    "question": "Interpelancë mund të dorëzojnë:",
    "options": [
      "një grup deputetësh",
      "të paktën pesë deputetë",
      "çdo deputet"
    ],
    "answerIndex": 1
  },
  {
    "id": 54,
    "num": 53,
    "page": 8,
    "question": "Pyetje deputetësh mund të parashtrojë:",
    "options": [
      "një grup prej tre deputetësh",
      "një grup prej pesë deputetësh",
      "çdo deputet"
    ],
    "answerIndex": 2
  },
  {
    "id": 55,
    "num": 54,
    "page": 8,
    "question": "Kuvendi është i detyruar të shpallë referendum kur do të paraqesin propozim:",
    "options": [
      "çdo qytetar",
      "të paktën 150,000 votues",
      "të paktën 130,000 votues"
    ],
    "answerIndex": 1
  },
  {
    "id": 56,
    "num": 55,
    "page": 8,
    "question": "Avokatin e Popullit të Republikës së Maqedonisë e zgjedh Kuvendi i Republikës së Maqedonisë",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 57,
    "num": 56,
    "page": 8,
    "question": "Mandati i Avokatit të Popullit të Republikës së Maqedonisë është:",
    "options": [
      "gjashtë vjet",
      "pesë vjet",
      "tetë vjet"
    ],
    "answerIndex": 2
  },
  {
    "id": 58,
    "num": 57,
    "page": 8,
    "question": "Komandanti i Përgjithshëm i Forcave të Armatosura të Republikës së Maqedonisë është:",
    "options": [
      "Kryetari i Qeverisë së Republikës së Maqedonisë",
      "Presidenti i Republikës së Maqedonisë",
      "Kryetari i Kuvendit të Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 59,
    "num": 58,
    "page": 9,
    "question": "Për President të Republikës së Maqedonisë mund të zgjidhet personi i cili në ditën e zgjedhjeve të ketë mbushur të paktën:",
    "options": [
      "43 vjet jetë",
      "45 vjet jetë",
      "40 vjet jetë"
    ],
    "answerIndex": 2
  },
  {
    "id": 60,
    "num": 59,
    "page": 9,
    "question": "Mandati i Presidentit të Republikës është:",
    "options": [
      "shtatë vjet",
      "pesë vjet",
      "tetë vjet"
    ],
    "answerIndex": 1
  },
  {
    "id": 61,
    "num": 60,
    "page": 9,
    "question": "Presidenti i Republikës, për çështje nga juridiksioni i tij, i raporton Kuvendit të Republikës së Maqedonisë:",
    "options": [
      "në gjashtë muaj",
      "në tre muaj",
      "të paktën një herë në vjet"
    ],
    "answerIndex": 2
  },
  {
    "id": 62,
    "num": 61,
    "page": 9,
    "question": "Raundi i dytë i votimit për zgjedhjen e Presidentit të Republikës së Maqedonisë mbahet:",
    "options": [
      "në afat prej 15 ditëvshe nga përfundimi i raundit të parë",
      "në afat prej 30 ditësh nga përfundimi i raundit të parë",
      "në afatë prej 14 ditësh nga përfundimi i raundit të parë"
    ],
    "answerIndex": 2
  },
  {
    "id": 63,
    "num": 62,
    "page": 9,
    "question": "Në rast të pengesës në ushtrimin e detyrës, Presidentin e Republikës e zëvendëson:",
    "options": [
      "shefi i Zyrës së Presidentit",
      "Kryetari i Kuvendit të Republikës së Maqedonisë",
      "Kryetari i Qeverisë së Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 64,
    "num": 63,
    "page": 9,
    "question": "Zgjedhje për deputetë të Kuvendit të Republikës së Maqedonisë dhe zgjedhje për President të Republikës së Maqedonisë shpall:",
    "options": [
      "Sekretari i Kuvendit të Republikës së Maqedonisë",
      "Kryetari i Kuvendit të Republikës së Maqedonisë",
      "Kryetari i Qeverisë së Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 65,
    "num": 64,
    "page": 9,
    "question": "Për heqjen e imunitetit të Presidentit të Republikës së Maqedonisë vendos:",
    "options": [
      "Kuvendi i Republikës së Maqedonisë",
      "Gjykata e Lartë e Republikës së Maqedonisë",
      "Gjykata Kushtetuese e Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 66,
    "num": 65,
    "page": 10,
    "question": "Kryetar i Këshillit të Sigurimit të Republikës së Maqedonisë është:",
    "options": [
      "Kryetari i Qeverisë së Republikës së Maqedonisë",
      "Presidenti i Republikës së Maqedonisë",
      "Kryetari i Kuvendit të Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 67,
    "num": 66,
    "page": 10,
    "question": "Bartës i pushtetit ekzekutiv në Republikën e Maqedonisë është:",
    "options": [
      "Gjykata e Lartë e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë",
      "Qeveria e Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 68,
    "num": 67,
    "page": 10,
    "question": "Funksioni i kryetarit të Qeverisë dhe i ministrit është i mospërputhshëm me kryerjen e funksioneve ose të profesioneve të tjera publike",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 69,
    "num": 68,
    "page": 10,
    "question": "I mandatuari për krijimin e Qeverisë i paraqet Kuvendit të Republikës së Maqedonisë programin dhe propozon përbërjen e Qeverisë në afat prej:",
    "options": [
      "tetë ditësh nga dhënia e mandatit",
      "20 ditësh nga dhënia e mandatit",
      "15 ditësh nga dhënia e mandatit"
    ],
    "answerIndex": 1
  },
  {
    "id": 70,
    "num": 69,
    "page": 10,
    "question": "Mocion mosbesimi ndaj Qeverisë mund të paraqesin:",
    "options": [
      "të paktën 15 deputetë",
      "të paktën 20 deputetë",
      "një grup deputetësh"
    ],
    "answerIndex": 1
  },
  {
    "id": 71,
    "num": 70,
    "page": 10,
    "question": "Mandati i Qeverisë ndërpritet me shpërbërjen e Kuvendit.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 72,
    "num": 71,
    "page": 10,
    "question": "Për imunitetin e kryetarit të Qeverisë së Republikës së Maqedonisë vendos:",
    "options": [
      "Qeveria e Republikës së Maqedonisë",
      "Gjykata Kushtetuese e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 73,
    "num": 72,
    "page": 10,
    "question": "Administrata shtetërore përbëhet nga:",
    "options": [
      "ministritë dhe organet përbërëse",
      "organet e pavarura të administratës shtetërore",
      "ministritë dhe organet e tjera të administratës dhe organizatat e tjera të përcaktuara me ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 74,
    "num": 73,
    "page": 11,
    "question": "Gjykatë më e lartë në Republikën e Maqedonisë është:",
    "options": [
      "Gjykata e Apelit e Republikës së Maqedonisë",
      "Gjykata e Lartë e Republikës së Maqedonisë",
      "Gjykata Kushtetuese e Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 75,
    "num": 74,
    "page": 11,
    "question": "Një gjykatës zgjidhet",
    "options": [
      "me mandat tetë vjeçar",
      "me mandat gjashtë vjeçar",
      "pa kufizim të kohëzgjatjes së mandatit"
    ],
    "answerIndex": 2
  },
  {
    "id": 76,
    "num": 75,
    "page": 11,
    "question": "Mandati i anëtarëve të Këshillit Gjyqësor të Republikës së Maqedonisë është:",
    "options": [
      "pesë vjet",
      "gjashtë vjet",
      "tetë vjet"
    ],
    "answerIndex": 1
  },
  {
    "id": 77,
    "num": 76,
    "page": 11,
    "question": "Këshillin Gjyqësor të Republikës së Maqedonisë e përbëjnë:",
    "options": [
      "12 anëtarë",
      "15 anëtarë",
      "16 anëtarë"
    ],
    "answerIndex": 1
  },
  {
    "id": 78,
    "num": 77,
    "page": 11,
    "question": "Për punën e vet, Këshilli Gjyqësor i Republikës së Maqedonisë dorëzon raport vjetor te:",
    "options": [
      "Qeveria e Republikës së Maqedonisë",
      "ministri i Drejtësisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 79,
    "num": 78,
    "page": 11,
    "question": "Prokurorin Publik i Republikës së Maqedonisë e emëron dhe e shkarkon:",
    "options": [
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë",
      "ministri i Drejtësisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 80,
    "num": 79,
    "page": 11,
    "question": "Prokurori Publik i Republikës së Maqedonisë ka mandat:",
    "options": [
      "10 vjeçar",
      "tetë vjeçar",
      "gjashtë vjeçar"
    ],
    "answerIndex": 2
  },
  {
    "id": 81,
    "num": 80,
    "page": 11,
    "question": "Prokurorët Publikë i zgjedh:",
    "options": [
      "Kuvendi i Republikës së Maqedonisë",
      "Këshilli Gjyqësor i Republikës së Maqedonisë",
      "Këshilli i Prokurorëve Publikë,"
    ],
    "answerIndex": 2
  },
  {
    "id": 82,
    "num": 81,
    "page": 12,
    "question": "Prokurorët publikë zgjidhen:",
    "options": [
      "për një mandat 4 vjeçar",
      "për një mandat 5 vjeçar",
      "pa kufizim të kohëzgjatjes së mandatit"
    ],
    "answerIndex": 2
  },
  {
    "id": 83,
    "num": 82,
    "page": 12,
    "question": "Gjykata Kushtetuese e Republikës së Maqedonisë është organ i Republikës që mbron kushtetutshmërinë dhe ligjshmërinë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 84,
    "num": 83,
    "page": 12,
    "question": "Gjykatën Kushtetuese të Republikës së Maqedonisë e përbëjnë:",
    "options": [
      "nëntë gjykatës",
      "12 gjykatës",
      "shtatë gjykatës"
    ],
    "answerIndex": 0
  },
  {
    "id": 85,
    "num": 84,
    "page": 12,
    "question": "Mandati i gjykatësit të Gjykatës Kushtetuese të Republikës së Maqedonisë zgjat:",
    "options": [
      "nëntë vjet",
      "tetë vjet",
      "gjashtë vjet"
    ],
    "answerIndex": 0
  },
  {
    "id": 86,
    "num": 85,
    "page": 12,
    "question": "Vendimet e Gjykatës Kushtetuese të Republikës së Maqedonisë janë:",
    "options": [
      "përfundimtare",
      "të formës së prerë",
      "përfundimtare dhe ekzekutive"
    ],
    "answerIndex": 2
  },
  {
    "id": 87,
    "num": 86,
    "page": 12,
    "question": "Njësitë e vetëqeverisjes lokale janë:",
    "options": [
      "kryetari i komunës",
      "komunat",
      "këshilli i komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 88,
    "num": 87,
    "page": 12,
    "question": "Për përdorimin e gjuhëve dhe të shkrimeve në të cilatflasin më pak se 20% të qytetarëve në njësitë e vetëqeverisjes lokale...",
    "options": [
      "vendos Kuvendi i Republikës së Maqedonisë",
      "vendos Qeveria e Republikës së Maqedonisë",
      "vendosin organet e njësive të vetëqeverisjes lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 89,
    "num": 88,
    "page": 13,
    "question": "Qyteti i Shkupit është njësi e veçantë e vetëqeverisjes lokale, organizimi i së cilës rregullohet me ligj.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 90,
    "num": 89,
    "page": 13,
    "question": "Marrëveshjet ndërkombëtare, në emër të Republikës së Maqedonisë, i lidh:",
    "options": [
      "Kuvendi i Republikës së Maqedonisë",
      "Presidenti i Republikës së Maqedonisë",
      "Kryetari i Kuvendit të Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 91,
    "num": 90,
    "page": 13,
    "question": "Vendim për anëtarësim të Republikës së Maqedonisë ose tërheqje nga organizatat ndërkombëtare merr:",
    "options": [
      "Kryetari i Kuvendit të Republikës së Maqedonisë",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 92,
    "num": 91,
    "page": 13,
    "question": "Gjendje lufte shpall:",
    "options": [
      "Kryetari i Qeverisë së Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë",
      "Qeveria e Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 93,
    "num": 92,
    "page": 13,
    "question": "Kushtetuta e Republikës së Maqedonisë ndryshohet dhe plotësohet me amendamente kushtetuese.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 94,
    "num": 93,
    "page": 13,
    "question": "Propozim për ndryshimin e Kushtetutës së Republikës së Maqedonisë mund të paraqesin:",
    "options": [
      "Kryetari i Kuvendit, Qeveria, të paktën 15 deputetë ose 100 mijë qytetarë",
      "Presidenti i Republikës, Qeveria, të paktën 30 deputetë ose 150 mijë qytetarë",
      "Kryetari i Qeverisë, Kuvendit, të paktën 30 deputetë ose 150 mijë qytetarë"
    ],
    "answerIndex": 1
  },
  {
    "id": 95,
    "num": 94,
    "page": 13,
    "question": "Ndryshimin e Kushtetutës së Republikës së Maqedonisë e shpall:",
    "options": [
      "Kryetari i Kuvendit të Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë",
      "Presidenti i Republikës"
    ],
    "answerIndex": 1
  },
  {
    "id": 96,
    "num": 95,
    "page": 14,
    "question": "Ekzistimin e gjendjes së jashtëzakonshme në territorin e Republikës së Maqedonisë ose në një pjesë të saj e vërteton:",
    "options": [
      "Presidenti i Republikës së Maqedonisë",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 97,
    "num": 96,
    "page": 14,
    "question": "Dekrete me fuqi ligjore gjatë gjendjes së luftës ose gjendjes së jashtëzakonshme miraton:",
    "options": [
      "ministri i Mbrojtjes",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 98,
    "num": 97,
    "page": 14,
    "question": "Komitetin e Marrëdhënieve ndërmbet Bashkësive e përbëjnë:",
    "options": [
      "15 anëtarë",
      "19 anëtarë",
      "17 anëtarë"
    ],
    "answerIndex": 1
  },
  {
    "id": 99,
    "num": 98,
    "page": 14,
    "question": "Liria e tregut dhe sipërmarrësia është vlerë themelore e garantuar me:",
    "options": [
      "akte nënligjore",
      "Kushtetutën e Republikës së Maqedonisë",
      "Ligj"
    ],
    "answerIndex": 1
  },
  {
    "id": 100,
    "num": 99,
    "page": 14,
    "question": "Liria e tregut dhe sipërmarrësia paraqet vlerë themelore të:",
    "options": [
      "Gjykatës Kushtetuese të Republikës së Maqedonisë",
      "rendit kushtetues",
      "rendit juridik"
    ],
    "answerIndex": 1
  },
  {
    "id": 101,
    "num": 100,
    "page": 14,
    "question": "Liritë dhe të drejtat e njeriut dhe qytetarit mund të kufizohen vetëm:",
    "options": [
      "me ligj",
      "me akte nënligjore",
      "në raste të vërtetuara sipas Kushtetutës së Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 102,
    "num": 101,
    "page": 14,
    "question": "Të drejtat ekonomike, sociale dhe kulturore janë:",
    "options": [
      "kategori gjyqësore",
      "kategori kuvendore",
      "kategori kushtetuese në Republikën e Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 103,
    "num": 102,
    "page": 15,
    "question": "E drejta e pronës si kategori kushtetuese krijon të drejta dhe detyrime dhe duhet të shërbejë për të mirën:",
    "options": [
      "e individit dhe të bashkësisë",
      "e individit",
      "e bashkësisë"
    ],
    "answerIndex": 0
  },
  {
    "id": 104,
    "num": 103,
    "page": 15,
    "question": "Në rast të shpronësimit të pronës:",
    "options": [
      "nuk garantohet kompensim i drejtë",
      "nuk garantohet kompensim",
      "garantohet kompensim"
    ],
    "answerIndex": 2
  },
  {
    "id": 105,
    "num": 104,
    "page": 15,
    "question": "Në rast të shpronësimit të pronës, garantohet kompensim i drejtë:",
    "options": [
      "që mund të jetë më i ulët se vlera e tregut",
      "që është arbitrar",
      "që nuk mund të jetë më i ulët se vlera e tregut"
    ],
    "answerIndex": 2
  },
  {
    "id": 106,
    "num": 105,
    "page": 15,
    "question": "Një i huaj në Republikën e Maqedonisë:",
    "options": [
      "mund të fitojë të drejtë pronësie sipas kushteve të tij",
      "mund të fitojë të drejtë pronësie sipas kushteve të përcaktuara me ligj",
      "nuk mund të fitojë të drejtë pronësie"
    ],
    "answerIndex": 1
  },
  {
    "id": 107,
    "num": 106,
    "page": 15,
    "question": "Të drejtën e fitimit të duhur e gëzon:",
    "options": [
      "çdo i punësuar pas përfundimit të 6 muajve të punës",
      "çdo i punësuar",
      "çdo i papunë"
    ],
    "answerIndex": 1
  },
  {
    "id": 108,
    "num": 107,
    "page": 15,
    "question": "Çdo i punësuar gëzon të drejtën e pushimit të paguar ditor, javor dhe vjetor.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 109,
    "num": 108,
    "page": 15,
    "question": "Për të ushtruar të të drejtat e tyre ekonomike dhe sociale, qytetarët...?",
    "options": [
      "kanë ndalesë me ligj që të themelojnë sindikata",
      "kanë të drejtë të themelojnë sindikata",
      "nuk kanë të drejtë të formojnë sindikata"
    ],
    "answerIndex": 1
  },
  {
    "id": 110,
    "num": 109,
    "page": 16,
    "question": "A ofron Republika e Maqedonisë status të barabartë juridik për të gjitha subjektet në treg?",
    "options": [
      "po",
      "jo, nuk ofron fare",
      "jo, vetëm subjekteve të caktuara"
    ],
    "answerIndex": 0
  },
  {
    "id": 111,
    "num": 110,
    "page": 16,
    "question": "Investuesit e huaj, të drejtën e tërheqjes lirisht të kapitalit dhe të fitimit të investuar:",
    "options": [
      "e kanë të kufizuar",
      "e kanë të garantuar",
      "nuk e kanë të garantuar"
    ],
    "answerIndex": 1
  },
  {
    "id": 112,
    "num": 111,
    "page": 16,
    "question": "Të drejtat e fituara në bazë të kapitalit të investuar:",
    "options": [
      "mund të kufizohen me ligj",
      "mund tëzvogëlohen me ligj",
      "nuk mund të zvogëlohen me ligj apo rregullore tjetër"
    ],
    "answerIndex": 2
  },
  {
    "id": 113,
    "num": 112,
    "page": 16,
    "question": "Banka Popullore e Republikës së Maqedonisë është përgjegjëse për:",
    "options": [
      "politikën ekzekutive",
      "politikën monetare",
      "politikën fiskale"
    ],
    "answerIndex": 1
  },
  {
    "id": 114,
    "num": 113,
    "page": 16,
    "question": "Buxhetin e Republikës e propozon:",
    "options": [
      "Ministria e Financave",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 115,
    "num": 114,
    "page": 16,
    "question": "Buxhetin e Republikës e miraton:",
    "options": [
      "Ministria e Financave",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 116,
    "num": 115,
    "page": 16,
    "question": "Cili e propozon vendimin për rezervat e Republikës dhe kujdeset për zbatimin e tyre?",
    "options": [
      "Gjykata",
      "Qeveria e Republikës së Maqedonisë",
      "Kuvendi i Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 117,
    "num": 116,
    "page": 17,
    "question": "Komunat financohen nga:",
    "options": [
      "burimet e veta të të hyrave të përcaktuara me ligj",
      "burimet e veta të të hyrave të përcaktuara me ligj dhe me mjete nga Republika e Maqedonisë",
      "me mjete nga Republika e Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 118,
    "num": 117,
    "page": 17,
    "question": "Qyteti i Shkupit financohet nga:",
    "options": [
      "burimet e veta të të hyrave të përcaktuara me ligj",
      "me mjete nga Republika",
      "burimet e veta të të hyrave të përcaktuara me ligj, dhe me mjete të Republikës"
    ],
    "answerIndex": 2
  },
  {
    "id": 119,
    "num": 118,
    "page": 17,
    "question": "Ligjet shpallen:",
    "options": [
      "me rregullore",
      "me vendim",
      "me dekret"
    ],
    "answerIndex": 2
  },
  {
    "id": 120,
    "num": 119,
    "page": 17,
    "question": "Ligji për stemën, flamurin dhe himnin e Republikës së Maqedonisë miratohet me...",
    "options": [
      "shumicën e numrit të përgjithshëm të deputetëve",
      "shumicën e deputetëve të pranishëm",
      "dy të tretën e votave nga numri i përgjithshëm i deputetëve VERIUT"
    ],
    "answerIndex": 2
  },
  {
    "id": 121,
    "num": 120,
    "page": 17,
    "question": "Anëtarin e Këshillit të Komunës që zëvendëson Kryetarin e Komunës, në rast të pengesës ose të mungesës së tij, e cakton:",
    "options": [
      "Sekretari i administratës komunale",
      "Kryetari i Komunës",
      "Keshilli"
    ],
    "answerIndex": 1
  },
  {
    "id": 122,
    "num": 121,
    "page": 17,
    "question": "Njësitë e vetëqeverisjes lokale janë:",
    "options": [
      "komunat dhe bashkësitë lokale",
      "komunat, bashkësitë lokale dhe urbane",
      "komunat"
    ],
    "answerIndex": 2
  },
  {
    "id": 123,
    "num": 122,
    "page": 17,
    "question": "Komunat i kryejnë përgjegjësitë e tyre nëpërmjet:",
    "options": [
      "shoqatat e qytetarëve të formuara në territorin e komunave",
      "organeve të zgjedhura drejtpërdrejt nga qytetarët",
      "bashkësitë urbane dhe bashkësitë lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 124,
    "num": 123,
    "page": 18,
    "question": "Organet e komunës janë:",
    "options": [
      "mbledhje e qytetarëve",
      "bashkësitë urbane, përkatësisht lokale",
      "këshilli dhe kryetari i komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 125,
    "num": 124,
    "page": 18,
    "question": "Si zgjidhen anëtarët e këshillit të komunave?",
    "options": [
      "i zgjedh kryetari i komunës, me propozim të ministrit të Vetëqeverisjes Lokale",
      "i zgjedh kryetari i komunës, nga radhët e administratës profesionale të komunës",
      "me votim të fshehtë në zgjedhje të përgjithshme, të drejtpërdrejta dhe të lira"
    ],
    "answerIndex": 2
  },
  {
    "id": 126,
    "num": 125,
    "page": 18,
    "question": "Anëtarët e Këshillit zgjidhen për një periudhë:",
    "options": [
      "katërvjeçare",
      "pesëvjeçare",
      "gjashtëvjeçare"
    ],
    "answerIndex": 0
  },
  {
    "id": 127,
    "num": 126,
    "page": 18,
    "question": "Anëtarët e sapozgjedhur, në seancën konstituive të këshillit japin dhe nënshkruajnë:",
    "options": [
      "betim solemn",
      "deklaratë solemne",
      "vendim solemn"
    ],
    "answerIndex": 1
  },
  {
    "id": 128,
    "num": 127,
    "page": 18,
    "question": "Cili e miraton Rregulloren e sistematizimit të vendeve të punës në administratën komunale?",
    "options": [
      "Përgjegjësi i Sektorit",
      "Këshilli i komunës",
      "Kryetari i komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 129,
    "num": 128,
    "page": 18,
    "question": "Simbolet e komunës janë:",
    "options": [
      "stema, flamuri dhe himni",
      "stema dhe flamuri",
      "kryetari i komunës dhe këshilli i komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 130,
    "num": 129,
    "page": 18,
    "question": "Për shqyrtimin e punëve dhe përcaktimin e propozimeve nga një fushë e caktuar, nga përbërja e tij këshilli mund të formojë:",
    "options": [
      "vetëm komisione të përhershme",
      "vetëm komisione të përkohshme",
      "komisione të përhershme dhe të përkohshme"
    ],
    "answerIndex": 2
  },
  {
    "id": 131,
    "num": 130,
    "page": 19,
    "question": "Këshilli i komunës, në pjesën e miratimit të rregulloreve, luan rolin e:",
    "options": [
      "Qeverisë së Republikës së Maqedonisë",
      "Kuvendit të Republikës së Maqedonisë",
      "organit këshillues për punën e kryetarit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 132,
    "num": 131,
    "page": 19,
    "question": "Sa zgjat mandati i anëtarëve të Këshillit të komunës?",
    "options": [
      "dy vjet",
      "katër vjet",
      "pesë vjet"
    ],
    "answerIndex": 1
  },
  {
    "id": 133,
    "num": 132,
    "page": 19,
    "question": "Cili themelon shërbime publike në kuadër të kompetencës së komunave dhe mbikëqyrë punën e tyre?",
    "options": [
      "ministri i Vetëqeverisjes Lokale;",
      "Kryetari i komunës",
      "Këshilli i komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 134,
    "num": 133,
    "page": 19,
    "question": "Seancat e këshillit thirren sipas nevojës, por...",
    "options": [
      "të paktën një herë në muaj",
      "të paktën një herë në tre muaj",
      "të paktën një herë në javë"
    ],
    "answerIndex": 1
  },
  {
    "id": 135,
    "num": 134,
    "page": 19,
    "question": "Nëse këshilli i komunës shpërbëhet, punët e këshillit deri në zgjedhjen e këshillit të ri i kryen?",
    "options": [
      "askush nuk i kryen punët deri në zgjedhjen e një këshilli të ri",
      "anëtari i autorizuar i këshillit",
      "kryetari i komunës, pa të drejtë të miratimit të rregulloreve që janë në kompetencë të këshillit"
    ],
    "answerIndex": 2
  },
  {
    "id": 136,
    "num": 135,
    "page": 19,
    "question": "Të punësuarit në administratën komunale të cilët kryejnë punë profesionale, normativo- juridike, ekzekutive, administrative-mbikëqyrëse dhe që vendosin për punë administrative kanë statusin e:",
    "options": [
      "nëpunësit administrativ dhe për ta vlejnë dispozitat e Ligjit të Nëpunësve Administrativë",
      "nëpunësit e posaçëm që për ta vlejnë dispozitat e Ligjit të Vetëqeverisjes Lokale",
      "nëpunësit në administratën komunale për të cilët vlejnë rregulloret dhe aktet ligjore të miratuara nga këshilli i komunës"
    ],
    "answerIndex": 0
  },
  {
    "id": 137,
    "num": 136,
    "page": 19,
    "question": "Numri i anëtarëve të këshillit përcaktohet në varësi të:",
    "options": [
      "vendimit të kryetarit të komunës",
      "vendimit të banorëve të komunës",
      "numrit të banorëve të komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 138,
    "num": 137,
    "page": 20,
    "question": "Numri i anëtarëve të këshillit përcaktohet nga:",
    "options": [
      "vendim të kryetarit të komunës",
      "vendim i banorëve të komunës",
      "ligji"
    ],
    "answerIndex": 2
  },
  {
    "id": 139,
    "num": 138,
    "page": 20,
    "question": "Bashkëpunimi ndërkomunal vendoset për...",
    "options": [
      "kryerje të punëve të përbashkëta",
      "realizimin e interesave dhe qëllimeve të përbashkëta",
      "kryerjen e përbashkët të punëve në kompetencë të komunave, kryerjen e punëve të përbashkëta dhe realizimin e interesave dhe të qëllimeve të përbashkëta."
    ],
    "answerIndex": 2
  },
  {
    "id": 140,
    "num": 139,
    "page": 20,
    "question": "Për realizimin e interesave dhe qëllimeve të përbashkëta në zbatimin e kompetencave, komunat bashkojnë...",
    "options": [
      "mjete financiare",
      "mjete material",
      "mjete financiare, materiale dhe të tjera"
    ],
    "answerIndex": 2
  },
  {
    "id": 141,
    "num": 140,
    "page": 20,
    "question": "Propozimi, përkatësisht nisma e vendosjes së bashkëpunimit ndërkomunal i dorëzohet...",
    "options": [
      "Kryetari i komunës",
      "Këshillit të komunës",
      "Qyteti i Shkupit"
    ],
    "answerIndex": 1
  },
  {
    "id": 142,
    "num": 141,
    "page": 20,
    "question": "Këshilli i komunës apo i komunave, të cilave u është dorëzuar propozimi për vendosjen e bashkëpunimit ndërkomunal, vendos për themelimin e tij në afat prej më së voni...",
    "options": [
      "90 ditë nga dorëzimi i propozimit",
      "60 ditë nga dorëzimi i propozimit",
      "30 ditë nga dorëzimi i propozimit"
    ],
    "answerIndex": 0
  },
  {
    "id": 143,
    "num": 142,
    "page": 20,
    "question": "Për realizimin e bashkëpunimit ndërkomunal, mund të formohet...",
    "options": [
      "organ dhe komision i përbashkët punues",
      "organ i përbashkët administrativ",
      "organ dhe komision i përbashkët punues, dhe organ i përbashkët administrativ"
    ],
    "answerIndex": 2
  },
  {
    "id": 144,
    "num": 143,
    "page": 20,
    "question": "Cilat janë shërbimet e përbashkëta publike me të cilat realizohet bashkëpunimi ndërkomunal?",
    "options": [
      "institucioni i përbashkët publik dhe këshilli mbikëqyrës i bashkëpunimit ndërkomunal",
      "ndërmarrje e përbashkët publike dhe institucion i përbashkët publik",
      "ndërmarrje e përbashkët publike dhe këshilli i bashkëpunimit"
    ],
    "answerIndex": 1
  },
  {
    "id": 145,
    "num": 144,
    "page": 21,
    "question": "Të drejtat dhe detyrimet e ndërsjella të komunave, që kanë formuar një organ të përbashkët administrativ rregullohen me marrëveshje të nënshkruar nga...",
    "options": [
      "Këshillat e komunave që kanë formuar një organ të përbashkët administrativ",
      "Kryetarët e komunave, që kanë formuar organ të përbashkët administrativ",
      "Kryetarët dhe këshillat e komunave, që kanë formuar një organ të përbashkët administrativ"
    ],
    "answerIndex": 1
  },
  {
    "id": 146,
    "num": 145,
    "page": 21,
    "question": "Organi i përbashkët administrativ mund të formohet si...",
    "options": [
      "sektor i përbashkët",
      "njësi e përbashkët",
      "sektor i përbashkët, njësi e përbashkët, ose njësit i përbashkët projektues"
    ],
    "answerIndex": 2
  },
  {
    "id": 147,
    "num": 146,
    "page": 21,
    "question": "Drejtuesi i organit të përbashkët administrativ paraqet raport për punën e tij dhe të organit të përbashkët administrativ para kryetarëve të komunave dhe këshillave komunale çdo...",
    "options": [
      "tre muaj",
      "gjashtë muaj",
      "12 muaj"
    ],
    "answerIndex": 1
  },
  {
    "id": 148,
    "num": 147,
    "page": 21,
    "question": "Nëse komunat nuk pajtohen ndryshe, selia e organit të përbashkët administrativ është në selinë e...",
    "options": [
      "këshillit komunal me numrin më të madh të banorëve",
      "komunës me numrin më të madh të banorëve",
      "komunës me më pak banorë"
    ],
    "answerIndex": 1
  },
  {
    "id": 149,
    "num": 148,
    "page": 21,
    "question": "Ndërmarrja e përbashkët publike, aktet për të cilat komunat themelues të ndërmarrjes së përbashkët publike japin pëlqimin, i dorëzon në...",
    "options": [
      "Këshillin e komunës me numrin më të madh të banorëve",
      "Këshillat e komunave",
      "Kryetarët e komunave"
    ],
    "answerIndex": 1
  },
  {
    "id": 150,
    "num": 149,
    "page": 21,
    "question": "Për bashkimin e mjeteve financiare, materiale dhe të tjera ndërmjet komunave lidhet marrëveshje nga...",
    "options": [
      "Këshillat e komunave që bashkojnë mjetet financiare dhe mjete të tjera",
      "Këshillat e komunave që kanë numrin më të madh të banorëve",
      "Kryetarët e komunave që bashkojnë mjete financiare, materiale dhe të tjera"
    ],
    "answerIndex": 2
  },
  {
    "id": 151,
    "num": 150,
    "page": 21,
    "question": "Përveç tatimeve vendore, taksave vendore dhe kompensimeve vendore, të hyrave nga pronat e komunës që paraqesin burime të të hyrave vetjake, cilat të hyra të tjera bëjnë pjesë në këtë grup?",
    "options": [
      "vetëkontributi dhe donacionet",
      "donacionet dhe gjobat",
      "vetëkontributi, gjobat, donacionet dhe të hyra të tjera me ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 152,
    "num": 151,
    "page": 22,
    "question": "Buxheti i komunës paraqet plan vjetor për financimin e kompetencave të komunës, që përbëhet nga vlerësimi vjetor i:",
    "options": [
      "të hyrave sipas burimeve",
      "shpenzimeve sipas qëllimit",
      "të hyrave sipas burimeve dhe shpenzimeve sipas qëllimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 153,
    "num": 152,
    "page": 22,
    "question": "Në përputhje me Ligjin e Financimit të Njësive të Vetëqeverisjes Lokale, subvencioni paraqet transferim nga...",
    "options": [
      "Buxheti i Republikës së Maqedonisë në buxhetin e komunës",
      "Buxhetet e fondeve në buxhetin e komunës",
      "Buxheti i Republikës së Maqedonisë së Veriut dhe buxhetet e fondeve në buxhetin e komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 154,
    "num": 153,
    "page": 22,
    "question": "Çfarë subvencionesh ekzistojnë sipas përkufizimeve në Ligjin e Financimit të Njësive të Vetëqeverisjes Lokale?",
    "options": [
      "subvencion qëllimor, kapital dhe për kompetencë të deleguar",
      "subvencion qëllimor, kapital, blloku për kompetencë të deleguar",
      "subvencion qëllimor, kapital dhe blloku"
    ],
    "answerIndex": 1
  },
  {
    "id": 155,
    "num": 154,
    "page": 22,
    "question": "Një anëtar i këshillit nuk mund të tërhiqet.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 156,
    "num": 155,
    "page": 22,
    "question": "Kompetenca e këshillit të komunës përcaktohet me:",
    "options": [
      "Kushtetutën e Republikës së Maqedonisë së Veriut",
      "Ligjin e Vetëqeverisjes Lokale",
      "vendim të kryetarit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 157,
    "num": 156,
    "page": 22,
    "question": "Si e ushtrojnë qytetarët të drejtën e vetëqeverisjes lokale?",
    "options": [
      "drejtpërdrejt dhe nëpërmjet deputetëve të zgjedhur nga popullsia vendase",
      "nëpërmjet bashkësive lokale",
      "drejtpërdrejt dhe nëpërmjet përfaqësuesve në organet komunale"
    ],
    "answerIndex": 2
  },
  {
    "id": 158,
    "num": 157,
    "page": 22,
    "question": "Seancat e këshillit i thërret:",
    "options": [
      "kryetari i komunës",
      "kryetari i këshillit",
      "të paktën 1/4 e anëtarëve të këshillit"
    ],
    "answerIndex": 1
  },
  {
    "id": 159,
    "num": 158,
    "page": 23,
    "question": "Seancë të jashtëzakonshme të këshillit thërret:",
    "options": [
      "kryetari i komunës",
      "të paktën 1/3 e anëtarëve të këshillit",
      "kryetari i këshillit"
    ],
    "answerIndex": 2
  },
  {
    "id": 160,
    "num": 159,
    "page": 23,
    "question": "Cili e mban regjistrin e stemave dhe të flamujve të komunave në Republikën e Maqedonisë së Veriut?",
    "options": [
      "Bashkësia e Njësive të Vetëqeverisjes Lokale - BNJVL",
      "Kuvendi i Republikës së Maqedonisë së veriut",
      "Ministria e Vetëqeverisjes Lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 161,
    "num": 160,
    "page": 23,
    "question": "Komunat në Republikën e Maqedonisë së Veriut financohen nga burimet e veta të të hyrave, nga subvencionet e shtetit, dhe nga burime të tjera të të hyrave, në përputhje me ligjin?",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 162,
    "num": 161,
    "page": 23,
    "question": "Në korniza të përcaktuara me ligj, komuna përcakton lartësinë e normave të tatimeve, lartësinë e kompensimeve dhe të taksave vendore.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 163,
    "num": 162,
    "page": 23,
    "question": "Komunat në Republikën e Maqedonisë së Veriut financohen nga burimet e veta të të hyrave, nga subvencionet dhe burimet e tjera të financimit.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 164,
    "num": 163,
    "page": 23,
    "question": "Për realizimin e interesave të përbashkëta dhe kryerjen e detyrave të përbashkëta nën kompetencën e komunave, në përputhje me ligjin, komunat mund të bashkojnë mjete ndërmjet vete, të themelojnë shërbime të përbashkëta publike ose organe të përbashkëta administrative në fusha të caktuara.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 165,
    "num": 164,
    "page": 23,
    "question": "Cili mban evidencë për bashkëpunimin e arritur ndërkombëtar të komunave?",
    "options": [
      "Bashkësia e Njësive të Vetëqeverisjes Lokale",
      "Kuvendi i Republikës së Maqedonisë",
      "Ministria e ngarkuar për kryerjen e punëve që kanë të bëjnë me vetëqeverisjen lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 166,
    "num": 165,
    "page": 24,
    "question": "Gjatë përcaktimit të territorit të komunës merret parasysh tërësia natyrore gjeografike dhe ekonomike, objektet e ndërtuara infrastrukturore dhe objektet e standardit shoqëror, si dhe për kufijtë e komunave kadastrale.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 167,
    "num": 166,
    "page": 24,
    "question": "Cili ligj rregullon përcaktimin e territorit, të emrave, të selive dhe të kufijve të komunave dhe procedurën e themelimit të komunave?",
    "options": [
      "Ligji i Vetëqeverisjes Lokale",
      "Ligji i Organizimit Territorial të Vetëqeverisjes Lokale të Republikës së Maqedonisë së Veriut",
      "Ligji i Financimit të Njësive të Vetëqeverisjes Lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 168,
    "num": 167,
    "page": 24,
    "question": "Në kuadër të Ligjit, komunat, në përputhje me parimin e subsidiaritetit, kanë të drejtë që në territorin e tyre të kryejnë punë të interesit publik, të rëndësisë lokale, që nuk janë të përjashtuara nga kompetenca e tyre ose nuk janë në kompetencë të organeve të pushtetit shtetëror.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 169,
    "num": 168,
    "page": 24,
    "question": "Gjatë seancave të këshillit, kur diskutohet buxheti i komunës, llogaria vjetore e buxhetit dhe planet urbanistike, prania e publikut:",
    "options": [
      "mund të përjashtohet me vendim të kryetarit të këshillit",
      "nuk mund të përjashtohet",
      "mund të përjashtohet, nëse vendoset me dy të tretat e votave të numrit të përgjithshëm të anëtarëve të këshillit"
    ],
    "answerIndex": 1
  },
  {
    "id": 170,
    "num": 169,
    "page": 24,
    "question": "Gjatë delegimit të kompetencave nga organi i administratës shtetërore, komunës i barten edhe mjete financiare nga Buxheti i Republikës së Maqedonisë së Veriut që u kushtohen kryerjes së atyre punëve, por mënyrën e kryerjes së punëve e cakton komuna, ndërkaq ajo mund t'u përshtatet kushteve lokale, duke respektuar standardet e përcaktuara me ligj",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 171,
    "num": 170,
    "page": 24,
    "question": "Kryetari dhe anëtarët e këshillit:",
    "options": [
      "mund të thirren në përgjegjësi penale ose të paraburgosen për shprehje të mendimit në këshill",
      "mund të thirren në përgjegjësi penale, por nuk mund të paraburgosen për shprehje të mendimit në këshill",
      "nuk mund të thirren në përgjegjësi penale ose të paraburgosen për shprehje të mendimit në këshill"
    ],
    "answerIndex": 2
  },
  {
    "id": 172,
    "num": 171,
    "page": 25,
    "question": "Komuna është përgjegjëse subsidiare për kryerjen e punëve të interesit publik, nga ana e shërbimeve publike, dhe personat e angazhuar juridikë dhe fizikë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 173,
    "num": 172,
    "page": 25,
    "question": "Cilat nga format e mëposhtme të pjesëmarrjes së drejtpërdrejtë të qytetarëve në vendimmarrjen e komunave janë të parapara me Ligjin e Vetëqeverisjes Lokale?",
    "options": [
      "shoqatat e qytetarëve të formuara në territorin e komunave",
      "shoqëritë kulturore dhe artistike në komuna",
      "nisma qytetare, mbledhia e qytetarëve dhe referendum"
    ],
    "answerIndex": 2
  },
  {
    "id": 174,
    "num": 173,
    "page": 25,
    "question": "Nisma qytetare mund të propozohet për diskutim në këshill, nëse propozimi mbështetet nga...",
    "options": [
      "të paktën 10% e zgjedhësve të komunës",
      "të paktën 20% e zgjedhësve të komunës",
      "të paktën 30% e zgjedhësve të komunës"
    ],
    "answerIndex": 0
  },
  {
    "id": 175,
    "num": 174,
    "page": 25,
    "question": "Nisma qytetare nuk mund të dorëzohet për çështje kuadri dhe financiare.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 176,
    "num": 175,
    "page": 25,
    "question": "Këshilli është i detyruar të shpallë referendum për çështje që janë në kompetencë të komunës dhe për çështje të tjera të rëndësisë lokale, nëse propozimi mbështetet nga...",
    "options": [
      "të paktën 10% e zgjedhësve të komunës",
      "të paktën 20% e zgjedhësve të komunës",
      "të paktën 30% e zgjedhësve të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 177,
    "num": 176,
    "page": 25,
    "question": "Vendimi i marrë me referendum është i detyrueshëm për këshillin e komunës",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 178,
    "num": 177,
    "page": 25,
    "question": "Cili zgjedh drejtorët e shërbimeve publike të krijuara nga komuna?",
    "options": [
      "Administrata komunale",
      "Këshilli i komunës",
      "Kryetari i komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 179,
    "num": 178,
    "page": 25,
    "question": "Miratimi i buxhetit dhe i llogarisë vjetore të komunës është në kompetencë të këshillit të komunës.",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 180,
    "num": 179,
    "page": 26,
    "question": "Themelimi i shërbimeve publike dhe emërimi i anëtarëve në këshillat e tyre drejtuese është në kompetencë të...",
    "options": [
      "Administratës komunale",
      "Këshillit të komunës",
      "Kryetarit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 181,
    "num": 180,
    "page": 26,
    "question": "Mbledhi e qytetarëve mund të thirret për:",
    "options": [
      "vetëm për territorin e të gjithë komunës",
      "vetëm për territorin e vetëqeverisjes lokale",
      "territorin e të  gjithë komunës, ose për territorin e vetëqeverisjes lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 182,
    "num": 181,
    "page": 26,
    "question": "Mbledhia e qytetarëve thirret nga:",
    "options": [
      "sekretari i komunës",
      "kryetari i komunës",
      "kryetari i këshillit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 183,
    "num": 182,
    "page": 26,
    "question": "Organet e komunës:",
    "options": [
      "nuk janë të detyruar t'i shqyrtojnë përfundimet e arritura në mbledhinë e qytetarëve",
      "janë të detyruar t'i shqyrtojnë përfundimet e arritura në mbledhinë e qytetarëve",
      "mund t'i shqyrtojë përfundimet e arritura në mbledhjen e qytetarëve, nëse kështu vendos shumica e anëtarëve të këshillit"
    ],
    "answerIndex": 1
  },
  {
    "id": 184,
    "num": 183,
    "page": 26,
    "question": "Punëdhënësi është i detyruar ta lirojë nga puna profesionale anëtarin e këshillit, për shkak të pjesëmarrjes në seancat e këshillit ose të komisioneve në të cilat është anëtar.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 185,
    "num": 184,
    "page": 26,
    "question": "Kompetenca e prezantimit dhe e përfaqësimit të komunën i takon...",
    "options": [
      "Këshillit të komunës",
      "Kryetari i komunës",
      "Kryetarit të këshillit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 186,
    "num": 185,
    "page": 26,
    "question": "Ligjshmërinë e rregulloreve të këshillit të komunës e kontrollon",
    "options": [
      "Kryetari i këshillit të komunës",
      "Kryetari i Komunës",
      "përgjegjësi i njësisë së auditimit të brendshëm në administratën komunale"
    ],
    "answerIndex": 1
  },
  {
    "id": 187,
    "num": 186,
    "page": 27,
    "question": "Rregulloren e Sistematizimit të vendeve të punës në administratën komunale e miraton:",
    "options": [
      "këshilli i komunës me shumicë votash",
      "Kryetari i komunës",
      "kryetari i komunës me propozimin e këshillit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 188,
    "num": 187,
    "page": 27,
    "question": "Administrata komunale është përgjegjëse për përgatitjen e akteve të këshillit të komunës dhe të kryetarit të komunës, për përgatitjen e seancave të këshillit dhe të komisioneve të tij të përhershme dhe të përkohshme.",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 189,
    "num": 188,
    "page": 27,
    "question": "Si themelohen apo shfuqizohen organet e përbashkëta administrative ndërmjet komunave?",
    "options": [
      "në bazë të një memorandumi bashkëpunimi të nënshkruar nga secili prej kryetarëve të këshillave komunal",
      "në bazë të një memorandumi bashkëpunimi të nënshkruar nga secili prej kryetarëve të komunave",
      "në bazë të vendimit të marrë me shumicë votash nga numri i përgjithshëm i anëtarëve të secilit prej këshillave të komunave"
    ],
    "answerIndex": 2
  },
  {
    "id": 190,
    "num": 189,
    "page": 27,
    "question": "Ku dhe në çfarë afati botohen rregulloret e miratuara nga këshilli i komunës?",
    "options": [
      "në Fletoren zyrtare të komunës, brenda 10 ditëve nga miratimi i tyre",
      "në Fletoren zyrtare të komunës, brenda shtatë ditëve nga miratimi i tyre",
      "në “Gazetën Zyrtare të Republikës së Maqedonisë së Veriut” në afat prej shtatë ditëve nga miratimi i tyre"
    ],
    "answerIndex": 1
  },
  {
    "id": 191,
    "num": 190,
    "page": 27,
    "question": "Për zgjidhjen e të drejtave, detyrimeve dhe interesave individuale të personave fizikë dhe juridikë, kryetari i komunës miraton:",
    "options": [
      "vendime",
      "përfundime",
      "aktvendime"
    ],
    "answerIndex": 2
  },
  {
    "id": 192,
    "num": 191,
    "page": 27,
    "question": "Komuna ka të drejtë pronësie të sendeve, të mjeteve në parave dhe të të drejtave, vlera e të cilave shprehet gjatë:",
    "options": [
      "përpilimit të buxhetit të komunës",
      "përpilimit të llogarisë vjetore",
      "përpilimit të planit buxhetor katërvjeçar"
    ],
    "answerIndex": 1
  },
  {
    "id": 193,
    "num": 192,
    "page": 27,
    "question": "Shërbimet publike të themeluara nga komuna janë pronë e:",
    "options": [
      "qytetarëve të komunës",
      "komunës që i ka themeluar",
      "Qeverisë së Republikës së Maqedonisë së Veriut"
    ],
    "answerIndex": 1
  },
  {
    "id": 194,
    "num": 193,
    "page": 28,
    "question": "Për çfarë mund të përdoren mjetet financiare të përfituara nga shitja e sendeve në pronësi të komunës?",
    "options": [
      "për dhënien e subvencioneve për nxitjen e zhvillimit ekonomik lokal",
      "për punësimin e nëpunësve të rinj ose trajnimin e nëpunësve ekzistues të komunë",
      "për blerjen e sendeve të reja ose riparimin e sendeve ekzistuese në pronësi të komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 195,
    "num": 194,
    "page": 28,
    "question": "Këshilli i Komunës shpërbëhet nëse e miraton përsëri rregulloren që më parë e ka anuluar ose shfuqizuar Gjykata Kushtetuese e Republikës së Maqedonisë.",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 196,
    "num": 195,
    "page": 28,
    "question": "Këshilli i Komunës shpërbëhet nëse merr vendim me të cilin rrezikohet sovraniteti dhe integriteti territorial i Republikës së Maqedonisë.",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 197,
    "num": 196,
    "page": 28,
    "question": "Këshillli komunal shpërbëhet nëse nuk mblidhet për një periudhë më të gjatë se gjashtë muaj dhe nëse nuk miraton buxhetin dhe llogarinë vjetore të buxhetit deri më 31 mars të vitit aktual.",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 198,
    "num": 197,
    "page": 28,
    "question": "Cili i kryen punët e këshillit deri në zgjedhjen e këshillit të ri të komunës?",
    "options": [
      "Sekretari i komunës",
      "Kryetari i komunës",
      "Kryetari i këshillit të komunës"
    ],
    "answerIndex": 1
  },
  {
    "id": 199,
    "num": 198,
    "page": 28,
    "question": "Qeveria mund të lidhë marrëveshje bashkëpunimi me një ose më shumë komuna në fushën e interesit të përbashkët e për të cilat e informon:",
    "options": [
      "Ministrinë e Vetëqeverisjes Lokale",
      "Kuvendin e Republikës së Maqedonisë",
      "Bashkësinë e Njësive të Vetëqeverisjes Lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 200,
    "num": 199,
    "page": 28,
    "question": "Bashkësia e Njësive të Vetëqeverisjes Lokale ka të drejtë të bashkëpunojë me organizata përkatëse nga shtetet e tjera dhe të përfaqësojë Republikën e Maqedonisë së Veriut në organizatat ndërkombëtare të pushtetit lokal.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 201,
    "num": 200,
    "page": 29,
    "question": "Format e vetëqeverisjes lokale janë:",
    "options": [
      "bashkësitë urbane dhe bashkësitë rurale",
      "bashkësitë urbane dhe bashkësitë lokale",
      "bashkësitë urbane, bashkësitë rurale dhe bashkësitë lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 202,
    "num": 201,
    "page": 29,
    "question": "Mbikëqyrja mbi punën e organeve komunale në ushtrimin e kompetencave të tyre përfshin:",
    "options": [
      "mbikëqyrjen mbi ligjshmërinë dhe mbikëqyrjen mbi efikasitetin e punës",
      "mbikëqyrjen e efikasitetit dhe efektivitetit në punë",
      "mbikëqyrjen mbi ligjshmërinë dhe kontrollin, si dhe auditimin e punës materiale dhe financiare"
    ],
    "answerIndex": 2
  },
  {
    "id": 203,
    "num": 202,
    "page": 29,
    "question": "Mbikëqyrjen e ligjshmërisë së rregulloreve të komunës e bën:",
    "options": [
      "Bashkësia e Njësive të Vetëqeverisjes Lokale (BNJVL)",
      "Ministria e Shoqërisë Informatike dhe e Administratës",
      "ministria përgjegjëse për kryerjen e punëve të vetëqeverisjes lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 204,
    "num": 203,
    "page": 29,
    "question": "Mbikëqyrjen mbi kompetencat e deleguara të komunës e bëjnë:",
    "options": [
      "Bashkësia e Njësive të Vetëqeverisjes Lokale (BNJVL)",
      "organi i administratës shtetërore, kompetencat e të cilit i delegohen komunës",
      "ministria përgjegjëse për kryerjen e punëve të vetëqeverisjes lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 205,
    "num": 204,
    "page": 29,
    "question": "Kontrollin e punëve materiale dhe financiare të komunës e bën:",
    "options": [
      "Enti Shtetëror i Revizionit",
      "Ministria e Financave",
      "ministria përgjegjëse për kryerjen e punëve të vetëqeverisjes lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 206,
    "num": 205,
    "page": 29,
    "question": "Revizionin e punëve materiale dhe financiare të komunës e bën:",
    "options": [
      "Ministria e Financave",
      "Enti Shtetëror i Revizionit, në përputhje me Ligjin për Revizion Shtetëror",
      "ministria përgjegjëse për kryerjen e punëve të vetëqeverisjes lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 207,
    "num": 206,
    "page": 29,
    "question": "Me bashkëpunim ndërkomunal nënkuptohet edhe kryerja e punëve të caktuara në kompetencë të komunave, nga ana e një komune, për llogari të një ose më shumë komunave të tjera, në bazë të marrëveshjes së lidhur.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 208,
    "num": 207,
    "page": 30,
    "question": "Për realizimin e interesave dhe të qëllimeve të përbashkëta nëpërmjet bashkimit të mjeteve financiare, materiale dhe të tjera, komunat vendosin bashkëpunim ndërkomunal. Kush e merr vendimin për vendosjen e bashkëpunimit?",
    "options": [
      "secili prej kryetarëve të komunave",
      "Ministria e Vetëqeverisjes Lokale",
      "secili nga këshillat e komunave me shumicë votash nga numri i përgjithshëm i anëtarëve"
    ],
    "answerIndex": 2
  },
  {
    "id": 209,
    "num": 208,
    "page": 30,
    "question": "Cili mund të iniciojë një propozim, pra një nismë për vendosjen e bashkëpunimit ndërkomunal?",
    "options": [
      "Kryetari i Komunës, një anëtar i këshillit të komunës dhe i administratës komunale",
      "Kryetari i Komunës, një anëtar i këshillit të komunës dhe të paktën 20% e zgjedhësve",
      "Kryetari i Komunës, një anëtar i këshillit të komunës dhe të paktën 10% e zgjedhësve të komunës"
    ],
    "answerIndex": 2
  },
  {
    "id": 210,
    "num": 209,
    "page": 30,
    "question": "Cili vendos për propozimin, pra për nismën e vendosjes së bashkëpunimit ndërkomunal?",
    "options": [
      "Kryetari i komunës",
      "Këshilli i komunës",
      "qytetarët në referendum"
    ],
    "answerIndex": 1
  },
  {
    "id": 211,
    "num": 210,
    "page": 30,
    "question": "Cili e përgatit propozimin e aktit për themelimin e bashkëpunimit ndërkomunal dhe propozimet e akteve që vendosin ose formojnë mënyrat nëpërmjet të cilave do të realizohet bashkëpunimi ndërkomunal?",
    "options": [
      "Këshillat e komunave",
      "Komisioni i përbashkët",
      "Kabinetet e kryetarëve të komunave"
    ],
    "answerIndex": 1
  },
  {
    "id": 212,
    "num": 211,
    "page": 30,
    "question": "Si realizohet bashkëpunimi ndërkomunal?",
    "options": [
      "nëpërmjet formimit të organeve për bashkëpunim ndërkomunal dhe krijimit të shërbimeve të përbashkëta publike",
      "me procedurë të veçantë për vendimmarrje të përbashkët të këshillave të komunave",
      "nëpërmjet formimit të organeve për bashkëpunim ndërkomunal, krijimit të shërbimeve të përbashkëta publike dhe të lidhjes së marrëveshjeve"
    ],
    "answerIndex": 2
  },
  {
    "id": 213,
    "num": 212,
    "page": 30,
    "question": "Trup i përbashkët administrativ mund të themelohet nga dy ose më shumë komuna, në përputhje me Ligjin e Vetëqeverisjes Lokale, ku të drejtat dhe detyrimet e ndërsjella rregullohen me:",
    "options": [
      "rregullore",
      "KONTRATË",
      "Memorandum bashkëpunimi"
    ],
    "answerIndex": 1
  },
  {
    "id": 214,
    "num": 213,
    "page": 31,
    "question": "Si financohet Organi i përbashkët administrativ i komunave?",
    "options": [
      "komunat i ndajnë shpenzimet në mënyrë të barabartë, nëse komunat pajtohen ndryshe",
      "në përpjesëtim me llojin dhe vëllimin e punimeve në kompetencë të secilës komunë, nëse komunat nuk merren vesh ndryshe.",
      "në proporcion me numrin e nëpunësve nga secila komunë në Trupin e përbashkët administrativ, nëse komunat nuk merren vesh ndryshe"
    ],
    "answerIndex": 1
  },
  {
    "id": 215,
    "num": 214,
    "page": 31,
    "question": "Si themelohet një ndërmarrje e përbashkët publike?",
    "options": [
      "me marrëveshje të lidhur ndërmjet kryetarëve të komunave themeluese",
      "me vendim të këshillave të komunave themeluese, me shumicën e votave nga numri i përgjithshëm i anëtarëve të këshillit të secilës komunë.",
      "me marrëveshje të lidhur ndërmjet kryetarëve të komunave themeluese, pas marrjes së mendimit nga këshillat e secilës komunë."
    ],
    "answerIndex": 1
  },
  {
    "id": 216,
    "num": 215,
    "page": 31,
    "question": "Kush e jep pëlqimin për aktet e miratuara nga ndërmarrja e përbashkët publike?",
    "options": [
      "kryetarët e komunave themeluese",
      "këshillat e komunave themeluese",
      "Këshilli i komunës që ka numrin më të madh të përdoruesve të shërbimeve publike"
    ],
    "answerIndex": 1
  },
  {
    "id": 217,
    "num": 216,
    "page": 31,
    "question": "Institucioni i përbashkët publik themelohet për kryerjen e një veprimtarie të interesit publik të rëndësisë lokale në fushën e arsimit, të kulturës, të kujdesit social, të kujdesit të fëmijëve dhe të veprimtarive të tjera të përcaktuara me ligj.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 218,
    "num": 217,
    "page": 31,
    "question": "Për kryerjen e detyrave të caktuara nën kompentencë të komunave nga një komunë dhe për llogari të një ose më shumë komunave të tjera, lidhet marrëveshje ndërmjet kryetarëve të komunave, pas vendimeve të miratuara më parë nga këshillat e komunave.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 219,
    "num": 218,
    "page": 31,
    "question": "Komunat mund të bashkojnë mjete financiare, materiale dhe mjete të tjera për realizimin e projekteve të përbashkëta gjatë ushtrimit të kompetencave të tyre, për të cilat kryetarët e komunave lidhin marrëveshje pas...",
    "options": [
      "është marrë më parë mendim nga Ministria e Financave",
      "vendimeve të mëhershme të marra nga këshillat e komunave",
      "është marrë më parë pëlqimi nga Ministria e Vetëqeverisjes Lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 220,
    "num": 219,
    "page": 32,
    "question": "Nga çfarë financohet bashkëpunimi ndërkomunal?",
    "options": [
      "nga buxhetet e komunave dhe buxheti i rajonit të planifikuar",
      "nga buxhetet e komunave dhe nga vetëkontributi i qytetarëve",
      "nga buxhetet komunale, donacionet dhe sponsorizimet nga personat fizikë dhe juridikë dhe burime të tjera të të hyrave të përcaktuara me ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 221,
    "num": 220,
    "page": 32,
    "question": "Cili mban evidencë për bashkëpunimin e vendosur ndërkomunal?",
    "options": [
      "Ministria e Financave",
      "Ministria e Vetëqeverisjes Lokale",
      "Bashkësia e Njësive të Vetëqeverisjes Lokale"
    ],
    "answerIndex": 1
  },
  {
    "id": 222,
    "num": 221,
    "page": 32,
    "question": "Cili e mbikëqyr bashkëpunimin e krijuar ndërkomunal?",
    "options": [
      "Bashkësia e Njësive të Vetëqeverisjes Lokale",
      "Ministria e Vetëqeverisjes Lokale",
      "Komunat që kanë krijuar bashkëpunimin ndërkomunal"
    ],
    "answerIndex": 2
  },
  {
    "id": 223,
    "num": 222,
    "page": 32,
    "question": "Ku publikohen aktet për bashkëpunim ndërkomunal, po qe se me ligj nuk përcaktohet ndryshe?",
    "options": [
      "në Gazetën Zyrtare të Republikës së Maqedonisë së Veriut",
      "në ueb faqen e Ministrisë së Vetëqeverisjes Lokale",
      "në Fletoren zyrtar të komunave që kanë vendosur bashkëpunimin ndërkomunal"
    ],
    "answerIndex": 2
  },
  {
    "id": 224,
    "num": 223,
    "page": 32,
    "question": "Cilat janë objektivat e politikës për të inkurajuar zhvillimin e barabartë rajonal?",
    "options": [
      "zhvillimi i barabartë dhe i qëndrueshëm i të gjithë territorit të vendit, si dhe avancimi i procesit të decentralizimit",
      "zhvillimi i barabartë dhe i qëndrueshëm i të gjithë territorit të vendit, reduktimi i pabarazive ndërmjet dhe brenda rajoneve të planifikimit, si dhe rritja e konkurrencës së rajoneve të planifikimit.",
      "zhvillimi i barabartë dhe i qëndrueshëm i të gjithë territorit të vendit, si dhe nxitja e bashkëpunimit ndërkomunal"
    ],
    "answerIndex": 1
  },
  {
    "id": 225,
    "num": 224,
    "page": 32,
    "question": "Rajonet e planifikimit krijohen me qëllime të planifikimit të zhvillimit rajonal dhe zbatimin e masave dhe të instrumenteve për nxitjen e zhvillimit të barabartë rajonal. Cili i përcakton rajonet e planifikimit?",
    "options": [
      "Kuvendi i Republikës së Maqedonisë me ligj",
      "Qeveria e Republikës së Maqedonisë me akt",
      "Ministria e Vetëqeverisjes Lokale me rregullore"
    ],
    "answerIndex": 1
  },
  {
    "id": 226,
    "num": 225,
    "page": 33,
    "question": "Për qëllime të planifikimit të zhvillimit rajonal dhe të zbatimit të masave dhe të instrumenteve specifike për nxitjen e zhvillimit të barabartë rajonal, përcaktohen zonat me nevoja specifike zhvillimore. Njëkohësisht, Qeveria e Republikës së Maqedonisë miraton listën e zonave me nevoja specifike zhvillimore me propozim të Këshillit të Zhvillimit të Barabartë Rajonal të Republikës së Maqedonisë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 227,
    "num": 226,
    "page": 33,
    "question": "Planifikimi i zhvillimit rajonal bëhet me dokumente të planifikuara. Dokumentet e planifikuara të zhvillimit rajonal janë:",
    "options": [
      "Strategjia e zhvillimit rajonal të Republikës së Maqedonisë së Veriut dhe Metodologjia e përgatitjes së dokumenteve të planifikimit",
      "Strategjia e zhvillimit rajonal të Republikës së Maqedonisë së Veriut dhe Programi i zhvillimit të rajonit të planifikuar",
      "Strategjia e zhvillit rajonal të Republikës së Maqedonisë së Veriut dhe Plani hapësinor i Republikës së Maqedonisë së Veriut"
    ],
    "answerIndex": 1
  },
  {
    "id": 228,
    "num": 227,
    "page": 33,
    "question": "Programi i zhvillimit të rajonit të planifikuar miratohet për një periudhë pesëvjeçare. Njëkohësisht, ai përgatitet veçmas për secilin rajon të planifikuar, në përputhje me Strategjinë dhe dokumentet programore për integrimin e Republikës së Maqedonisë në Bashkimin Europian.",
    "options": [
      "Po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 229,
    "num": 228,
    "page": 33,
    "question": "Cili e përpilon Programin e zhvillimit të rajonit të planifikuar?",
    "options": [
      "Këshilli i Zhvillimit të Rajonit të Planifikuar",
      "Qendra e Zhvillimit të Rajonit të Planifikuar",
      "Këshilli i Zhvillimit të Barabartë Rajonal të Republikës së Maqedonisë së Veriut"
    ],
    "answerIndex": 1
  },
  {
    "id": 230,
    "num": 229,
    "page": 33,
    "question": "Bartësit e politikës së nxitjes së zhvillimit të barabartë rajonal janë:",
    "options": [
      "Qeveria e Republikës së Maqedonisë së Veriut, Ministria e Vetëqeverisjes Lokale dhe Byroja e Zhvillimit Rajonal",
      "Qeveria e Republikës së Maqedonisë së Veriut, Ministria e Vetëqeverisjes Lokale dhe Këshilli i Zhvillimit të Barabartë Rajonal",
      "Qeveria e Republikës së Maqedonisë së Veriut, Ministria e Vetëqeverisjes Lokale, Këshilli i Zhvillimit të Barabartë Rajonal dhe Këshilli i Zhvillimit të Rajonit të Planifikuar"
    ],
    "answerIndex": 2
  },
  {
    "id": 231,
    "num": 230,
    "page": 33,
    "question": "Qeveria e Republikës së Maqedonisë së Veriut themelon Këshillin e Zhvillimit të Barabartë Rajonal të Republikës së Maqedonisë së Veriut",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 232,
    "num": 231,
    "page": 34,
    "question": "Për çdo rajon të planifikuar formohet Këshill i Zhvillimit të Rajonit të Planifikuar",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 233,
    "num": 232,
    "page": 34,
    "question": "Cilët janë anëtarët e Këshillit të Zhvillimit të Rajonit të Planifikuar?",
    "options": [
      "kryetarët e njësive të vetëqeverisjes lokale që janë pjesë e rajonit të planifikuar",
      "kryetarët e komunave dhe kryetarët e këshillave të njësive të vetëqeverisjes lokale që janë pjesë e rajonit të planifikuar"
    ],
    "answerIndex": 0
  },
  {
    "id": 234,
    "num": 233,
    "page": 34,
    "question": "Për secilin rajon të planifikuar themelohet Qendër e Zhvillimit të Rajonit të Planifikuar. Cili e themelon?",
    "options": [
      "Byroja e Zhvillimit Rajonal",
      "Ministria e Vetëqeverisjes Lokale",
      "Njësitë e Vetëqeverisjes Lokale që bëjnë pjesë në rajonin e planifikuar"
    ],
    "answerIndex": 2
  },
  {
    "id": 235,
    "num": 234,
    "page": 34,
    "question": "Për të nxitur zhvillimin e barabartë rajonal, Buxheti i Republikës së Maqedonisë së Veriut çdo vjet ndan mjete në vlerë prej:",
    "options": [
      "të paktën 1% të PBB-së",
      "të paktën 2% të PBB-së",
      "të paktën 5% të PBB-së"
    ],
    "answerIndex": 0
  },
  {
    "id": 236,
    "num": 235,
    "page": 34,
    "question": "Mjetet për nxitjen e zhvillimit të barabartë rajonal i shpërndan Qeveria e Republikës së Maqedonisë së Veriut, sipas kësaj ndarjeje: 70% për financimin e projekteve për zhvillimin e rajoneve të planifikimit, 20% për financimin e projekteve për zhvillimin e zonave me nevoja zhvillimore specifike, dhe 10% për financimin e projekteve të zhvillimit të fshatrave",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 237,
    "num": 236,
    "page": 34,
    "question": "Mjetet e financimit të projekteve për zhvillimin e rajoneve të planifikimit shpërndahen sipas rajoneve të planifikimit në përputhje me:",
    "options": [
      "cilësinë e projekteve të ofruara",
      "nevojat dhe prioritetet vjetore të rajonit të planifikimit",
      "klasifikimin e rajoneve të planifikimit sipas shkallës së zhvillimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 238,
    "num": 237,
    "page": 34,
    "question": "Cili shpall thirrje publike për mbledhjen e projektpropozimeve për ndarjen e mjeteve për financimin e projekteve për zhvillimin e zonave me nevoja specifike zhvillimore?",
    "options": [
      "Byroja e Zhvillimit Rajonal",
      "Ministria e Vetëqeverisjes Lokale",
      "Këshilli i Zhvillimit të Barabartë Rajonal"
    ],
    "answerIndex": 0
  },
  {
    "id": 239,
    "num": 238,
    "page": 35,
    "question": "Cili vendos për ndarjen e mjeteve për financimin e projekteve për zhvillimin e rajoneve të planifikimit, të zonave me nevoja specifike zhvillimore dhe të fshatrave?",
    "options": [
      "Byroja e Zhvillimit Rajonal",
      "Ministria e Vetëqeverisjes Lokale",
      "Qeveria e Republikës së Maqedonisë së Veriut"
    ],
    "answerIndex": 2
  },
  {
    "id": 240,
    "num": 239,
    "page": 35,
    "question": "Cili e mbikëqyr zbatimin e dispozitave të Ligjit të Zhvillit të Barabartë Rajonal?",
    "options": [
      "Inspektorati Administrativ Shtetëror",
      "Byroja e Zhvillimit Rajonal",
      "Ministria e Vetëqeverisjes Lokale"
    ],
    "answerIndex": 2
  },
  {
    "id": 241,
    "num": 240,
    "page": 35,
    "question": "Cili bën kontroll financiar mbi punën materiale dhe financiare të Byrosë dhe të qendrave të zhvillimit të rajoneve të planifikimit?",
    "options": [
      "Ministria e Vetëqeverisjes Lokale",
      "Ministria e Financave dhe Enti Shtetëror i Revizionit",
      "Byroja e Zhvillimit Rajonal dhe Inspektorati Administrativ Shtetëror ADMINISTRATIVE DHE KONTESTEVE ADMINISTRATIVE"
    ],
    "answerIndex": 1
  },
  {
    "id": 242,
    "num": 241,
    "page": 35,
    "question": "Në kontestin administrativ:",
    "options": [
      "nuk mund të kërkohet kthimi i sendeve të konfiskuara",
      "mund të kërkohet kthimi i sendeve të konfiskuara",
      "mund të kërkohet kthim vetëm i shfrytëzimit pronësor të konfiskuar"
    ],
    "answerIndex": 1
  },
  {
    "id": 243,
    "num": 242,
    "page": 35,
    "question": "Në kontestet administrative vendoset mbi ligjshmërinë e akteve të organeve të administratës shtetërore të miratuara:",
    "options": [
      "në procedurë gjyqësore",
      "në procedurë penale",
      "në procedurë kundërvajtëse"
    ],
    "answerIndex": 0
  },
  {
    "id": 244,
    "num": 243,
    "page": 35,
    "question": "Në kontestet administrative, gjykata vendos për:",
    "options": [
      "kushtetutshmërinë dhe ligjshmërinë e akteve, si dhe për kompensimin e dëmit",
      "ligjshmërinë e akteve dhe të punës administrative",
      "kushtetutshmërinë dhe ligjshmërinë e akteve, si dhe për punën administrative"
    ],
    "answerIndex": 1
  },
  {
    "id": 245,
    "num": 244,
    "page": 36,
    "question": "Nëse Ligji i Kontesteve Administrative nuk përmban dispozita përkatëse për procedurën, do të zbatohen dispozitat e:",
    "options": [
      "Ligjit të Procedurës së Përgjithshme Administrative",
      "Ligjit të Procedurës Kontestimore",
      "Ligjit të Ndërmjetësimit"
    ],
    "answerIndex": 0
  },
  {
    "id": 246,
    "num": 245,
    "page": 36,
    "question": "Seanca në gjykatën e shkallës së dytë fillon",
    "options": [
      "me arsytimin e ankimimit",
      "me raportin e gjykatësit raportues",
      "me leximin e aktgjykimit të shkallës së parë"
    ],
    "answerIndex": 1
  },
  {
    "id": 247,
    "num": 246,
    "page": 36,
    "question": "Me kërkesën e paditësit, kur zbatimi i aktit do t'i shkaktonte atij dëm që do të ishte i vështirë për t'u riparuar, dhe vonesa e zbatimit nuk është në kundërshtim me interesin publik, dhe as vonesa nuk do t'i shkaktonte një dëm më të madh të pariparueshëm palës kundërshtare, gjykata mund ta shtyjë zbatimin.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 248,
    "num": 247,
    "page": 36,
    "question": "Pas anulimit të aktit administrativ nga Gjykata Administrative, organi kompetent është i detyruar të miratojë një akt të ri administrativ:",
    "options": [
      "brenda 15 ditëve",
      "brenda 30 ditëve",
      "brenda 60 ditëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 249,
    "num": 248,
    "page": 36,
    "question": "Pas propozimit për përsëritjen e procedurës vendos:",
    "options": [
      "gjykata më e lartë",
      "Gjykata e Lartë e Republikës së Maqedonisë",
      "gjykata që ka marrë vendimin me të cilin lidhet arsyeja e përsëritjes"
    ],
    "answerIndex": 2
  },
  {
    "id": 250,
    "num": 249,
    "page": 36,
    "question": "Pas propozimit për përsëritjen e procedurës, gjykata vendos me",
    "options": [
      "Vendim",
      "Aktgjykim",
      "Përfundim"
    ],
    "answerIndex": 1
  },
  {
    "id": 251,
    "num": 250,
    "page": 36,
    "question": "Përsëritja të procedurës nuk mund të kërkohet pas kalimit të:",
    "options": [
      "1 vjet nga dita që palës i është kumtuar akti administrativ",
      "3 vjetëve nga dita që palës i është kumtuar akti administrativ",
      "5 vjet nga dita që palës i është kumtuar akti administrativ"
    ],
    "answerIndex": 2
  },
  {
    "id": 252,
    "num": 251,
    "page": 37,
    "question": "Kundër vendimit të Gjykatës Administrative mund të bëhet ankimim brenda:",
    "options": [
      "8 ditëve",
      "15 ditëve",
      "30 ditëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 253,
    "num": 252,
    "page": 37,
    "question": "Kundër vendimit të Gjykatës Administrative:",
    "options": [
      "lejohet ankimimi",
      "lejohet padi",
      "nuk lejohet ankimimi"
    ],
    "answerIndex": 0
  },
  {
    "id": 254,
    "num": 253,
    "page": 37,
    "question": "Kundër vendimeve të shkallës së parë në kontestin administrativ, mjetet juridike deklarohen brenda:",
    "options": [
      "shtatë ditëve",
      "15 ditëve",
      "30 ditëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 255,
    "num": 254,
    "page": 37,
    "question": "Padia për fillimin e kontestit administrativ dorëzohet brenda:",
    "options": [
      "15 ditëve nga dorëzimi  i aktit administrativ te pala",
      "30 ditëve nga dorëzimi  i aktit administrativ te pala",
      "60 ditëve nga dorëzimi  i aktit administrativ te pala"
    ],
    "answerIndex": 1
  },
  {
    "id": 256,
    "num": 255,
    "page": 37,
    "question": "Pala e paditur në kontestin administrativ është:",
    "options": [
      "komisioni kundërvajtës",
      "autori i kundërvajtjes",
      "organi publik akti ose veprimi i të cilit kontestohet"
    ],
    "answerIndex": 2
  },
  {
    "id": 257,
    "num": 256,
    "page": 37,
    "question": "Paditës në një kontest administrativ mund të jetë edhe shoqatë e qytetarëve, nëse me aktin administrativ është cenuar një e drejtë, ose një interes i drejtpërdrejtë i bazuar në ligj, e:",
    "options": [
      "bashkësisë lokale",
      "anëtarit të saj",
      "organizatës sindikale"
    ],
    "answerIndex": 1
  },
  {
    "id": 258,
    "num": 257,
    "page": 37,
    "question": "Paditës në një mosmarrëveshje administrative mund të jetë edhe organizata sindikale nëse me akt administrativ është cenuar një e drejtë ose një interes i menjëhershëm i bazuar në ligj, e :",
    "options": [
      "bashkësisë lokale",
      "anëtarit të saj",
      "shoqatës së qytetarëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 259,
    "num": 258,
    "page": 38,
    "question": "Kontesti administrativ mund të zhvillohet kundër:",
    "options": [
      "aktgjykimit",
      "urdhërit të gjykatës",
      "aktit administrativ përfundimtar"
    ],
    "answerIndex": 2
  },
  {
    "id": 260,
    "num": 259,
    "page": 38,
    "question": "Kontest administrativ nuk mund të ngrihet në punët në të cilat mbrojtja gjyqësore sigurohet jashtë kontestit administrativ",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 261,
    "num": 260,
    "page": 38,
    "question": "Kontesti administrativ fillon me:",
    "options": [
      "ankimim",
      "Padi",
      "padi ose ankimim"
    ],
    "answerIndex": 1
  },
  {
    "id": 262,
    "num": 261,
    "page": 38,
    "question": "Akti administrativ mund të hidhet poshtë:",
    "options": [
      "nëse akti është miratuar nga një organ jo kompetent",
      "për shkak të zbatimit të gabuar të së drejtës materiale",
      "për shkak të gjendjes faktike të vërtetuar gabimisht nga komisioni për kundërvajtje"
    ],
    "answerIndex": 1
  },
  {
    "id": 263,
    "num": 262,
    "page": 38,
    "question": "Akti administrativ mund të hidhet poshtë:",
    "options": [
      "për shkak të gjendjes faktike të vërtetuar gabimisht nga një gjykatë e shkallës së dytë",
      "kur në procedurën që i ka paraprirë aktit nuk është vepruar sipas rregullave të procedurës",
      "për punët për të cilat vendos drejtpërdrejt Kuvendi dhe Presidenti i Republikës së Maqedonisë, në bazë të kompetencave kushtetuese, përpos vendimeve për emërim dhe shkarkim."
    ],
    "answerIndex": 1
  },
  {
    "id": 264,
    "num": 263,
    "page": 38,
    "question": "Kontestet administrative në Republikën e Maqedonisë i zgjidh:",
    "options": [
      "Gjykata e Apelit",
      "Gjykata Administrative",
      "Komisioni për Kundërvajtje"
    ],
    "answerIndex": 1
  },
  {
    "id": 265,
    "num": 264,
    "page": 38,
    "question": "Gjykata e Lartë vendos për konfliktin e kompetencave ndërmjet Gjykatës Administrative dhe një gjykate tjetër, si dhe ndërmjet Gjykatës së Lartë Administrative dhe një gjykate tjetër.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 266,
    "num": 265,
    "page": 39,
    "question": "Për lëndët që kanë të bëjnë me miratimin e masës së përkohshme në kontestet administrative vendos gjykata në afat prej",
    "options": [
      "tre ditëve",
      "7 ditëve",
      "15 ditëve"
    ],
    "answerIndex": 2
  },
  {
    "id": 267,
    "num": 266,
    "page": 39,
    "question": "Punët administrative paraqesin...",
    "options": [
      "aktet dhe veprimet me të cilat shprehen ose zbatohen kompetencat e autoriteteve publike",
      "aktivitetet e Gjykatës Administrative",
      "të gjitha aktet dhe veprimet me të cilat shprehen ose zbatohen kompetencat e autoriteteve publike dhe që zgjidhin ose cenojnë të drejtat, detyrimet ose interesat juridike të personave fizikë, juridikë ose palëve të tjera në procedurë, si dhe çdo çështje tjetër që përcaktohet nga një ligj i veçantë"
    ],
    "answerIndex": 2
  },
  {
    "id": 268,
    "num": 267,
    "page": 39,
    "question": "Me ligje të veçanta, punë të veçanta mund të rregullohen ndryshe nga ky ligj, po qe se...",
    "options": [
      "nuk bien ndesh me parimet dhe qëllimin bazë të këtij ligji",
      "nuk pakësojnë mbrojtjen e të drejtave dhe interesave ligjore të palëve të garantuara me këtë ligj",
      "nuk janë në kundërshtim me parimet dhe qëllimin bazë të këtij ligji, si dhe nuk pakësojnë mbrojtjen e të drejtave dhe të interesave ligjore të palëve të garantuara me këtë ligj."
    ],
    "answerIndex": 2
  },
  {
    "id": 269,
    "num": 268,
    "page": 39,
    "question": "“Organe publike” nënkuptojnë ...",
    "options": [
      "ministritë, organet e administratës shtetërore, si dhe organet e komunës, të qytetit të Shkupit dhe të komunave në qytetin e Shkupit;",
      "ministritë, organet e tjera shtetërore, personat juridikë dhe fizikë të cilëve me ligj u është besuar ushtrimi i kompetencave publike, si dhe organet e komunës, të qytetit të Shkupit dhe të komunave në qytetin e Shkupit.",
      "ministritë, organet e administratës shtetërore, organizatat e themeluara me ligj, organet e tjera shtetërore, personat juridikë dhe fizikë të cilëve me ligj u është besuar ushtrimi i kompetencave publike, si dhe organet e komunës, të qytetit të Shkupit dhe të komunave në qytetin e Shkupit."
    ],
    "answerIndex": 2
  },
  {
    "id": 270,
    "num": 269,
    "page": 39,
    "question": "“Organi kolegjial” paraqet...",
    "options": [
      "një organ që përbëhet nga të paktën dy anëtarë",
      "organin i cili përbëhet nga tre ose më shumë anëtarë dhe i cili, në bazë të ligjit, është i autorizuar të veprojë, të vendosë dhe të ndërmarrë veprime të tjera administrative në punët administrative."
    ],
    "answerIndex": 1
  },
  {
    "id": 271,
    "num": 270,
    "page": 39,
    "question": "“Akt administrativ” nënkupton...",
    "options": [
      "akt individual të një organi publik dhe të një gjykate administrative",
      "çdo akt i vetëm",
      "akt individual të një organi publik që miratohet në bazë të një ligji që vendos për të drejtat, detyrimet dhe interesat ligjore të palëve"
    ],
    "answerIndex": 2
  },
  {
    "id": 272,
    "num": 271,
    "page": 40,
    "question": "“Palë” nënkupton...",
    "options": [
      "personi fizik ose juridik, me kërkesën e të cilit ka filluar procedura administrative,",
      "çdo person fizik",
      "çdo person fizik ose juridik, me kërkesën e të cilit është ngritur procedurë administrative, ndaj të cilit është ngritur procedurë administrative, e cila është e përfshirë në një procedurë të ngritur me detyrë zyrtare, ose që me qëllim të mbrojtjes së të drejtave ose të interesave të saj juridike, ka të drejtë të marrë pjesë në procedurën administrative. Palë mund të jetë edhe një autoritet publik, një filial ose njësi tjetër biznesi i një shoqërie tregtare, vendbanimi etj., ose një grup njerëzish, edhe pse nuk kanë statusin e personit juridik;"
    ],
    "answerIndex": 2
  },
  {
    "id": 273,
    "num": 272,
    "page": 40,
    "question": "\"Marrëveshje Administrative\" nënkupton..",
    "options": [
      "marrëveshje ndërmjet organit publik dhe një personi tjetër juridik",
      "çdo marrëveshje e lidhur nga organi publik",
      "një marrëveshje që organi publik e lidh me palën për ushtrimin e kompetencave publike nën kompetencën e organit publik, me ç'rast kjo përcaktohet me ligj të veçantë."
    ],
    "answerIndex": 2
  },
  {
    "id": 274,
    "num": 273,
    "page": 40,
    "question": "“Akt real” nënkupton...",
    "options": [
      "informacionet publike, marrja e deklaratave dhe mbajtja e shënimeve",
      "çdo akt ose veprim i organit publik, që nuk është akt administrativ ose marrëveshje administrative",
      "një akt ose veprim të një organi publik që nuk është një akt administrativ ose një marrëveshje administrative, e cila mund të ketë efekt juridik mbi të drejtat, detyrimet ose interesat ligjore të një individi, si informacioni publik, marrja e deklaratave, mbajtja e shënimeve, lëshimi i certifikatave, veprimet përmbarimore dhe veprime të tjera faktike"
    ],
    "answerIndex": 2
  },
  {
    "id": 275,
    "num": 274,
    "page": 40,
    "question": "Organet publike veprojnë në përputhje me...",
    "options": [
      "ligjet dhe marrëveshjet ndërkombëtare të ratifikuara në përputhje me Kushtetutën e Republikës së Maqedonisë",
      "ligjet",
      "Kushtetutën e Republikës së Maqedonisë, ligjet dhe marrëveshjet ndërkombëtare të ratifikuara në përputhje me Kushtetutën e Republikës së Maqedonisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 276,
    "num": 275,
    "page": 40,
    "question": "Në procedurën administrative prokura...",
    "options": [
      "nuk mund të jepet",
      "mund t'i jepet edhe një qatipi",
      "mund të jepet me shkrim ose me gojë, në procesverbal"
    ],
    "answerIndex": 2
  },
  {
    "id": 277,
    "num": 276,
    "page": 40,
    "question": "Parashtresat mund të dorëzohen….",
    "options": [
      "menjëherë ose të dërgohen me postë, të komunikohen gojarisht në procesverbal",
      "me postë",
      "menjëherë ose të dërgohet me postë, të komunikohet gojarisht në procesverbal dhe të dorëzohet në formë elektronike në pajtim me ligjin."
    ],
    "answerIndex": 2
  },
  {
    "id": 278,
    "num": 277,
    "page": 41,
    "question": "Si vërtetohet dorëzimi i shkresës në procedurë administrative?",
    "options": [
      "me një fletëdorëzim të nënshkruar nga çdo anëtar i rritur i familjes së marrësit",
      "me një fletëdorëzim të nënshkruar nga marrësi",
      "Sipas detyrës zyrtare, organi publik lëshon vërtetimin, d.m.th. dëshminë e pranimit, me ç'rast përfshihen data dhe ora e dorëzimit, lënda e kërkesës, lista e dokumenteve të dorëzuara, dhe afatet e lëshimit të aktit administrativ."
    ],
    "answerIndex": 2
  },
  {
    "id": 279,
    "num": 278,
    "page": 41,
    "question": "Dorëzimi në procedurën administrative kryhet me anë të:",
    "options": [
      "dërgesë postare pa rekomandim",
      "dërgesë urgjente",
      "letrës së rekomanduar, me dorëzim personal, tërthorazi ose publik, si dhe në mënyrë elektronike ose me publikim zyrtar."
    ],
    "answerIndex": 2
  },
  {
    "id": 280,
    "num": 279,
    "page": 41,
    "question": "Kur bëhet fjalë për dorëzimin e një dokumenti në procedurë administrative, nga pala të cilës nuk i dihet vendbanimi, përkatësisht vendqëndrimi, ose kur bëhet fjalë për akte që u referohen disa palëve, organi publik dërgesën...",
    "options": [
      "nuk e kryen atë",
      "e bën me shpallje publike",
      "e kryen nëpërmjet Ministrisë së Punëve të Brendshme"
    ],
    "answerIndex": 1
  },
  {
    "id": 281,
    "num": 280,
    "page": 41,
    "question": "Nëse dita e fundit e afatit për një veprim të caktuar në procedurë administrative është ditë jopune, ditë pushimi apo ditë jopune që festohet, afati përfundon...",
    "options": [
      "në ditën e parë pasardhëse",
      "në të njëjtën ditë",
      "në ditën e parë pasardhëse të punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 282,
    "num": 281,
    "page": 41,
    "question": "Afatet në procedurë administrative konsiderohen të jenë...",
    "options": [
      "ditë dhe javë",
      "ditë dhe muaj",
      "ditët, muajt dhe vitet. Mund të jenë gjithashtu edhe orët"
    ],
    "answerIndex": 2
  },
  {
    "id": 283,
    "num": 282,
    "page": 41,
    "question": "Afati absolut për kthimin e gjendjes së mëparshme në procedurë administrative është...",
    "options": [
      "një vjet",
      "tre muaj",
      "gjashtë muaj"
    ],
    "answerIndex": 1
  },
  {
    "id": 284,
    "num": 283,
    "page": 41,
    "question": "Kujt i dorëzohet propozimi për kthim në gjendjen e mëparshme në procedurë administrative?",
    "options": [
      "Gjykatës Administrative",
      "pranë Inspektoratit Administrativ Shtetëror",
      "organit publik ku duhet të ishte kryer veprimi i humbur"
    ],
    "answerIndex": 2
  },
  {
    "id": 285,
    "num": 284,
    "page": 42,
    "question": "Cili inicon procedurë administrative?",
    "options": [
      "Inspektorati Administrativ Shtetëror me kërkesë të palës",
      "Gjykata Administrative sipas detyrës zyrtare",
      "organi publik kompetent sipas detyrës zyrtare, ose me kërkesë të palës"
    ],
    "answerIndex": 2
  },
  {
    "id": 286,
    "num": 285,
    "page": 42,
    "question": "Kërkesa për fillimin e procedurës administrative dorëzohet me...",
    "options": [
      "në formë elektronike",
      "një parashtresë që e përgatit vetë pala",
      "një formular që organi publik është i detyruar të përgatisë dhe në të cilin specifikohen dëshmitë dhe të dhënat që pala është e detyruar t'ia bashkëngjisë kërkesës dhe dëshmive, si dhe të dhënat që organi publik përgjegjës për zgjidhjen e çështjes i siguron sipas detyrës zyrtare."
    ],
    "answerIndex": 2
  },
  {
    "id": 287,
    "num": 286,
    "page": 42,
    "question": "Pajtim gjyqësor në procedurë administrative...",
    "options": [
      "e bën Gjykata Administrative",
      "do të shënohet në procesverbal",
      "bëhet me miratimin e një akti administrativ"
    ],
    "answerIndex": 1
  },
  {
    "id": 288,
    "num": 287,
    "page": 42,
    "question": "Zgjidhja e një procedure administrative duhet të jetë gjithmonë e qartë dhe e përcaktuar, si dhe nuk guxon të jetë e dëmshme për interesin publik ose interesin ligjor të palëve të treta.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 289,
    "num": 288,
    "page": 42,
    "question": "Pala mund të japë deklaratë gojarisht në procesverbal, ose me shkrim në çdo fazë të procedurës",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 290,
    "num": 289,
    "page": 42,
    "question": "Nëse gjatë procedurës organi publik që udhëheq procedurën administrative has në një çështje të mëparshme, ai do ta ndërpresë procedurën derisa të zgjidhet çështja e mëparshme dhe për këtë e njofton palën.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 291,
    "num": 290,
    "page": 42,
    "question": "Kur procedura për çështjen e mëparshme duhet të nisë me kërkesë të palës, njoftimi për ndërprerjen e procedurës përmban edhe udhëzime për këtë kërkesë...",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 292,
    "num": 291,
    "page": 42,
    "question": "Dokumentet e lëshuara nga një organ publik të një vendi të huaj, të cilat janë të vlefshme si dokumente publike në vendin ku janë lëshuar...",
    "options": [
      "janë të vlefshme si dokumente publike edhe në vendin tonë",
      "ato janë të vlefshme si dokumente publike në vendin tonë, nëse janë të vërtetuara siç duhet",
      "janë të vlefshme si dokumente publike edhe në vendin tonë, vetëm në përputhje me kushtet e reciprocitetit dhe nëse janë të vërtetuara siç duhet"
    ],
    "answerIndex": 2
  },
  {
    "id": 293,
    "num": 292,
    "page": 43,
    "question": "Çdo dokument publik i lëshuar në formën e përcaktuar nga një organ publik brenda kompetencës së tij...",
    "options": [
      "dëshmon atë që vërtetohet ose përcaktohet në të",
      "nuk e dëshmon atë çfarë vërtetohet apo përcaktohet në të"
    ],
    "answerIndex": 0
  },
  {
    "id": 294,
    "num": 293,
    "page": 43,
    "question": "Në shqyrtimin e procedurës administrative, palët...",
    "options": [
      "nuk thirren",
      "kanë të drejtë të marrin pjesë",
      "nuk kanë të drejtë të marrin pjesë"
    ],
    "answerIndex": 1
  },
  {
    "id": 295,
    "num": 294,
    "page": 43,
    "question": "Dëshmitë dhe të dhënat, për faktet për të cilat organi publik mban shënime zyrtare, e që përgjegjësinë e zgjidhjes ose shënimet zyrtare i mban një organ tjetër publik, pra një subjekt tjetër që mban regjistër të të dhënave, i siguron:",
    "options": [
      "kompetent është i kualifikuari",
      "zyrtari që drejton procedurën",
      "Pala me kërkesën e së cilës është nisur procedura"
    ],
    "answerIndex": 1
  },
  {
    "id": 296,
    "num": 295,
    "page": 43,
    "question": "Në procedurën administrative, pala mund ta dorëzojë dokumentin në origjinal ose në kopje të vërtetuar.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 297,
    "num": 296,
    "page": 43,
    "question": "Hyrja e aktit administrativ përmban:",
    "options": [
      "emri i organit që e miraton aktin administrativ, dhe rregulloren e organit të atij autoriteti",
      "emrin e organit publik që e miraton aktin, rregulloren mbi kompetencën e atij organi, emrin e palës dhe të përfaqësuesit ligjor ose të të autorizuari, nëse ka, dhe një përshkrim të shkurtër të lëndës së  procedurës.",
      "emri i organit që e miraton aktin administrativ, rregulli i kompetencës së organit,  data dhe vendi i miratimit të aktit administrativ."
    ],
    "answerIndex": 1
  },
  {
    "id": 298,
    "num": 297,
    "page": 43,
    "question": "Kur parashikohet se ankesa në procedurën administrative nuk e vonon zbatimin e aktit administrativ, duhet theksuar në...",
    "options": [
      "këshillën juridike",
      "dispozitiv",
      "udhëzimin për mjetin juridik"
    ],
    "answerIndex": 1
  },
  {
    "id": 299,
    "num": 298,
    "page": 43,
    "question": "Me këshillë juridike në aktin administrativ, pala...",
    "options": [
      "njoftohet se nuk ka të drejtë ankese",
      "njoftohet që mund të dorëzojë ankesë apo procedurë tjetër para gjykatës",
      "informohet për këshillën e rregullt juridike, që mund të përdoret kundër aktit administrativ."
    ],
    "answerIndex": 2
  },
  {
    "id": 300,
    "num": 299,
    "page": 44,
    "question": "Kur ka mundësi ankimimi ndaj aktit administrativ të miratuar në procedurë administrative, në këshillën juridike theksohet se:",
    "options": [
      "në sa kopje dorëzohet ankimimi dhe shuma e tarifës administrative",
      "brenda cilit afat dorëzohet",
      "kujt duhet t'i dorëzohet mjeti juridik, në çfarë forme dhe cili është afati i paraqitjes."
    ],
    "answerIndex": 2
  },
  {
    "id": 301,
    "num": 300,
    "page": 44,
    "question": "Elemente shtesë të aktit administrativ janë:",
    "options": [
      "afati",
      "afati dhe urdhëresa",
      "afati kohor, kushti dhe urdhëresa"
    ],
    "answerIndex": 2
  },
  {
    "id": 302,
    "num": 301,
    "page": 44,
    "question": "Kundër aktit administrativ të miratuar në shkallë të parë në procedurë administrative, nëse nuk është paraparë e drejta e ankimimit, pala ka të drejtë të...",
    "options": [
      "ankimimit",
      "padisë",
      "prapësimit"
    ],
    "answerIndex": 1
  },
  {
    "id": 303,
    "num": 302,
    "page": 44,
    "question": "Akti administrativ mund të përmbajë një ose më shumë prek këtyre elementët shtesë…",
    "options": [
      "afati kohor, kusht dhe urdhëresë",
      "afat kohor dhe urdhëresë",
      "afat kohor, kusht ose urdhëresë"
    ],
    "answerIndex": 2
  },
  {
    "id": 304,
    "num": 303,
    "page": 44,
    "question": "Me kërkesë të palës, organi publik që ka miratuar aktin administrativ në formë verbale...",
    "options": [
      "është i detyruar ta konfirmojë të njëjtin me shkrim jo më vonë se brenda pesëmbëdhjetë ditëve nga dorëzimi i kërkesës",
      "është i detyruar ta konfirmojë të njëjtin me shkrim jo më vonë se brenda tetë ditëve, nga dorëzimi i kërkesës",
      "nuk është i detyruar ta konfirmojë të njëjtin me shkrim jo më vonë se brenda tetë ditëve nga dorëzimi i kërkesës"
    ],
    "answerIndex": 1
  },
  {
    "id": 305,
    "num": 304,
    "page": 44,
    "question": "Pala mund të bëjë ankimim ndaj aktit administrativ:",
    "options": [
      "brenda 15 ditëve nga dorëzimi, përkatësisht njoftimi për aktin administrativ, përveç nëse me ligjin material është përcaktuar një afat më i shkurtër",
      "brenda 15 ditëve nga dorëzimi, përkatësisht njoftimi për aktin administrativ, me përjashtim të rasteve kur me ligj të veçantë është përcaktuar një afat më i gjatë",
      "brenda 15 ditëve nga dorëzimi, përkatësisht njoftimi për aktin administrativ, përveç nëse me ligjin material nuk është caktuar një afat tjetër."
    ],
    "answerIndex": 1
  },
  {
    "id": 306,
    "num": 305,
    "page": 45,
    "question": "Çfarë duhet të përmbajë ankimimi ndaj aktit administrativ?",
    "options": [
      "shtojcat ndaj ankimimit bëhen në të paktën tre kopje",
      "propozim specifik për veprimin e organit që vendos për ankimimin",
      "akti administrativ që kontestohet ose për të cilin pala ka paraqitur kërkesë, por nuk ka marrë përgjigje nga organi publik, e thekson organin përgjegjës për miratimin ose mangësinë e aktit, si dhe arsyet pse pala nuk është e kënaqur me vendimin administrativ ose mangësitë e tij"
    ],
    "answerIndex": 2
  },
  {
    "id": 307,
    "num": 306,
    "page": 45,
    "question": "Nëse ankimimi në procedurë administrative i dorëzohet apo dërgohet drejtpërdrejt organit të shkallës së dytë, ai...",
    "options": [
      "ia dërgon organit të shkallës së parë brenda tri ditëve",
      "ia dërgon organit të shkallës së parë brenda tetë ditëve",
      "ia dërgon organit të shkallës së parë më së voni të nesërmen"
    ],
    "answerIndex": 2
  },
  {
    "id": 308,
    "num": 307,
    "page": 45,
    "question": "Në procedurën administrative, cili e shqyrton nëse ankesa është e pranueshme, në kohë dhe e parashtruar nga i autorizuari?",
    "options": [
      "organi i shkallës së dytë",
      "organi i shkallës së parë",
      "arkivi i Gjykatës Administrative"
    ],
    "answerIndex": 1
  },
  {
    "id": 309,
    "num": 308,
    "page": 45,
    "question": "Ankesa e papranueshme, e parakohshme ose e bërë nga një i paautorizuar do të hidhet poshtë nga organi i shkallës së parë me...",
    "options": [
      "vendim",
      "përfundim",
      "akt administrativ"
    ],
    "answerIndex": 2
  },
  {
    "id": 310,
    "num": 309,
    "page": 45,
    "question": "Organi i shkallës së dytë, gjatë vendimmarrjes për ankesën në procedurë administrative, mund të...",
    "options": [
      "të refuzojë ankimimin ose të anulojë aktin administrativ",
      "të shfuqizojë në tërësi aktin administrativ",
      "të refuzojë ankimimin ose ta pranojë ankimimin, dhe ta anulojë aktin administrativ të shkallës së parë tërësisht ose pjesërisht, ose të ndryshojë aktin administrativ."
    ],
    "answerIndex": 2
  },
  {
    "id": 311,
    "num": 310,
    "page": 45,
    "question": "Nëse në procedurën e ankimimit në procedurë administrative, organi i shkallës së dytë konstaton se akti administrativ i shkallës së parë është miratuar nga organi jo kompetent.",
    "options": [
      "do ta shfuqizojë atë akt administrativ",
      "do të vendosë sipas meritës për ankimimin",
      "do ta anulojë atë akt administrativ sipas detyrës zyrtare dhe do t'ia paraqesë çështjen organit kompetent për zgjidhje"
    ],
    "answerIndex": 2
  },
  {
    "id": 312,
    "num": 311,
    "page": 46,
    "question": "Nëse pala heq dorë nga ankimimi i paraqitur, procedura administrative në shkallë të dytë ndërpritet me...",
    "options": [
      "procesverbal",
      "akt administrativ",
      "njoftim"
    ],
    "answerIndex": 1
  },
  {
    "id": 313,
    "num": 312,
    "page": 46,
    "question": "Cili ia dorëzon palës aktin administrativ të miratuar në shkallë të dytë në procedurë administrative?",
    "options": [
      "organi i shkallës së parë",
      "organi i shkallës së dytë"
    ],
    "answerIndex": 0
  },
  {
    "id": 314,
    "num": 313,
    "page": 46,
    "question": "Nëse organi publik konstaton se kërkesa për përsëritjen e procedurës qëndron, ai do ta ndryshojë ose anulojë aktin administrativ të refuzuar, me një akt të ri administrativ. Në të kundërt organi publik do ta refuzojë kërkesën me akt administrativ.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 315,
    "num": 314,
    "page": 46,
    "question": "Kundër aktit administrativ të miratuar në procedurë administrative në shkallë të dytë nuk është bërë  ankesë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 316,
    "num": 315,
    "page": 46,
    "question": "Kur organi i shkallës së dytë konstaton se organi i shkallës së parë nuk e ka miratuar aktin administrativ brenda afatit ligjor,...",
    "options": [
      "ta ndalojë procedurën",
      "ta zgjidhë lëndën",
      "ai duhet të udhëzojë organin e shkallës së parë të miratojë një akt administrativ dhe për këtë të caktojë një afat prej më së shumti 30 ditësh pas marrjes së urdhresës"
    ],
    "answerIndex": 2
  },
  {
    "id": 317,
    "num": 316,
    "page": 46,
    "question": "Akti administrativ kundër të cilit mund të fillohet kontest administrativ...",
    "options": [
      "është përfundimtar në procedurë administrative",
      "nuk është përfundimtar në procedurë administrative",
      "bëhet përfundimtar brenda 15 ditëve nga pranimi i tij"
    ],
    "answerIndex": 0
  },
  {
    "id": 318,
    "num": 317,
    "page": 46,
    "question": "Akti administrativ bëhet i formës së prerë nëse pala...",
    "options": [
      "dorëzon padi në Gjykatën e Lartë të RM-së, dhe nis një kontest administrativ",
      "paraqet ankimim tek organi kompetent i shkallës së dytë",
      "heq dorë nga e drejta e ankimimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 319,
    "num": 318,
    "page": 47,
    "question": "Kur bëhet fjalë për ndërmarrjen e masave jashtëzakonisht urgjente, për të garantuar paqen dhe sigurinë publike, ose për të larguar një rrezik të menjëhershëm për jetën dhe shëndetin e njerëzve ose të pronës, organi publik kompetent mund të miratojë akt administrativ verbal.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 320,
    "num": 319,
    "page": 47,
    "question": "Akti administrativ përmban këto pjesë:",
    "options": [
      "dispozitivi i hyrjes, shpjegimi, emri i organit, numri dhe data, nënshkrimi i zyrtarit dhe vula e organit",
      "hyrje, dispozitiv dhe mjet juridik, emri i organit, numri dhe data, nënshkrimi i zyrtarit dhe vula e autoritetit",
      "hyrje, dispozitiv, shpjegim, këshillë juridike, nënshkrim të nëpunësit të autorizuar dhe vulë"
    ],
    "answerIndex": 2
  },
  {
    "id": 321,
    "num": 320,
    "page": 47,
    "question": "Organi publik që ka miratuar aktin administrativ...",
    "options": [
      "mund të korrigjojë në çdo kohë gabimet në emra ose numra, në shkrim ose numërim, si dhe pasaktësi të tjera të dukshme në aktin administrativ ose në kopjen e vërtetuara të tij",
      "mund të korrigjojë me akt të ri administrativ, brenda gjashtë muajve, gabimet në emra ose numra, në shkrim ose numërim, si dhe pasaktësi të tjera të dukshme në aktin administrativ ose në kopjen e vërtetuara të tij",
      "nuk mund t'i korrigjojë gabimet në aktin administrativ"
    ],
    "answerIndex": 0
  },
  {
    "id": 322,
    "num": 321,
    "page": 47,
    "question": "Për një seancë verbale ose për një veprim tjetër më të rëndësishëm në procedurën administrative, si dhe për deklarime verbale më të rëndësishme të palëve ose të palëve të treta në procedurë.",
    "options": [
      "përgatitet një akt administrativ",
      "hartohet një procesverbal",
      "hartohet shënim zyrtar"
    ],
    "answerIndex": 1
  },
  {
    "id": 323,
    "num": 322,
    "page": 47,
    "question": "Procedura e ankimimit të organit të shkallës së dytë duhet të përfundojë pa vonesë...",
    "options": [
      "brenda një muaji, duke llogaritur ditën e dorëzimit të ankimimit, nëse me rregullore të veçantë nuk është përcaktuar afat më i shkurtër",
      "brenda 15 ditëve duke llogaritur ditën e dorëzimit të ankimimit, nëse me rregullore të veçantë nuk është përcaktuar afat më i shkurtër",
      "brenda 60 ditësh nga dorëzimi i ankimimit, dhe të gjitha shkresat e lëndës nga organi i shkallës së parë tek organi i shkallës së dytë."
    ],
    "answerIndex": 2
  },
  {
    "id": 324,
    "num": 323,
    "page": 47,
    "question": "Me anulimin e aktit administrativ të miratuar në procedurë administrative...",
    "options": [
      "pasojat juridike që burojnë nga një akt i tillë administrativ mbeten",
      "anulohen edhe pasojat juridike që burojnë nga një akt i tillë administrativ",
      "pasojat juridike që burojnë nga një akt i tillë administrativ nuk anulohen"
    ],
    "answerIndex": 1
  },
  {
    "id": 325,
    "num": 324,
    "page": 48,
    "question": "Me shfuqizimin e aktit administrativ të miratuar në procedurë administrative...",
    "options": [
      "anulohen pasojat juridike që akti administrativ tashmë ka shkaktuar dhe mundësohet prodhimi i mëtejmë i pasojave juridike nga akti administrativ i shfuqizuar",
      "anulohen pasojat juridike që ka sjellë akti administrativ dhe pamundësohet prodhimi i mëtejshëm i pasojave juridike nga akti administrativ.",
      "nuk anulohen pasojat juridike që i ka shkaktuar akti administrativ, por pamundësohet prodhimi i mëtejmë i pasojave juridike nga akti administrativ i shfuqizuar"
    ],
    "answerIndex": 2
  },
  {
    "id": 326,
    "num": 325,
    "page": 48,
    "question": "Kundër aktit administrativ të miratuar mund të inicohet kontest administrativ...",
    "options": [
      "në shkallën e dytë, që është bërë i formës së prerë",
      "në shkallë të parë",
      "në shkallën e dytë, si dhe kundër një akti administrativ të shkallës së parë, kundër të cilit nuk ka vend për ankimim në procedurën administrative"
    ],
    "answerIndex": 2
  },
  {
    "id": 327,
    "num": 326,
    "page": 48,
    "question": "Mbikëqyrjen inspektuese mbi zbatimin e Ligjit të Procedurës së Përgjithshme Administrative e bën...",
    "options": [
      "Ministria e Shoqërisë Informatike dhe e Administratës",
      "Inspektorati Administrativ Shtetëror",
      "Komisioni Shtetëror i Vendimmarrjes në Procedurën Administrative dhe Procedurën e Marrëdhënies së Punësimit në shkallë të dytë"
    ],
    "answerIndex": 1
  },
  {
    "id": 328,
    "num": 327,
    "page": 48,
    "question": "Në procedurën administrative, organi publik vepron nëpërmjet...",
    "options": [
      "cilido zyrtar",
      "funksionari",
      "zyrtarit të autorizuar të caktuar në përputhje me rregullat e përcaktuara në ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 329,
    "num": 328,
    "page": 48,
    "question": "Nëse nuk është përcaktuar me ligj apo akt nënligjor të posaçëm, funksionari që drejton organin publik, përkatësisht drejtuesi është i detyruar që...",
    "options": [
      "me vendim të autorizojë një zyrtar",
      "me akt administrativ të autorizojë një zyrtar",
      "të përcaktojë me aktin e organizimit një njësi organizative përgjegjëse për çdo lloj pune administrative nën autoritetin e saj"
    ],
    "answerIndex": 2
  },
  {
    "id": 330,
    "num": 329,
    "page": 48,
    "question": "Nëse akti i kontestuar nuk është akt administrativ, Gjykata Administrative do ta...",
    "options": [
      "refuzojë padinë me përfundim",
      "refuzojë padinë me vendim",
      "refuzojë padinë me aktvendim"
    ],
    "answerIndex": 1
  },
  {
    "id": 331,
    "num": 330,
    "page": 49,
    "question": "Nëse padia është dorëzuar para kohe, Gjykata Administrative do ta hedhë poshtë me:",
    "options": [
      "përfundim",
      "aktvendim",
      "vendim"
    ],
    "answerIndex": 1
  },
  {
    "id": 332,
    "num": 331,
    "page": 49,
    "question": "Palët në kontest administrativ janë:",
    "options": [
      "paditësi, i padituri dhe organi publik",
      "paditësi dhe i padituri",
      "paditësi, i padituri dhe i interesuari"
    ],
    "answerIndex": 2
  },
  {
    "id": 333,
    "num": 332,
    "page": 49,
    "question": "Në shkallë të dytë, Gjykata e Lartë Administrative vendos:",
    "options": [
      "në një panel prej pesë gjyqtarësh",
      "gjyqtar individual",
      "në një panel prej tre gjyqtarësh"
    ],
    "answerIndex": 2
  },
  {
    "id": 334,
    "num": 333,
    "page": 49,
    "question": "Në rast të tërheqjes së padisë, Gjykata Administrative...",
    "options": [
      "do të miratojë aktgjykim",
      "do ta ndërpresë procedurën me aktvendim",
      "Me një përfundim do ta ndërpresë procedurën"
    ],
    "answerIndex": 1
  },
  {
    "id": 335,
    "num": 334,
    "page": 49,
    "question": "Në kontestin administrativ të shkallës së dytë vendos:",
    "options": [
      "Gjykata Administrative",
      "Gjykata e Lartë Administrative",
      "Gjykata e Lartë e Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 336,
    "num": 335,
    "page": 49,
    "question": "Në kontest administrativ, vendimet merren për:",
    "options": [
      "zgjedhja, emërimi dhe shkarkimi i nëpunësve publikë",
      "të drejtat e marrëdhënies së punës të nëpunësve shtetërorë dhe publikë",
      "ligjshmërinë e akteve individuale përfundimtare që vendosin për zgjedhjen, emërimin dhe shkarkimin e titullarëve të funksioneve publike"
    ],
    "answerIndex": 2
  },
  {
    "id": 337,
    "num": 336,
    "page": 49,
    "question": "Në kontest administrativ, shpenzimet i paguan:",
    "options": [
      "paditësi",
      "ankimuesi",
      "secila palë shpenzimet e veta SEKTORIN PUBLIK"
    ],
    "answerIndex": 2
  },
  {
    "id": 338,
    "num": 337,
    "page": 50,
    "question": "Punonjësit e sektorit publik janë:",
    "options": [
      "personat të cilët kanë themeluar marrëdhënie pune në komunat, Qytetin e Shkupit dhe komunat në Qytetin e Shkupit",
      "personat që kanë themeluar marrëdhënie pune në organet e pushtetit qendror dhe lokal, dhe organe të tjera shtetërore të themeluara në përputhje me Kushtetutën dhe ligjin, si dhe në institucionet që ushtrojnë veprimtari në fushën e arsimit, të shkencës, të shëndetësisë, të kulturës, të punës, të kujdesit social dhe në kujdesin e fëmijëve, të sportit, si dhe në veprimtari të tjera të interesit publik të përcaktuara me ligj, të organizuara si agjenci, fonde, institucione publike dhe ndërmarrje publike të themeluara nga Republika e Maqedonisë së Veriut ose nga komunat, Qyteti i Shkupit dhe komunat në qytetin e Shkupit",
      "personat që kanë themeluar marrëdhënie pune në institucione që kryejnë veprimtari në fushën  e arsimit, të shkencës, të shëndetësisë, të kulturës, të punës, të kujdesit social dhe në kujdesin e fëmijëve, të sportit, si dhe në veprimtari të tjera të interesit publik të përcaktuara me ligj"
    ],
    "answerIndex": 1
  },
  {
    "id": 339,
    "num": 338,
    "page": 50,
    "question": "Personat të cilët janë mandatuar për të mbajtur poste në zgjedhjet presidenciale, parlamentare ose lokale, personat të cilët janë mandatuar të ushtrojnë funksion në pushtetin ekzekutiv ose atë gjyqësor, nëpërmjet zgjedhjes ose emërimit nga Kuvendi i Republikës së Maqedonisë së Veriut, ose nga organet e pushtetit lokal, si dhe personat e tjerë që, sipas ligjit, janë zgjedhur ose emëruar në një pozicion nga bartësit e pushtetit legjislativ, ekzekutiv ose gjyqësor, nuk konsiderohen punonjës në sektorin publik",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 340,
    "num": 339,
    "page": 50,
    "question": "Ofruesit e shërbimeve publike në fushën e veprimtarive komunale nuk konsiderohen punonjës të sektorit publik:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 341,
    "num": 340,
    "page": 50,
    "question": "Për punët që lidhen me marrëdhëniet e punës së punonjësve të sektorit publik zbatohen rregulloret e përgjithshme për marrëdhëniet e punës, vetëm nëse...",
    "options": [
      "bëhet fjalë për punë që nuk rregullohen me Ligjin e të Punësuarve në Sektorin Publik, si dhe për punë për të cilat Ligji i të Punësuarve në Sektorin Publik, nuk i referohet zbatimit të ligjit të veçantë dhe kontratës kolektive, dhe i referohet marrëdhënies së punës së punonjësit",
      "këto janë çështje të rregulluara me Ligjin e të Punësuarve në Sektorin Publik dhe ky ligj i referohet edhe zbatimit plotësues të rregulloreve të përgjithshme për marrëdhëniet e punës.",
      "Këto janë çështje që nuk janë të rregulluara me Ligjin e të Punësuarve në Sektorin Publik, ligje të veçanta dhe kontrata kolektive"
    ],
    "answerIndex": 0
  },
  {
    "id": 342,
    "num": 341,
    "page": 51,
    "question": "Parimi i kushteve të barabarta dhe i qasjes së barabartë në vendin e punës, në përputhje me Ligjine të Punësuarve në Sektorin Publik, nënkupton që:",
    "options": [
      "të gjithë punonjësit në sektorin publik kanë të drejtë për kushte të barabarta organizative, hapësinore dhe teknike",
      "institucionet janë të detyruara të shpallin vendet e lira dhe kushtet për plotësimin e tyre nëpërmjet një shpalljeje të brendshme, përkatësisht publike.",
      "kandidati më profesionist dhe më kompetent për vendin e punës zgjidhet me konkurs publik ose të brendshëm"
    ],
    "answerIndex": 1
  },
  {
    "id": 343,
    "num": 342,
    "page": 51,
    "question": "Institucionet kanë detyrimin të shpallin vendet e lira dhe kushtet për plotësimin e tyre nëpërmjet shpalljes së:",
    "options": [
      "kumtesës për publikun",
      "konkursit të jashtëm, përkatësisht të brendshëm",
      "thirrjes publike"
    ],
    "answerIndex": 1
  },
  {
    "id": 344,
    "num": 343,
    "page": 51,
    "question": "Avancimi i punonjësve në sektorin publik bëhet nëpërmjet:",
    "options": [
      "shpalljes së konkursit të brendshëm gjatë të cilit, zgjidhet kandidati më i mirë për këtë pozicion nga punonjësit e institucionit, në një procedurë përzgjedhjeje transparente, të drejtë dhe konkurruese, bazuar në vlerësimin e performancës, profesionalizmit dhe kompetencës së kandidatëve.",
      "shpalljes së konkursit publik, gjatë të cilit, në një procedurë përzgjedhjeje transparente, të drejtë dhe konkurruese, me ç'rast në bazë të vlerësimit të performancës, të profesionalizmit dhe të kompetencës së kandidatëve, zgjidhet kandidati më i mirë për këtë pozicion nga radhët e punonjësve të institucioni",
      "bartjes, gjatë së cilës në një procedurë përzgjedhjeje transparente, të drejtë dhe konkurruese, me ç'rast në bazë të vlerësimit të performancës, të profesionalizmit dhe të kompetencës së kandidatëve nga radhët e punonjësve të institucionit zgjidhet kandidati më i mirë për këtë pozicion."
    ],
    "answerIndex": 0
  },
  {
    "id": 345,
    "num": 344,
    "page": 51,
    "question": "Zbatimi i parimit të menaxhimit të efektit të punonjësve në sektorin publik nënkupton:",
    "options": [
      "detyrim i institucioneve për avancimin e punonjësve",
      "detyrim i institucioneve për të vendosur procedura të menaxhimit të efektit të punonjësve, me të cilat do të ndiqet, do të vlerësohet puna e tyre dhe do të propozohen masa për përmirësimin e efektit",
      "detyrim i punonjësve për kryerjen e punëve dhe të detyrave të punës të përcaktuara në aktet për sistemimin e vendeve të punës në institucione"
    ],
    "answerIndex": 1
  },
  {
    "id": 346,
    "num": 345,
    "page": 51,
    "question": "Zbatimi i parimit të orientimit në shërbim për punonjësit në sektorin publik nënkupton:",
    "options": [
      "punonjësit në institucionet e sektorit publik duhet të jenë të orientuar drejt shërbimeve, d.m.th. aktivë, novatorë, bashkëpunues dhe fleksibël në mënyrë që të realizojnë në mënyrë efikase dhe efektive interesat e tyre.",
      "punonjësit në institucionet e sektorit publik duhet të jenë të orientuar drejt shërbimeve, d.m.th., të jenë aktivë, novatorë, bashkëpunues dhe fleksibël për të ushtruar në mënyrë efikase dhe efektive të drejtat dhe interesat e palëve, me kujdes paralel për interesin publik",
      "punonjësit në institucionet e sektorit publik duhet të jenë të orientuar drejt shërbimeve, domethënë të jenë aktivë, novatorë, bashkëpunues dhe fleksibël për të realizuar në mënyrë efikase dhe efektive të drejtat dhe interesat e palëve, duke mos pasur parasysh interesin publik."
    ],
    "answerIndex": 1
  },
  {
    "id": 347,
    "num": 346,
    "page": 52,
    "question": "Zbatimi i parimit të transparencës dhe të konfidencialitetit për punonjësit në sektorin publik nënkupton...",
    "options": [
      "punonjësit në sektorin publik, gjatë kryerjes së punëve dhe të detyrave të tyre, nuk guxojnë të ofrojnë qasje në informacione të natyrës publike për të huajt",
      "punonjësit në sektorin publik janë të detyruar që, gjatë kryerjes së punëve dhe të detyrave, të sigurojnë qasje në informacione të natyrës publike sipas mënyrës dhe kushteve të përcaktuara me ligj",
      "punonjësit në sektorin publik janë të detyruar të kërkojnë leje nga Ministria e Shoqërisë Informatike dhe e Administratës për të siguruar akses në informacione të natyrës publike gjatë kryerjes së punëve dhe të detyrave"
    ],
    "answerIndex": 1
  },
  {
    "id": 348,
    "num": 347,
    "page": 52,
    "question": "Vendet e punës së punonjësve të sektorit publik grupohen në:",
    "options": [
      "katër grupe",
      "tri grupe",
      "dy grupe"
    ],
    "answerIndex": 0
  },
  {
    "id": 349,
    "num": 348,
    "page": 52,
    "question": "Cili nga grupet e theksuara nuk konsiderohet grup punonjësish në sektorin publik:",
    "options": [
      "ofruesit e shërbimeve publike",
      "zyrtarët",
      "personat ndihmës – teknikë"
    ],
    "answerIndex": 1
  },
  {
    "id": 350,
    "num": 349,
    "page": 52,
    "question": "Brenda çdo nëngrupi të vendeve të punës të punonjësve të sektorit publik përcaktohen:",
    "options": [
      "një ose më shumë shkallë pune",
      "një ose më shumë klasa të vendeve të punës",
      "një ose më shumë kategori pune"
    ],
    "answerIndex": 2
  },
  {
    "id": 351,
    "num": 350,
    "page": 52,
    "question": "Brenda çdo kategorie pune të punonjësve në sektorin publik përcaktohen:",
    "options": [
      "një ose më shumë klasa të vendeve të punës",
      "një ose më shumë nivele të vendeve të punës",
      "një ose më shumë shkallë të vendeve të punës"
    ],
    "answerIndex": 1
  },
  {
    "id": 352,
    "num": 351,
    "page": 52,
    "question": "Katalogu i vendeve të punës në sektorin publik krijohet dhe menaxhohet nga:",
    "options": [
      "Agjencia e Punësit e Republikës së Maqedonisë së Veriut",
      "Ministria e Shoqërisë Informatike dhe e Administratës",
      "Regjistri Qendror i Republikës së Maqedonisë së Veriut"
    ],
    "answerIndex": 1
  },
  {
    "id": 353,
    "num": 352,
    "page": 53,
    "question": "Çfarë rregullohet me aktet e organizimit të brendshëm të institucioneve në sektorin publik?",
    "options": [
      "mënyra e sjelljes së punonjësve në institucion",
      "emri dhe mbiemri i të gjithë punonjësve në institucion",
      "lloji dhe numri i njësive organizative dhe fusha e punës së tyre"
    ],
    "answerIndex": 2
  },
  {
    "id": 354,
    "num": 353,
    "page": 53,
    "question": "Aktet për sistemimin e vendeve të punës në institucionet e sektorit publik miratohen nga:",
    "options": [
      "punonjësit e institucionit",
      "drejtuesi i institucionit",
      "përgjegjësi i njësisë organizative për menaxhimin e burimeve njerëzore në institucion"
    ],
    "answerIndex": 1
  },
  {
    "id": 355,
    "num": 354,
    "page": 53,
    "question": "Regjistri i punonjësve në sektorin publik krijohet dhe mbahet në formë elektronike nga:",
    "options": [
      "Ministria e Punëve të Brendshme",
      "Regjistri Qendror i Republikës së Maqedonisë së Veriut",
      "Ministria e Shoqërisë Informatike dhe e Administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 356,
    "num": 355,
    "page": 53,
    "question": "Ligji i të Punësuarve në Sektorin Publik lejon punësimin me kohë të caktuar:",
    "options": [
      "po",
      "jo",
      "po, por vetëm në disa raste të përcaktuara në mënyrë taksative në ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 357,
    "num": 356,
    "page": 53,
    "question": "Koha e plotë e punës e punonjësve në sektorin publik është:",
    "options": [
      "40 orë në javë",
      "42 orë në javë",
      "48 orë në javë"
    ],
    "answerIndex": 0
  },
  {
    "id": 358,
    "num": 357,
    "page": 53,
    "question": "Të drejtat dhe detyrat e përgjithshme të punonjësve në sektorin publik rregullohen me:",
    "options": [
      "Ligji i Marrëdhënieve të Punës",
      "Ligjin e të Punësuarve në Sektorin Publik",
      "ligjet e veçanta dhe kontratat kolektive"
    ],
    "answerIndex": 1
  },
  {
    "id": 359,
    "num": 358,
    "page": 53,
    "question": "Ligjet speciale rregullojnë...",
    "options": [
      "parimet e përbashkëta që vlejnë për të gjithë punonjësit në sektorin publik",
      "të drejtat dhe detyrat e përgjithshme që vlejnë për të gjithë punonjësit në sektorin publik",
      "të drejta dhe detyra të tjera që rrjedhin nga marrëdhënia e punës e të punësuarve, të cilat nuk janë të rregulluara me Ligjin e të Punësuarve në Sektorin Publik."
    ],
    "answerIndex": 2
  },
  {
    "id": 360,
    "num": 359,
    "page": 54,
    "question": "Punonjësit në sektorin publik kanë të drejtë në rroga dhe kompensime në rroga në përputhje me:",
    "options": [
      "Vendim të ministrit të Financave",
      "Ligjin e të Punësuarve në Sektorin Publik",
      "ligjet e veçanta, marrëveshjet kolektive ose rregulloret e përgjithshme për marrëdhëniet e punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 361,
    "num": 360,
    "page": 54,
    "question": "Të drejtat dhe detyrat e punonjësve në sektorin publik u pushojnë vetëm në rastet...",
    "options": [
      "kur emërohen në një funksion publik të përcaktuar me ligj",
      "kur emërohen në një funksion publik të caktuar me ligj, kur caktohen për të punuar jashtë vendit në kuadër të bashkëpunimeve ndërkombëtare, teknike, arsimore, shëndetësore, kulturore, shkencore e të tjera, kur caktohen për të punuar në një zyrë diplomatike ose përfaqësi konsullore, kur bashkëshortët dërgohen për të punuar jashtë vendit në rastet e mësipërme ose kur u jepet leje të mungojnë pa pagesë, për shkak të zhvillimit profesional që nuk financohet nga institucioni",
      "kur emërohen në një funksion publik të përcaktuar me ligj, ose kur u jepet leje të mungojnë pa pagesë, për shkak të zhvillimit profesional që nuk financohet nga institucioni"
    ],
    "answerIndex": 1
  },
  {
    "id": 362,
    "num": 361,
    "page": 54,
    "question": ". Punonjësit në sektorin publik kanë të drejtën e pushimit pa pagesë, për një kohëzgjatje maksimale prej:",
    "options": [
      "1 vjet",
      "2 vjet",
      "3 vjet"
    ],
    "answerIndex": 1
  },
  {
    "id": 363,
    "num": 362,
    "page": 54,
    "question": "Nëse gjatë kohës së pezullimit të marrëdhënies së punës të punonjësve në sektorin publik, ndryshohen kushtet e veçanta për vendin e tyre të punës...",
    "options": [
      "nuk janë të detyruar t'i plotësojnë kushtet e reja",
      "nuk mund të kthehen në vendin e njëjtë të punës në institucion",
      "të njëjtit janë të detyruar ti plotësojnë kushtet e reja brenda dy viteve, nga dita e kthimit në institucion"
    ],
    "answerIndex": 2
  },
  {
    "id": 364,
    "num": 363,
    "page": 54,
    "question": "Punonjësit në sektorin publik që kanë kandiduar në zgjedhjet parlamentare, presidenciale apo lokale kanë të drejtën e pushimit pa pagesë...",
    "options": [
      "nuk kanë të drejtë pushimi pa pagesë gjatë fushatës zgjedhore për zgjedhjet në të cilat marrin pjesë",
      "gjatë fushatës zgjedhore për zgjedhjet në të cilat marrin pjesë",
      "për një periudhë prej 15 ditësh, të numëruara nga fillimi i fushatës zgjedhore, për zgjedhjet në të cilat marrin pjesë"
    ],
    "answerIndex": 1
  },
  {
    "id": 365,
    "num": 364,
    "page": 54,
    "question": "Nëse punonjësit e sektorit publik nuk e paralajmërojnë menjëherë eprorin se detyra që i është dhënë është antikushtetuese, pra e paligjshme dhe e kryejnë atë, për kryerjen e saj do të japin llogari:",
    "options": [
      "të punësuarit",
      "punonjësit dhe mbikëqyrësi i tyre i drejtpërdrejtë",
      "eprori dhe përgjegjësi i tij"
    ],
    "answerIndex": 1
  },
  {
    "id": 366,
    "num": 365,
    "page": 55,
    "question": "Nëse detyra e dhënë nga funksionari që drejton institucionin, pra nga eprori i drejtpërdrejtë, është antikushtetuese, pra e kundërligjshme, punonjësi është i detyruar t'i tregojë atij për antikushtetutshmërinë e detyrës së dhënë, d.m.th. paligjshmërinë e detyrës së dhënë dhe ta bëjë:",
    "options": [
      "pa pasur parasysh nëse detyra është dhënë verbalisht apo me shkrim",
      "nëse i është dhënë me shkrim",
      "nëse me shkrim pajtohet që ta bëjë"
    ],
    "answerIndex": 1
  },
  {
    "id": 367,
    "num": 366,
    "page": 55,
    "question": "Punonjësit në sektorin publik, nëse gjykojnë se kryerja e një detyre të caktuar pune përbën vepër penale, nuk mund të thirren në përgjegjësi për shkak të njoftimit të dhënë te eprori i tyre i drejtpërdrejtë, nga ai që ia ka dhënë detyrën, si dhe deri te Komisioni Shtetëror i Parandalimit të Korrupsionit:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 368,
    "num": 367,
    "page": 55,
    "question": "Në rast të pengimit për të ardhur në punë, punonjësit në sektorin publik janë të detyruar të njoftojnë menjëherë përgjegjësin e tyre, përkatësisht titullarin e institucionit...",
    "options": [
      "brenda tri ditëve të punës",
      "brenda 24 orëve",
      "deri në përfundimin e orarit të punës ditore të punëdhënësit"
    ],
    "answerIndex": 2
  },
  {
    "id": 369,
    "num": 368,
    "page": 55,
    "question": "Në rast të pengimit të ardhjes në punë për shkak të forcës madhore, punonjësit në sektorin publik janë të detyruar të njoftojnë drejtpërdrejt përgjegjësin e tyre, përkatësisht titullarin e institucionit...:",
    "options": [
      "deri në përfundimin e orarit të punës ditore të punëdhënësit",
      "menjëherë pas përfundimit të arsyes që ka penguar njoftimin",
      "brenda 24 orëve pas përfundimit të arsyes që ka penguar njoftimin"
    ],
    "answerIndex": 1
  },
  {
    "id": 370,
    "num": 369,
    "page": 55,
    "question": "Në rast të pengimit të ardhjes në punë për shkak të forcës madhore, punonjësit në sektorin publik janë të detyruar të njoftojnë drejtpërdrejt përgjegjësin e tyre, përkatësisht titullarin e institucionit, menjëherë pas përfundimit të arsyes që ka penguar njoftimin...",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 371,
    "num": 370,
    "page": 55,
    "question": "Në rast të pengimit për të ardhur në punë, punonjësit në sektorin publik janë të detyruar të njoftojnë drejtpërdrejt përgjegjësin e tyre, përkatësisht titullarin e institucionit, menjëherë pas përfundimit të arsyes së pamundësisë për të ardhur në punë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 372,
    "num": 371,
    "page": 56,
    "question": "Në rast të pengimit për të ardhur në punë, punonjësit në sektorin publik janë të detyruar të njoftojnë drejtpërdrejt përgjegjësin e tyre, përkatësisht titullarin e institucionit, deri në përfundim të orarit të punës ditore të punëdhënësit",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 373,
    "num": 372,
    "page": 56,
    "question": "Në rast të rrethanave të jashtëzakonshme (fatkeqësi natyrore, epidemi, përmbytje, etj.), punonjësit në sektorin publik, pa pëlqimin e tyre, mund të dërgohen për të kryer punë dhe detyra te një punëdhënës jashtë vendbanimit të tyre",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 374,
    "num": 373,
    "page": 56,
    "question": "Në rast të rrethanave të jashtëzakonshme (fatkeqësi natyrore, epidemi, përmbytje, etj.), punonjësit në sektorin publik mund të dërgohen për të kryer punë dhe detyra te një punëdhënës jashtë vendbanimit të tyre:",
    "options": [
      "nëse pajtohen",
      "pa pëlqimin e tyre",
      "nëse pajtohen me shkrim"
    ],
    "answerIndex": 1
  },
  {
    "id": 375,
    "num": 374,
    "page": 56,
    "question": "Në rast të rrethanave të jashtëzakonshme (fatkeqësi natyrore, epidemi, përmbytje, etj.), punonjësit në sektorin publik mund të dërgohen për të kryer punë dhe detyra te një punëdhënës jashtë vendbanimit të tyre vetëm me pëlqimin e tyre.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 376,
    "num": 375,
    "page": 56,
    "question": "Në rast të rrethanave  të jashtëzakonshme (fatkeqësi natyrore, epidemi, përmbytje, etj.), punonjësit në sektorin publik, pa pëlqimin e tyre, mund të dërgohen për të kryer punë dhe detyra pune te një punëdhënës jashtë vendbanimit të tyre, për sa kohë që zgjasin rrethanat e jashtëzakonshme:",
    "options": [
      "por jo më shumë se një vit",
      "por jo më shumë se tre muaj",
      "pavarësisht nga kohëzgjatja e tyre"
    ],
    "answerIndex": 1
  },
  {
    "id": 377,
    "num": 376,
    "page": 56,
    "question": "Punonjësi në sektorin publik, në institucionin në të cilin kryen punët dhe detyrat, nuk mund të mbajë me vete apo të shfaqë simbole partie në...:",
    "options": [
      "hapësirën e funksionarit që drejton institucionin",
      "hapësirën në të cilat punon me palët",
      "mjedisin e punës dhe të institucionit"
    ],
    "answerIndex": 2
  },
  {
    "id": 378,
    "num": 377,
    "page": 57,
    "question": "Gjatë orarit të punës, punonjësit në sektorin publik mund të marrin pjesë drejtpërdrejt në aktivitete zgjedhore ose në paraqitje të tjera publike të këtij lloji:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 379,
    "num": 378,
    "page": 57,
    "question": "Punonjësit në sektorit publik nuk mund të shprehin ose mbrojnë bindjet e tyre politike ose partiake, në hapësirat e punës dhe në mjedisin e institucionit.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 380,
    "num": 379,
    "page": 57,
    "question": "Punonjësit në sektorin publik, me anëtarësimin e tyre në parti politike dhe pjesëmarrjen në veprimtari partiake, mund të vënë në dyshim kryerjen e punës dhe të detyrave të punës nga vendi i tyre i punës në institucion",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 381,
    "num": 380,
    "page": 57,
    "question": "Dhuratat e marra nga zyrtarët ose organizatat ndërkombëtare, të dhëna gjatë vizitave, mikpritjes ose në rrethana të tjera të ngjashme, konsiderohen dhurata protokollare",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 382,
    "num": 381,
    "page": 57,
    "question": "Përgjegjësia e punonjësve në sektorin publik për kryerjen e punës dhe të detyrave të punës nga vendi i punës mund të jetë:",
    "options": [
      "disiplinore",
      "materiale",
      "disiplinore dhe/ose materiale"
    ],
    "answerIndex": 2
  },
  {
    "id": 383,
    "num": 382,
    "page": 57,
    "question": "Përgjegjësia për një vepër të kryer penale, përkatësisht kundërvajtje...:",
    "options": [
      "përjashton përgjegjësinë disiplinore të punonjësve në sektorin publik",
      "nuk e përjashton përgjegjësinë disiplinore të punonjësve të sektorit publik",
      "në varësi të peshës së veprës penale, përkatësisht kundërvajtjes, përjashton ose nuk e përjashton përgjegjësinë disiplinore të punonjësve në sektorin publik"
    ],
    "answerIndex": 1
  },
  {
    "id": 384,
    "num": 383,
    "page": 57,
    "question": "Përgjegjësia për një vepër të kryer penale, përkatësisht një kundërvajtje, përjashton përgjegjësinë disiplinore të punonjësve në sektorin publik",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 385,
    "num": 384,
    "page": 58,
    "question": "Përgjegjësia për një vepër të kryer penale, përkatësisht një kundërvajtje, nuk e përjashton përgjegjësinë disiplinore të punonjësve në sektorin publik.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 386,
    "num": 385,
    "page": 58,
    "question": "Të punësuarit në sektorin publik, për kryerjen e punëve dhe të detyrave nga vendi i punës, janë:",
    "options": [
      "përgjegjësi kolektive",
      "personalisht përgjegjës",
      "me përgjegjësi personale dhe/ose kolektive, në varësi të vendit të punës ku janë caktuar në institucion dhe llojit të shkeljes disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 387,
    "num": 386,
    "page": 58,
    "question": "Punonjësve në sektorin publik u ndërpritet marrëdhënia e punës:",
    "options": [
      "me marrëveshje ose me kërkesë të tyre",
      "me forcën e ligjit",
      "me marrëveshje, me kërkesën e tyre, me forcën e ligjit edhe në raste të tjera të përcaktuara me ligj dhe/ose marrëveshje kolektive"
    ],
    "answerIndex": 2
  },
  {
    "id": 388,
    "num": 387,
    "page": 58,
    "question": "Mobiliteti i punonjësve në sektorin publik është:",
    "options": [
      "lëvizja horizontale e një punonjësi nga një vend pune në tjetrin brenda sektorit publik",
      "lëvizja horizontale e një punonjësi nga një vend pune në tjetrën brenda të njëjtit grup pune",
      "lëvizja vertikale e një punonjësi nga një vend pune në tjetrin brenda të njëjtit grup vendesh pune"
    ],
    "answerIndex": 1
  },
  {
    "id": 389,
    "num": 388,
    "page": 58,
    "question": "Mobiliteti i punonjësve në sektorin publik kryhet:",
    "options": [
      "nëpërmjet shpalljes së konkursit të brendshmën, përkatësisht publik",
      "nëpërmjet shpalljes së konkursit publik",
      "pa shpallje të konkursit të brendshmën, përkatësisht publik"
    ],
    "answerIndex": 2
  },
  {
    "id": 390,
    "num": 389,
    "page": 58,
    "question": "Mobiliteti i punonjësve në sektorin publik realizohet nëpërmjet:",
    "options": [
      "sistemimi, pra kalimi i punonjësit në një vend pune me të njëjtin titull",
      "sistemimit, pra kalimit në një vend pune të të njëjtit nivel, pra në vend pune për të cilën punonjësi i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit të vendeve të punës në institucionin në të cilin sistemohet ose shkon",
      "sistemimi, d.m.th. kalimi i punonjësit në një vend pune brenda të njëjtit grup pune, pavarësisht nga kategoria dhe niveli i punës"
    ],
    "answerIndex": 1
  },
  {
    "id": 391,
    "num": 390,
    "page": 59,
    "question": "Punonjësi në sektorin publik, me kërkesë të një institucioni tjetër, për shkak të ngarkesës së përkohshme të shtuar, mund të sistemohet përkohësisht në një vend pune ku i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit të institucionit tjetër:",
    "options": [
      "gjithnjë derisa nuk ka nevojë për atë",
      "për të paktën një muaj dhe më së shumti një vit",
      "për të paktën një muaj dhe më së shumti njëzet e katër muaj", 
      "për të paktën një muaj dhe më së shumti gjashtë muaj"
    ],
    "answerIndex": 1
  },
  {
    "id": 392,
    "num": 391,
    "page": 59,
    "question": "Punonjësi në sektorin publik, me kërkesë të një institucioni tjetër, për shkak të ngarkesës së përkohshme të shtuar, mund të sistemohet përkohësisht në një vend pune ku i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara me aktin e sistematizimit të institucionit tjetër:",
    "options": [
      "pas pëlqimit paraprak me shkrim të punonjësit dhe drejtuesit të institucionit në të cilin është i punësuar",
      "pas pëlqimit paraprak me shkrim të drejtuesve të institucioneve, pa pëlqimin paraprak të punonjësit",
      "pas pëlqimit paraprak me shkrim të punonjësit dhe drejtuesve të institucioneve"
    ],
    "answerIndex": 2
  },
  {
    "id": 393,
    "num": 392,
    "page": 59,
    "question": "Kur punonjësi i sektorit publik sistemohet në të njëjtin institucion, ose kur punonjësi emërohet përkohësisht në një institucion tjetër, vendi i punës ku ai është caktuar nuk duhet të jetë:",
    "options": [
      "më shumë se 25 kilometra larg vendit të punës ku ai ishte i punësuar para sistemimit",
      "më shumë se 50 kilometra larg vendit të punës ku ai ishte i punësuar para sistemimit",
      "jashtë vendit në të cilin ndodhet vendi i punës ku ai ka qenë i punësuar para sistemimit"
    ],
    "answerIndex": 1
  },
  {
    "id": 394,
    "num": 393,
    "page": 59,
    "question": "Listat e transferimit për marrjen e mundshme të punonjësve në sektorin publik i menaxhon:",
    "options": [
      "Agjencia e Administratës",
      "Ministria e Financave",
      "Ministria e Shoqërisë Informatike dhe e Administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 395,
    "num": 394,
    "page": 59,
    "question": "Një punonjës në sektorin publik mund të merret nga një institucion në tjetrin, në një vend pune të të njëjtit nivel, pra në një vend pune ku i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit të institucionit tjetër, nëse pajtohen punonjësi dhe drejtuesit e të dyja institucioneve, dhe pas pëlqimit paraprak të ...",
    "options": [
      "Agjencia e Administratës dhe Ministria e Financave",
      "Ministrisë së Shoqërisë Informatike dhe të Administratës dhe Agjencisë së Administratës",
      "Ministrisë së Shoqërisë Informatike dhe të Administratës dhe organi përgjegjës për dhënien e pëlqimit të  planit vjetor të punësimit të institucionit në raport me buxhetin"
    ],
    "answerIndex": 2
  },
  {
    "id": 396,
    "num": 395,
    "page": 60,
    "question": "Punonjësi në sektorin publik, vendi i punës të së cilit mbyllet, regjistrohet në Listën e Transferimit për marrje të mundshme dhe...",
    "options": [
      "pas kalimit të tre muajve nga dita e regjistrimit, lista e transferimit të marrjeve të mundshme caktohet në çdo vend pune, për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit.",
      "mund të merret në një institucion tjetër, në vendin e punës të të njëjtit nivel, pra në një vend pune për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit, nëse për këtë pajtohen punonjësi dhe drejtuesi i institucionit tjetër, dhe kjo pas pëlqimit paraprak të Ministrisë së Shoqërisë Informatike dhe të Administratës, dhe organit përgjegjës për dhënien e pëlqimit të planit vjetor të punësimit në institucionin në raport me buxhetin",
      "mund të merret në një institucion tjetër, në një vend pune të të njëjtit nivel, pra në një vend pune për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të parashikuara në aktin e sistematizimit, nëse drejtuesit e institucioneve bien dakord për të."
    ],
    "answerIndex": 1
  },
  {
    "id": 397,
    "num": 396,
    "page": 60,
    "question": "Punonjësi të cilit i mbyllet vendi i punës regjistrohet në listën e transferit të marrjeve të mundshme dhe mund të merret në një institucion tjetër, në një vend pune të të njëjtit nivel, pra në një vend pune për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të parashikuara në aktin e sistematizimit",
    "options": [
      "nëse për këtë bien dakord drejtuesit e institucioneve dhe Ministria e Financave",
      "pa pëlqimin e tij",
      "nëse punonjësi dhe drejtuesi i institucionit tjetër bien dakord për këtë, dhe kjo pas pëlqimit paraprak të Ministrisë së Shoqërisë Informatike dhe të Administratës, dhe organit përgjegjës për dhënien e pëlqimit për planin vjetor të punësimit të institucionit në raport me buxhetin."
    ],
    "answerIndex": 2
  },
  {
    "id": 398,
    "num": 397,
    "page": 60,
    "question": "Punonjësi të cilit i mbyllet vendi i punës regjistrohet në Listën e Transferimit të marrjeve të mundshme dhe mund të kalojë në një institucion tjetër...",
    "options": [
      "në çdo vend pune, nëse ai pajtohet me të",
      "në një vend pune që parashikohet në aktin e sistematizimit të vendeve të punës, dhe është i lirë",
      "në një vend pune në të njëjtin nivel, përkatësisht në një vend pune për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 399,
    "num": 398,
    "page": 60,
    "question": "Institucioni në të cilin kalon punonjësi i sektorit publik, përkatësisht punonjësi të cilit i mbyllet vendi i punës, sipas Ligjit të të Punësuarve në Sektorin Publik, nuk duhet të jetë larg nga institucioni në të cilin ka qenë i punësuar para marrjes",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 400,
    "num": 399,
    "page": 60,
    "question": "Institucioni ku kalon një punonjës në sektorin publik, vendi i punës të cilit i mbyllet nuk duhet të jetë...",
    "options": [
      "jashtë vendit ku ndodhet institucioni ku ai ka qenë i punësuar para marrjes",
      "më shumë se 25 kilometra larg institucionit ku ishte i punësuar para marrjes",
      "më shumë se 50 kilometra larg institucionit ku ishte i punësuar para marrjes"
    ],
    "answerIndex": 2
  },
  {
    "id": 401,
    "num": 400,
    "page": 61,
    "question": "Institucioni në të cilin punonjësi i sektorit publik, të cilit i mbyllet vendi i punës, nuk duhet të jetë më shumë se 50 kilometra larg institucionit në të cilin ka qenë i punësuar para marrjes, përveç rasteve kur:",
    "options": [
      "të dyja institucionet janë të vendosura në një vendbanim më të madh",
      "marrja bëhet me kërkesë të punonjësit",
      "ka transport të organizuar falas deri në institucionin ku punonjësi merret"
    ],
    "answerIndex": 1
  },
  {
    "id": 402,
    "num": 401,
    "page": 61,
    "question": "Kategoritë dhe nivelet e vendeve të punës në sektorin publik përcaktohen në:",
    "options": [
      "Ligjin e të Punësuarve në Sektorin Publik",
      "Ligjin e Marrëdhënieve të Punës",
      "ligjet e veçanta dhe marrëveshjet kolektive"
    ],
    "answerIndex": 2
  },
  {
    "id": 403,
    "num": 402,
    "page": 61,
    "question": "Akti i sistematizimit të vendeve të punës në institucion rregullon:",
    "options": [
      "mënyra e sjelljes së punonjësve",
      "përshkrimin e vendeve të punës",
      "llojin dhe numrin e njësive organizative dhe fushëveprimin e tyre"
    ],
    "answerIndex": 1
  },
  {
    "id": 404,
    "num": 403,
    "page": 61,
    "question": "Brenda secilit grup të vendeve të punës të punonjësve të sektorit publik përcaktohen:",
    "options": [
      "të paktën dy kategori të vendeve të punës",
      "pesë nivele të vendeve të punës",
      "një ose më shumë nëngrupe të vendeve të punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 405,
    "num": 404,
    "page": 61,
    "question": "Nëse punonjësi në sektorin publik konsideron se detyra e dhënë nga funksionari që drejton institucionin, pra përgjegjësi i drejtpërdrejtë, është antikushtetuese, pra e paligjshme, ai është i detyruar t'i tregojë personit që ia ka dhënë detyrën për antikushtetutshmërinë, pra kundërligjshmërinë e detyrës së dhënë me shkrim dhe të njëjtën ta kryejë, përveç.....",
    "options": [
      "është i detyruar t'ia bëjë me dije personit që i ka dhënë detyrën për antikushtetutshmërinë ose paligjshmërinë e saj",
      "Nuk është detyrë e tij t'ia bëjë me dije personit që ia ka dhënë detyrën për antikushtetutshmërinë apo paligjshmërinë."
    ],
    "answerIndex": 0
  },
  {
    "id": 406,
    "num": 405,
    "page": 61,
    "question": "Nëse punonjësi në sektorin publik konsideron se detyra e dhënë nga funksionari që drejton institucionin, pra përgjegjësi i drejtpërdrejtë, është antikushtetuese, pra e paligjshme, ai është i detyruar t'i tregojë personit që ia ka dhënë detyrën për antikushtetutshmërinë, pra kundërligjshmërinë e detyrës së dhënë me shkrim dhe të njëjtën ta kryejë, përveç.....",
    "options": [
      "nëse vlerëson se kryerja e saj përbën vepër penale dhe e njofton menjëherë eprorin e atij që ia ka dhënë detyrën, si dhe Komisionin Shtetëror të Parandalimit të Korrupsionit.",
      "nëse vlerëson se kryerja e saj përbën vepër penale, për të cilën është paraparë dënim me burg mbi gjashtë muaj dhe njofton menjëherë eprorin e atij që ia ka dhënë detyrën, si dhe Komisionin Shtetëror të Parandalimit të Korrupsionit.",
      "nëse vendos që, përskaj informimit të personit që ia ka dhënë detyrën për antikushtetutshmërinë ose paligjshmërinë e detyrës së dhënë, ta njoftojë drejtpërdrejt me shkrim eprorin e atij që ia ka dhënë detyrën."
    ],
    "answerIndex": 1
  },
  {
    "id": 407,
    "num": 406,
    "page": 62,
    "question": "Në pajtim me Ligjin e të Punësuarve në Sektorin Publik, punonjësit e sektorit publik nuk guxojnë të marrin dhurata në lidhje me punën e tyre:",
    "options": [
      "me përjashtim të dhuratave protokollare me vlerë më të ulët",
      "duke përjashtuar dhuratat protokollare dhe dhuratat periodike me vlerë më të ulët",
      "ata nuk guxojnë të pranojnë dhurata"
    ],
    "answerIndex": 1
  },
  {
    "id": 408,
    "num": 407,
    "page": 62,
    "question": "Punonjësi të cilit i është mbyllur vendi i punës, dhe është regjistruar në Listën e Transferimit për marrje të mundshme, nëse nuk nënshkruan marrëveshjen e ofruar për marrjen në detyrë në një institucion tjetër, në një vend pune të të njëjtit nivel, pra në një pozicion për të cilin i plotëson kushtet e përgjithshme dhe të veçanta të përcaktuara në aktin e sistematizimit:",
    "options": [
      "kthehet në institucionin nga i cili duhej të ishte marrë",
      "kthehet në Listën e Transferimit për marrje të mundshme në detyrë",
      "i ndërpritet marrëdhënia e punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 409,
    "num": 408,
    "page": 62,
    "question": "Plani vjetor i punësimit në institucionet e sektorit publik miratohet nga:",
    "options": [
      "Organi përgjegjës për buxhetin e institucionit",
      "Funksionari që drejton institucionin",
      "përgjegjësi i njësisë organizative për menaxhimin e burimeve njerëzore në institucion"
    ],
    "answerIndex": 1
  },
  {
    "id": 410,
    "num": 409,
    "page": 62,
    "question": "Institucionet në sektorin publik, pasi marrin pëlqimin e organit përgjegjës për buxhetin e institucionit dhe të organeve të administratës shtetërore, si dhe pëlqimin e marrë nga Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive, planin vjetor të punësimit e dorëzojnë për mendim  te:",
    "options": [
      "Agjencia e Administratës",
      "Agjencia e Punësimit e Republikës së Maqedonisë së Veriut",
      "Ministria e Shoqërisë Informatike dhe e Administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 411,
    "num": 410,
    "page": 62,
    "question": "Plani vjetor i punësimit për të cilin është marrë mendim pozitiv, nga Ministria e Shoqërisë Informatike dhe e Administratës",
    "options": [
      "mund të ndryshohet gjatë vitit të cilit i referohet",
      "nuk mund të ndryshohet gjatë vitit të cilit i referohet"
    ],
    "answerIndex": 0
  },
  {
    "id": 412,
    "num": 411,
    "page": 62,
    "question": "Statusi dhe kompetencat e Agjencisë së Administratës rregullohen me:",
    "options": [
      "Ligjin e Institucioneve Shtetërore",
      "Ligjin e Nëpunësve Administrativë",
      "Ligjin e Agjencisë së Administratës të Republikës së Maqedonisë"
    ],
    "answerIndex": 1
  },
  {
    "id": 413,
    "num": 412,
    "page": 63,
    "question": "Nëpunës administrativ është personi i cili ka krijuar marrëdhënie pune, me qëllim të kryerjes së punëve të natyrës administrative në:",
    "options": [
      "shërbimin administrativ të ndërmarrjeve publike",
      "Këshilli Administrativ i Sektorit Publik",
      "organet e pushtetit shtetëror e lokal dhe në organet e tjera shtetërore të themeluara në përputhje me kushtetutën dhe ligjin, në institucionet që ushtrojnë veprimtari në fushën e arsimit, të shëndetësisë, të kulturës, të punës, të kujdesit social dhe kujdesit të fëmijëve, të sportit, si dhe në veprimtari të tjera të interesit publik të përcaktuara me ligj e të organizuara si agjenci, fonde, institucione publike dhe ndërmarrje publike të themeluara nga Republika e Maqedonisë ose nga komunat, qyteti i Shkupit dhe komunat e qytetit të Shkupit"
    ],
    "answerIndex": 2
  },
  {
    "id": 414,
    "num": 413,
    "page": 63,
    "question": "Në varësi të institucionit në të cilin është i punësuar, nëpunësi administrativ mund të jetë:",
    "options": [
      "nëpunës dhe ofruesi i shërbimeve publike",
      "nëpunës dhe nëpunës zyrtar i autorizuar",
      "nëpunës shtetëror dhe nëpunës publik"
    ],
    "answerIndex": 2
  },
  {
    "id": 415,
    "num": 414,
    "page": 63,
    "question": "Për punët që kanë të bëjnë me marrëdhëniet e punës së nëpunësve administrativë, të cilat nuk janë të rregulluara me Ligjin e Nëpunësve Administrativë, Ligjin e të Punësuarve në Sektorin Publik, ose me ligjet e veçanta dhe marrëveshjet kolektive, zbatohen:",
    "options": [
      "Ligji i Procedurës së Përgjithshme Administrative",
      "rregulloret e përgjithshme të marrëdhënieve të punës",
      "Ligji i Organizimit dhe i Punës së Administratës Shtetërore"
    ],
    "answerIndex": 1
  },
  {
    "id": 416,
    "num": 415,
    "page": 63,
    "question": "Termi \"vend pune\" i përdorur në Ligjin e Nëpunësve Administrativë nënkupton:",
    "options": [
      "nivel i veçantë në aktin e sistematizimit",
      "një kategori më vete në njësinë organizative",
      "njësinë më të vogël në strukturën organizative të institucionit, e cila përshkruhet në aktin e sistematizimit sipas nivelit, kushteve të përgjithshme dhe të veçanta, qëllimeve dhe detyrave dhe të dhënave të tjera në interes të vendit të punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 417,
    "num": 416,
    "page": 63,
    "question": "Termi \"vende pune të ndërlidhura\" i përdorur në Ligjin e Nëpunësve Administrativë nënkupton:",
    "options": [
      "punë në të njëjtin sektor",
      "vende pune në një njësi organizative",
      "vende pune të të njëjtit nivel, për të cilat kërkohet shkalla dhe lloji i njëjtë i arsimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 418,
    "num": 417,
    "page": 63,
    "question": "Termi \"kualifikime profesionale\" i përdorur në Ligjin e Nëpunësve Administrativë nënkupton:",
    "options": [
      "diplomë e kandidatit për arsim të orientuar të përfunduar",
      "kualifikimet e fituara nëpërmjet punës praktike në një vend konkret pune",
      "arsimimi formal dhe forma të tjera të arsimimit profesional të punonjësit për të cilat ai zotëron diplomë ose certifikatë"
    ],
    "answerIndex": 2
  },
  {
    "id": 419,
    "num": 418,
    "page": 64,
    "question": "Termi “kompetenca pune” i përdorur në Ligjin e Nëpunësve Administrativë nënkupton:",
    "options": [
      "shkathtësitë e fituara me punë",
      "njohuritë e fituara nëpërmjet trajnimit",
      "përmbledhje njohurish, aftësish dhe shkathtësish të nëpunësit administrativ të punësuar, për t'i kryer punët dhe detyrat e punës në vendin e punës"
    ],
    "answerIndex": 2
  },
  {
    "id": 420,
    "num": 419,
    "page": 64,
    "question": "Shprehja \"përvojë pune në profesion\" e përdorur në Ligjin e Nëpunësve Administrativë nënkupton:",
    "options": [
      "periudha e stazhit të punës të fituar mbi çdo bazë",
      "periudha e stazhit të punës ose e përvojës së fituar në profesion, duke filluar nga themelimi i parë i marrëdhënies së punës",
      "periudha e regjistruar në Agjencinë e Punësimit si përvojë pune të cilën punonjësi e ka kaluar në një marrëdhënie pune pas marrjes së një shkalle dhe lloji të caktuar arsimor dhe gjatë së cilës ka kryer punë e detyra pune që kërkojnë një shkallë dhe lloj arsimimi të tillë"
    ],
    "answerIndex": 2
  },
  {
    "id": 421,
    "num": 420,
    "page": 64,
    "question": "Cilat institucione janë përgjegjëse për koordinimin e menaxhimit të nëpunësve administrativë:",
    "options": [
      "Ministria e Shoqërisë Informatike dhe e Administratës, Ministria e Financave, Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive dhe Agjencia e Administratës",
      "Ministria e Shoqërisë Informatike dhe e Administratës dhe Agjencia e Punësimit e Republikës së Maqedonisë",
      "Ministria e Financave, Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive dhe Agjencia e Punësimit e Republikës së Maqedonisë"
    ],
    "answerIndex": 0
  },
  {
    "id": 422,
    "num": 421,
    "page": 64,
    "question": "Agjencia e Administratës është:",
    "options": [
      "organ i pavarur i administratës shtetërore",
      "një organ brenda Ministrisë së Shoqërisë Informatike dhe të Administratës",
      "organ i pavarur shtetëror me cilësinë e personit juridik, me të drejta, detyrime dhe përgjegjësi të përcaktuara me Ligjin e Nëpunësve Administrativë"
    ],
    "answerIndex": 2
  },
  {
    "id": 423,
    "num": 422,
    "page": 64,
    "question": "Agjencia e Administratës përgjigjet për punën e saj para:",
    "options": [
      "Qeverisë së Republikës së Maqedonisë",
      "Kuvendit të Republikës së Maqedonisë",
      "Ministrisë së Shoqërisë Informatike dhe të Administratës"
    ],
    "answerIndex": 1
  },
  {
    "id": 424,
    "num": 423,
    "page": 64,
    "question": "Agjencinë e Administratës e drejton:",
    "options": [
      "Ministri",
      "Drejtori",
      "Sekretari i Përgjithshëm"
    ],
    "answerIndex": 1
  },
  {
    "id": 425,
    "num": 424,
    "page": 65,
    "question": "Për ankimimet dhe rekurset e nëpunësve administrativë në shkallë të dytë vendos:",
    "options": [
      "Drejtori i institucionit",
      "Agjencia e Administratës",
      "Ministri i Shoqërisë Informatike dhe i Administratës"
    ],
    "answerIndex": 1
  },
  {
    "id": 426,
    "num": 425,
    "page": 65,
    "question": "Nëpunësit administrativë klasifikohen sipas karakteristikave të mëposhtme të kategorive:",
    "options": [
      "I, II, III dhe IV",
      "A, B, V dhe G",
      "nëpunës administrativë përgjegjës dhe ekzekutivë"
    ],
    "answerIndex": 1
  },
  {
    "id": 427,
    "num": 426,
    "page": 65,
    "question": "Nëpunësit Administrativë klasifikohen në kategoritë e mëposhtme:",
    "options": [
      "Kategoria I - drejtorë, kategoria II - udhëheqës sektori, kategoria III - udhëheqës njësish dhe kategoria IV - udhëheqës shërbimi",
      "Kategoria - drejtorë; kategoria - udhëheqës; kategoria – nëpunës ekzekutiv-administrativ dhe kategoria – personel ndihmës",
      "Kategoria A – sekretarët; kategoria B – nëpunës administrativ përgjegjës; kategoria V – nëpunës profesional administrativ dhe kategoria G – nëpunësndihmës profesional administrativ"
    ],
    "answerIndex": 2
  },
  {
    "id": 428,
    "num": 427,
    "page": 65,
    "question": "Ligji i Nëpunësve Administrativë parasheh mundësinë që, me aktin e sistematizimit të vendeve të punës, të përcaktohen vendet e veçanta të punës - nëpunës kabineti në kabinetet e:",
    "options": [
      "Presidentit të Republikës së Maqedonisë, Kryetarit të Kuvendit të Republikës së Maqedonisë, Kryetarit të Qeverisë së Republikës së Maqedonisë, nënkryetarëve të Kuvendit të Republikës së Maqedonisë, zëvendësve të Kryetarit të Qeverisë së Republikës së Maqedonisë, Sekretarëve të Përgjithshëm të Qeverisë së Republikës së Maqedonisë dhe ministrat",
      "Kryetarit të Gjykatës Kushtetuese të Republikës së Maqedonisë, Kryetarit të Këshillit Gjyqësor të Republikës së Maqedonisë dhe Avokatit të Popullit të Republikës së Maqedonisë",
      "të gjithë ministrat, Presidenti i Republikës së Maqedonisë, Kryetari i Kuvendit të Republikës së Maqedonisë dhe Kryetari i Qeverisë së Republikës së Maqedonisë"
    ],
    "answerIndex": 0
  },
  {
    "id": 429,
    "num": 428,
    "page": 65,
    "question": "Plotësimi i vendeve të lira në institucione, për kryerjen e punëve administrative, bëhet nëpërmjet procedurës së:",
    "options": [
      "punësimit dhe risistemimit",
      "punësimit dhe avancimit",
      "punësimit, avancimit dhe mobilitetit nëpërmjet sistemimit ose marrjes në detyrë"
    ],
    "answerIndex": 2
  },
  {
    "id": 430,
    "num": 429,
    "page": 65,
    "question": "Procedura e punësimit të nëpunësve administrativë fillon me:",
    "options": [
      "thirrje publike në media",
      "shpalljen e konkursit public",
      "njoftim me shkrim në faqen e internetit të institucionit"
    ],
    "answerIndex": 1
  },
  {
    "id": 431,
    "num": 430,
    "page": 66,
    "question": "Procedurat për plotësimin e vendit të punës të nëpunësit administrativ zbatohen sipas:",
    "options": [
      "marrjen e miratimit me shkrim, nga Agjencia e Punësimit e Republikës së Maqedonisë",
      "duke kërkuar pëlqimin nga Qeveria e Republikës së Maqedonisë",
      "njoftimit paraprak për mjetet e siguruara financiare nga Ministria e Financave, pra nga organi përgjegjës për dhënien e pëlqimit financiar, për plotësimin e vendeve të punës në institucion"
    ],
    "answerIndex": 2
  },
  {
    "id": 432,
    "num": 431,
    "page": 66,
    "question": "Procedura e avancimit në detyrë e nëpunësit administrativ fillon me:",
    "options": [
      "shpalljen e konkursit public",
      "shpalljen e konkursit të brendshëm",
      "duke lëshuar një deklaratë për media"
    ],
    "answerIndex": 1
  },
  {
    "id": 433,
    "num": 432,
    "page": 66,
    "question": "Planin vjetor të punsimit e miraton:",
    "options": [
      "ministri nga dikasteri competent",
      "Këshilli Drejtues i institucionit",
      "drejtuesi i institucionit"
    ],
    "answerIndex": 2
  },
  {
    "id": 434,
    "num": 433,
    "page": 66,
    "question": "Plani vjetor i punësimit përmban:",
    "options": [
      "të dhëna të sakta për punësimet dhe largimet e reja të parashikuara nga shërbimi",
      "të dhëna të sakta për sistemimin e punonjësve të rinj dhe ekzistues gjatë vitit kalendarik sipas të gjitha bazave",
      "të dhëna të sakta për gjendjen e plotësimit të vendeve të punës në institucion; të dhëna për pensionet e planifikuara, dhe të dhëna për lëvizjet e tjera të planifikuara të punonjësve, dhe një plan për shpërndarjen e numrit të të punësuarve të rinj në vitin e ardhshëm, sipas përkatësisë së bashkësisë"
    ],
    "answerIndex": 2
  },
  {
    "id": 435,
    "num": 434,
    "page": 66,
    "question": "Për institucionet që janë shfrytëzues buxhetor të linjës së parë, që financohen nga Buxheti i Republikës së Maqedonisë dhe për ndërmarrjet publike të themeluara nga Republika e Maqedonisë, gjatë miratimit të planit vjetor të punësimit, pëlqim jep:",
    "options": [
      "Ministria e Ekonomisë",
      "Ministria e Financave",
      "ministria kompetente"
    ],
    "answerIndex": 1
  },
  {
    "id": 436,
    "num": 435,
    "page": 66,
    "question": "Konkursi publik për punësimin e nëpunësve administrativë shpallet në:",
    "options": [
      "faqen e internetit të Agjencisë së Administratës të Republikës së Maqedonisë dhe në të paktën tri gazeta ditore, njëra prej të cilave botohet në gjuhën që e flasin së paku 20% e qytetarëve që flasin gjuhë zyrtare të ndryshme nga gjuha maqedonase;",
      "faqen e internetit të institucionit të punësimit dhe në të paktën tri gazeta ditore, njëra prej të cilave botohet në gjuhën që e flasin së paku 20% e qytetarëve që flasin gjuhë zyrtare të ndryshme nga gjuha maqedonase;",
      "faqen e internetit të Ministrisë së Shoqërisë Informatike dhe të Administratës dhe në të paktën dy gazeta ditore, njëra prej të cilave botohet në gjuhën që e flasin së paku 20% e qytetarëve që flasin gjuhë zyrtare të ndryshme nga gjuha maqedonase."
    ],
    "answerIndex": 0
  },
  {
    "id": 437,
    "num": 436,
    "page": 67,
    "question": "Komisionin e përzgjedhjes për punësime me konkurs publik e themelon:",
    "options": [
      "Agjencia e Administratës",
      "Ministria e Shoqërisë Informatike dhe e Administratës",
      "Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive"
    ],
    "answerIndex": 0
  },
  {
    "id": 438,
    "num": 437,
    "page": 67,
    "question": "Komisioni i përzgjedhjes për punësime me konkurs publik përbëhet nga:",
    "options": [
      "një nëpunës administrativ nga Sektori i përzgjedhjes së kandidatëve në Agjencinë e Administratës, i cili është kryetar i Komisionit dhe zëvendësi i tij, përgjegjësi i njësisë organizative për menaxhimin e burimeve njerëzore, përkatësisht nëpunësi administrativ që kryen detyrat që kanë të bëjnë me burimet njerëzore, nëse nuk ka njësi organizative në institucionin punëdhënës dhe zëvendësi i tij, përgjegjësit e njësive organizative në të cilat plotësohen vendet e punës, përkatësisht përgjegjësit e drejtpërdrejtë nëse nuk ka përgjegjës si dhe zëvendës të tyre dhe/ose një nëpunës administrativ nga Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive, dhe zëvendësi i tij nëse procedura kryhet për organet e administratës shtetërore",
      "nëpunës administrativ përgjegjës, përfaqësuesit e Agjencisë së Punësimit të Republikës së Maqedonisë, Agjencisë së Administratës të Republikës së Maqedonisë, dhe po aq anëtarë të tjerë nga njësitë organizative përkatëse të institucioneve për të cilat pritet të plotësohen vendet e punës, si dhe zëvendësit e tyre",
      "nëpunës administrativ përgjegjës, përfaqësues nga Ministria e Shoqërisë Informatike dhe e Administratës, Agjencia e Punësimit e Republikës së Maqedonisë, dhe anëtarë të tjerë nga njësitë organizative përkatëse të institucioneve, për të cilat zbatohet procedura e plotësimit të vendeve të punës, si dhe zëvendësit e tyre"
    ],
    "answerIndex": 0
  },
  {
    "id": 439,
    "num": 438,
    "page": 67,
    "question": "Përzgjedhja administrative për punësim përbëhet nga:",
    "options": [
      "kontrollimin e dëshmive dhe pikëzimin e tyre",
      "kontrollimi i të dhënave të futura në fletëparaqitjen e punësimit, me kushtet e përcaktuara në gazetat ditore",
      "kontrollimi i të dhënave të futura në fletëпaraqitjen e punësimit, me kushtet e përcaktuara në konkursin publik, dëshmitë e bashkëngjitura në kërkesë dhe pikëzimi i tyre"
    ],
    "answerIndex": 2
  },
  {
    "id": 440,
    "num": 439,
    "page": 67,
    "question": "Pas kryerjes së përzgjedhjes administrative, në fazën tjetër të procedurës së përzgjedhjes kalojnë:",
    "options": [
      "të paktën pesë kandidatë më shumë se numri i vendeve të punës, për të cilat zbatohet procedura dhe të cilët  kanë qenë më së miri të ranguar",
      "maksimumi pesë herë më shumë kandidatë sesa numri i vendeve të punës, për të cilët zbatohet procedura, të cilët kanë qenë më së miri të ranguar",
      "maksimumi dhjetë herë më shumë kandidatë sesa numri i vendeve të punës, për të cilët zbatohet procedura, të cilët kanë qenë më së miri të ranguar"
    ],
    "answerIndex": 2
  },
  {
    "id": 441,
    "num": 440,
    "page": 68,
    "question": "Pas kryerjes së provimit për nëpunës administrativ, në fazën tjetër të procedurës së përzgjedhjes kalojnë:",
    "options": [
      "maksimumi dy herë më shumë kandidatë sesa numri i vendeve të punës për të cilët zbatohet procedura, e të cilët kanë qenë më së miri të ranguar në listë",
      "maksimumi pesë herë më shumë kandidatë sesa numri i vendeve të punës për të cilët zbatohet procedura, e të cilët kanë qenë më së miri të ranguar në listë",
      "maksimumi tre herë më shumë kandidatë sesa numri i vendeve të punës për të cilët zbatohet procedura, e të cilët kanë qenë më së miri të ranguar në listë"
    ],
    "answerIndex": 1
  },
  {
    "id": 442,
    "num": 441,
    "page": 68,
    "question": "Verifikimi i besueshmërisë së dëshmive të dorëzuara nga kandidatët për punësim, të paraqitur në konkursin publik bëhet nga:",
    "options": [
      "Agjencia e Administratës",
      "Komisioni i përzgjedhjes për punësime në me konkurs publik",
      "Ministria e Shoqërisë Informatike dhe e Administratës"
    ],
    "answerIndex": 1
  },
  {
    "id": 443,
    "num": 442,
    "page": 68,
    "question": "Intervista, si pjesë e procedurës së përzgjedhjes së kandidatëve të paraqitur në konkursin publik për punësimin e nëpunësit administrativ, realizohet nga:",
    "options": [
      "Agjencia e Punësimit e Republikës së Maqedonisë së Veriut",
      "Agjencia e Administratës",
      "Komisioni i përzgjedhjes për punësime në me konkurs public"
    ],
    "answerIndex": 2
  },
  {
    "id": 444,
    "num": 443,
    "page": 68,
    "question": "Në intervistë, si pjesë e procedurës së përzgjedhjes së kandidatëve të paraqitur në konkursin publik për punësimin e nëpunësit administrativ, nëpërmjet pyetjeve të situatës, kontrollohen kompetencat e nevojshme të përgjithshme të punës së kandidatit, për kategorinë të cilës i përket vendi i punës për të cilën ka konkuruar dhe nëpërmjet pyetjeve profesionale apo detyrave praktike, kontrollohen kompetencat e tij të veçanta të punës nga fusha e vendit të punës për të cilin ka konkururar",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 445,
    "num": 444,
    "page": 68,
    "question": "Në bazë të propozimit të Komisionit të përzgjedhjes për Punësime me konkurs publik, vendimin e përzgjedhjes së punësimit të nëpunësit administrativ e merr:",
    "options": [
      "Kryetari i Komisionit të përzgjedhjes për punësime me konkurs publik",
      "drejtori i Agjencisë së Administratës",
      "sekretari, përkatësisht drejtuesi në institucionet në të cilat nuk emërohet sekretar"
    ],
    "answerIndex": 2
  },
  {
    "id": 446,
    "num": 445,
    "page": 69,
    "question": "Kundër vendimit të përzgjedhjes së punësimit, kandidati i pakënaqur ka të drejtë ankimimi që dorëzohet në:",
    "options": [
      "Ministrinë e Shoqërisë Informatike dhe të Administratës",
      "gjykata themelore kompetente",
      "Agjencinë e Administratës, përkatësisht në organin kompetent në përputhje me Ligjin e Nëpunësve Administrativë"
    ],
    "answerIndex": 2
  },
  {
    "id": 447,
    "num": 446,
    "page": 69,
    "question": "Brenda pesë ditëve nga përfundimi i vendimit për përzgjedhjen e një kandidati për punësim, titullari i institucionit merr vendim, përkatësisht lidh kontratë pune për një periudhë të pacaktuar me kandidatin e përzgjedhur",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 448,
    "num": 447,
    "page": 69,
    "question": "Kandidati i përzgjedhur për punësim, menjëherë para fillimit të punës, përpara sekretarit ose titullarit të institucionit në të cilin nuk emërohet sekretar, firmos:",
    "options": [
      "betimin solemn për misionin e përbashkët të punonjësve të sektorit publik",
      "Deklaratë për misionin e përbashkët të punonjësve të sektorit publik, që është pjesë përbërëse e Kodit të nëpunësve administrativë",
      "pëlqimin për caktimin në çdo vend pune në institucion, në rast të mbylljes së vendit të punës në të cilin punonjësi punësohet"
    ],
    "answerIndex": 1
  },
  {
    "id": 449,
    "num": 448,
    "page": 69,
    "question": "Procedura e avancimit ka për qëllim që t'u mundësojë nëpunësve administrativë avancimin në karrierë, pra kalimin nga vendet e ulëta të punës në ato më të larta brenda institucionit",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 450,
    "num": 449,
    "page": 69,
    "question": "Në konkurs të brendshëm mund të paraqitet:",
    "options": [
      "një punonjës i grupit të ofruesve të shërbimeve në veprimtaritë e sektorit publik",
      "një nëpunës administrativ i punësuar në institucionin që publikon konkurs të brendshëm",
      "nëpunës administrativ i punësuar në organet e pushtetit shtetëror dhe lokal"
    ],
    "answerIndex": 1
  },
  {
    "id": 451,
    "num": 450,
    "page": 69,
    "question": "Procedura e përzgjedhjes për avancimin e një nëpunësi administrativ përbëhet nga:",
    "options": [
      "provimi i nëpunësit administrativ dhe testi i personalitetit",
      "provimi dhe intervista e nëpunësit administrative",
      "përzgjedhja administrative dhe intervista"
    ],
    "answerIndex": 2
  },
  {
    "id": 452,
    "num": 451,
    "page": 69,
    "question": "Përzgjedhja administrative gjatë konkursit të brendshëm të publikuar nga institucioni përbëhet nga:",
    "options": [
      "vlerësimi i kompetencave të përgjithshme dhe të veçanta të punës së kandidatëve të regjistruar",
      "kontrollimi i njohurive dhe i aftësive të kandidatëve të paraqitur",
      "kontrollimi i të dhënave të futura në fletëparaqitje me kushtet që sipas Ligjit të Nëpunësve Administrativë duhet t'i plotësojnë kandidatët për avancim, kontrollimi i dëshmive të bashkangjitura në aplikimin dhe pikëzimi i tyre"
    ],
    "answerIndex": 2
  },
  {
    "id": 453,
    "num": 452,
    "page": 70,
    "question": "Pikët për përzgjedhjen administrative për çdo kandidat të paraqitur në një konkurs të brendshëm përcaktohen në bazë të:",
    "options": [
      "shumës së notës mesatare të nivelit më të lartë arsimor të kandidatit dhe të suksesit në test",
      "mendimi i të paktën dy nëpunësve administrativë përgjegjës",
      "shumës së tri notave të fundit të kandidatit të marra në vlerësimet e rregullta në institucion, trajnimet e kryera dhe certifikatat e mentorimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 454,
    "num": 453,
    "page": 70,
    "question": "Në procedurën e avancimit, Komisioni i përzgjedhjes i avancimit, bazuar në listën e renditjes së përpiluar të kandidatëve sipas pikëve të fituara, zhvillon intervistë me:",
    "options": [
      "kandidati i parë i ranguar më së miri",
      "maksimum pesë kandidatët të ranguar më së miri",
      "maksimumi tre kandidatë të ranguar më së miri"
    ],
    "answerIndex": 1
  },
  {
    "id": 455,
    "num": 454,
    "page": 70,
    "question": "Në procedurën pas konkursit të brendshëm, bazuar në listën e renditjes së kandidatëve sipas pikëve të fituara në përzgjedhjen administrative dhe në intervistën, Komisioni i përzgjedhjes dhe i avancimit, te sekretari, pra te drejtuesi i institucionit në të cilat nuk emërohet sekretar,  propozon si kandidat për punësim:",
    "options": [
      "pesë kandidatët e renditur të parët",
      "tre kandidatët e renditur në vendin e parë",
      "kandidatin e renditur si i pari"
    ],
    "answerIndex": 2
  },
  {
    "id": 456,
    "num": 455,
    "page": 70,
    "question": "Në procedurën pas konkursit të brendshëm, me përjashtim, intervista me kandidatin/kandidatët më të mirë të renditur e të paraqitur në konkursin e brendshëm, kryhet nga sekretari, përkatësisht drejtuesi i institucionit në të cilin nuk emërohet sekretar, për:",
    "options": [
      "avancimin e një nëpunësi administrativ në një vend pune në çdo nivel në kategorinë A",
      "avancimin e një nëpunësi administrativ në vendin e punës në çdo niveli në kategorinë C",
      "avancimin e një nëpunësi administrativ në vendin e punës në çdo niveli në kategorinë B"
    ],
    "answerIndex": 2
  },
  {
    "id": 457,
    "num": 456,
    "page": 70,
    "question": "Institucioni mund të përsërisë konkursin e brendshëm para:",
    "options": [
      "se të merret një vendim për zgjedhje",
      "për ta kryer intervistën",
      "se të merret vendim për shpalljen e konkursit publik"
    ],
    "answerIndex": 2
  },
  {
    "id": 458,
    "num": 457,
    "page": 70,
    "question": "Nëpunësi administrativ ka të drejtë dhe detyrim të përmirësohet profesionalisht gjatë vitit në bazë të planit individual për përmirësim profesional, si dhe detyrë që njohuritë e marra t'ua bartë nëpunësve të tjerë administrativë",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 459,
    "num": 458,
    "page": 71,
    "question": "Trajnimet për zhvillim profesional të nëpunësive administrativë mund të jenë:",
    "options": [
      "të përgjithshme dhe të veçanta",
      "gjenerike dhe të specializuara",
      "individuale dhe kolektive"
    ],
    "answerIndex": 1
  },
  {
    "id": 460,
    "num": 459,
    "page": 71,
    "question": "Trajnimet gjenerike për ngritjen profesionale të nëpunësve administrativë kryhen me qëllim të:",
    "options": [
      "trajnimit në grup të nëpunësve administrativë në përputhje me planin vjetor të trajnimit",
      "trajnimit të përgjithshëm të nëpunësve administrativë në përputhje me orarin e përcaktuar",
      "aftësimit profesional të nëpunësve administrativë në përputhje me kornizën e kompetencave të përgjithshme"
    ],
    "answerIndex": 2
  },
  {
    "id": 461,
    "num": 460,
    "page": 71,
    "question": "Trajnimet speicalizuara për ngritjen profesionale të nëpunësve administrativë kryhen me qëllim të:",
    "options": [
      "aftësimit profesional të nëpunësve administrativë në lidhje me kompetencat e veçanta",
      "trajnimit të nëpunësve administrativë për kryerjen e detyrave të veçanta dhe të kompetencave",
      "trajnimit të nëpunësve administrativë, për kryerjen e detyrave të veçanta dhe detyrave të punës përtej përshkrimit të vendit të punës"
    ],
    "answerIndex": 0
  },
  {
    "id": 462,
    "num": 461,
    "page": 71,
    "question": "Trajnimi i menaxhimit administrativ parashihet për:",
    "options": [
      "nëpunës administrativ në vende pune të nivelit C1",
      "nëpunës administrativ në vend pune në nivelet B3 dhe B4",
      "nëpunësit administrativë në vend pune në të gjitha nivelet A"
    ],
    "answerIndex": 0
  },
  {
    "id": 463,
    "num": 462,
    "page": 71,
    "question": "Provimi i menaxhimit administrativ është provim profesional, dhe në pajtim me ligjin, është kusht i veçantë për avancimin e:",
    "options": [
      "praktikant",
      "nëpunësve administrativë në një vend pune të kategorisë B",
      "nëpunës administrativ në provë"
    ],
    "answerIndex": 1
  },
  {
    "id": 464,
    "num": 463,
    "page": 71,
    "question": "Provimi i menaxhimit administrativ, si provim profesional, përbëhet nga:",
    "options": [
      "provim në pjesën e e përgjithshme dhe individuale",
      "provim me test dhe intervistë",
      "provim në pjesën teorike dhe praktike"
    ],
    "answerIndex": 2
  },
  {
    "id": 465,
    "num": 464,
    "page": 71,
    "question": "Cilat kushte duhet të plotësojë një nëpunës administrativ për t'u caktuar si mentor:",
    "options": [
      "të caktohet në të njëjin vend të punës si i mentoruari dhe të ketë përfunduar trajnimin për mentor",
      "të ketë të përfunduar arsimin e lartë dhe trajnimin për mentor",
      "të jetë i caktuar në një vend pune të një niveli më të lartë se nëpunësi administrativ i mentoruar dhe të ketë përfunduar trajnimin për mentor"
    ],
    "answerIndex": 2
  },
  {
    "id": 466,
    "num": 465,
    "page": 72,
    "question": "Regjistri i mentorëve të nëpunësve administrativë mbahet nga:",
    "options": [
      "Këshilli mentorues",
      "Ministria e Shoqërisë Informatike dhe e Administratës",
      "Ministria e Arsimit dhe Shkencës"
    ],
    "answerIndex": 1
  },
  {
    "id": 467,
    "num": 466,
    "page": 72,
    "question": "Sistemi i menaxhimit të efektit të nëpunësve administrativë përbëhet nga:",
    "options": [
      "përcaktimi i qëllimeve dhe i detyrave të punës, plani individual për zhvillim profesional, dhe procedura për vlerësimin e efektit të nëpunësit administrativ.",
      "përcaktimi i rregullave për lëshimin e urdhrave nga nëpunësit administrativë - përgjegjës dhe zbatimi i urdhrave nga nëpunësit administrativë - zbatuesit",
      "vendosja e marrëdhënieve profesionale ndërmjet nëpunësve administrativë - përgjegjës dhe nëpunësve administrativë - zbatues"
    ],
    "answerIndex": 0
  },
  {
    "id": 468,
    "num": 467,
    "page": 72,
    "question": "Qëllimet e punës dhe detyrat e nëpunësit administrativ përcaktohen nga:",
    "options": [
      "sekretari, përkatësisht drejtuesi në institucionet në të cilat nuk emërohet sekretar",
      "Kolegjiumi i drejtuesve në institucion",
      "nëpunësi përgjegjës administrativ në bashkëpunim me nëpunësin administrativ në përfundim të procedurës së vlerësimit të arritjeve në punë në dhjetor të vitit aktual, për vitin vijues"
    ],
    "answerIndex": 2
  },
  {
    "id": 469,
    "num": 468,
    "page": 72,
    "question": "Procedura e përmirësimit të efektit të punës së një nëpunësi administrativ përfshin:",
    "options": [
      "trajnime ose mentorim shtesë dhe një paralajmërim me shkrim në të cilin nëpunësi administrativ paralajmërohet për mundësinë e vlerësimit me vlerësim negativ nëse, nëse krahas sugjerimeve dhe masave të propozuara, deri në fund të vitit për të cilin bëhet vlerësimi, nuk e përmirëson efektin e tij",
      "fillimin e procedurës disiplinore dhe shqiptimin e pezullimit dhe vërejtjes verbale për mundësinë e vlerësimit me vlerësim negativ nëse, me gjithë treguesit dhe masat e propozuara, deri në fund të vitit për të cilin kryhet vlerësimi, nuk përmirëson efektin e tij",
      "udhëzim për arsimim plotësues, pa paralajmërim me shkrim dhe paralajmërim verbal për mundësinë e vlerësimit me vlerësim negativ, nëse krahas sugjerimeve dhe masave të propozuara, deri në fund të vitit për të cilin bëhet vlerësimi, nuk e përmirëson efektin e tij"
    ],
    "answerIndex": 0
  },
  {
    "id": 470,
    "num": 469,
    "page": 72,
    "question": "Kur në raportin e intervistës gjashtëmujore konstatohet se nëpunësi administrativ ka treguar rezultate të pakënaqshme, i shqiptohet:",
    "options": [
      "gjobë në masën 20% të rrogës mesatare të paguar në vitin paraardhës",
      "vendim për ndërprerjen e marrëdhënies së punës",
      "paralajmërim me shkrim në të cilin nëpunësi administrativ paralajmërohet për mundësinë e vlerësimit me vlerësim negativ nëse, nëse krahas sugjerimeve dhe masave të propozuara, deri në fund të vitit për të cilin bëhet vlerësimi, nuk e përmirëson efektin dhe detyrimin e tij, për trajnime dhe mentorime shtesë"
    ],
    "answerIndex": 2
  },
  {
    "id": 471,
    "num": 470,
    "page": 73,
    "question": "Vlerësimi i nëpunësve administrativë kryhet:",
    "options": [
      "me marrëveshje",
      "herë pas here",
      "detyrimisht"
    ],
    "answerIndex": 2
  },
  {
    "id": 472,
    "num": 471,
    "page": 73,
    "question": "Vlerësimi i nëpunësve administrativë kryhet detyrimisht nga nëpunësi administrativ përgjegjës i drejtpërdrejtë:",
    "options": [
      "çdo tre muaj",
      "një herë në vit",
      "dy herë gjatë vitit"
    ],
    "answerIndex": 1
  },
  {
    "id": 473,
    "num": 472,
    "page": 73,
    "question": "Vlerësimi vjetor i nëpunësit administrativ merret në bazë të vlerësimeve të:",
    "options": [
      "drejtuesi i institucionit",
      "nëpunësit administrativ përgjegjës, të katër nëpunësve të tjerë administrativë në institucion dhe dy vlerësuesve që nuk janë të punësuar në institucion, me të cilët nëpunësi administrativ ka bashkëpunim të drejtpërdrejtë",
      "nëpunësit administrativ përgjegjës, dhe dy nëpunësve të tjerë administrativë në institucion, me të cilët nëpunësi administrativ ka bashkëpunim të drejtpërdrejtë"
    ],
    "answerIndex": 1
  },
  {
    "id": 474,
    "num": 473,
    "page": 73,
    "question": "Vlerësimi vjetor i nëpunësit administrativ bëhet në bazë të:",
    "options": [
      "nota e nëpunësit administrativ përgjegjës, pra vlerësuesi që merr pjesë me 65%, dhe nota e sekretarit, përkatësisht drejtuesit të institucionit në të cilat nuk emërohet sekretar, që merr pjesë me 35%.",
      "nota e sekretarit, pra drejtuesit në institucionet në të cilat nuk emërohet sekretar, që merr pjesë me 65%, dhe nota e ministrit të Shoqërisë Informatike dhe të Administratës, që merr pjesë me 35%.",
      "notës së nëpunësit administrativ përgjegjës, përkatësisht, vlerësuesit që merr pjesë me 65%, si dhe nota mesatare e katër nëpunësve të tjerë administrativë me të cilët nëpunësi administrativ ka punuar drejtpërdrejt, dy në një nivel më të ulët dhe dy në të njëjtin nivel, si dhe dy vlerësues që nuk janë punonjës të institucionit, me të cilët nëpunësi administrativ ka bashkëpunim të drejtpërdrejtë, i cili merr pjesë me 35%"
    ],
    "answerIndex": 2
  },
  {
    "id": 475,
    "num": 474,
    "page": 73,
    "question": "Kundër procedurës së vlerësimit, kandidati i pakënaqur ka të drejtë të paraqesë ankesë brenda tetë ditëve në:",
    "options": [
      "Inspektoratin Shtetëror të Punës",
      "Inspektoratin Administrativ Shtetëror",
      "Agjencinë e Administratës, përkatësisht tek organi kompetent në pajtim me Ligjin e Nëpunësve Administrativë"
    ],
    "answerIndex": 2
  },
  {
    "id": 476,
    "num": 475,
    "page": 73,
    "question": "Vlerësimi i nëpunësit administrativ, i cili gjatë vitit për të cilin bëhet vlerësimi, nëpërmjet procedurës së mobilitetit është caktuar, apo që ka kaluar në një vend pune tjetër, bëhet nga:",
    "options": [
      "Komisioni i vlerësimit",
      "vlerësuesi i mëparshëm",
      "i riu, bazuar në një raport me shkrim nga vlerësuesi i mëparshëm"
    ],
    "answerIndex": 2
  },
  {
    "id": 477,
    "num": 476,
    "page": 74,
    "question": "Vlerësimi vjetor i nëpunësit administrativ mund të jetë: \"A\" - nëse ka vlerësim nga 4.51 deri në 5.00; \"B\" - nëse ka vlerësim nga 3.51 deri në 4.50; \"C\" - nëse ka një vlerësim nga 2.51 në 3.50; \"D\" - nëse ka një vlerësim nga 1.51 në 2.50 dhe \"E\" - nëse ka një vlerësim nga 1.00 në 1.50",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 478,
    "num": 477,
    "page": 74,
    "question": "Nëpunësit administrativë, përveç atyre që janë të përjashtuar me Kodin zgjedhor, janë të obliguar të marrin pjesë në punën e organeve në të cilat janë zgjedhur për organizimin dhe zbatimin e procedurës zgjedhore, përkatësisht regjistrimit të popullsisë në Republikën e Maqedonisë",
    "options": [
      "saktë",
      "pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 479,
    "num": 478,
    "page": 74,
    "question": "Nëpunësi administrativ është personalisht përgjegjës për kryerjen e punëve dhe detyrave të punës në vendin e punës",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 480,
    "num": 479,
    "page": 74,
    "question": "Nëpunësi administrativ përgjigjet me masë disiplinore nëse bën shkelje në detyrën e tij zyrtare",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 481,
    "num": 480,
    "page": 74,
    "question": "Përgjegjësia për një vepër të kryer penale, pra një kundërvajtje, nuk e përjashton përgjegjësinë disiplinore",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 482,
    "num": 481,
    "page": 74,
    "question": "Parregullsi disiplinore si lloj përgjegjësie disiplinore e nëpunësit administrativ nënkupton shkelje të lehtë të disiplinës së punës, të detyrave të punës, të reputacionit të institucionit ose reputacionit të nëpunësit administrativ:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 483,
    "num": 482,
    "page": 74,
    "question": "Kundërvajtja disiplinore si lloj i përgjegjësisë disiplinore të nëpunësit administrativ nënkupton shkelje më të rëndë të detyrës zyrtare, të disiplinës së punës, të reputacionit të institucionit ose reputacionit të nëpunësit administrativ:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 484,
    "num": 483,
    "page": 75,
    "question": "Zotërimi i paligjshëm i mjeteve materiale dhe financiare nga nëpunësi administrativ përbën:",
    "options": [
      "shkelje disiplinore",
      "kundërvajtje disiplinore",
      "parregullsi disiplinore"
    ],
    "answerIndex": 0
  },
  {
    "id": 485,
    "num": 484,
    "page": 75,
    "question": "Nëse nëpunësi administrativ nuk vjen në punë për dy ditë pune gjatë një viti kalendarik pa arsyetim, ai kryen:",
    "options": [
      "kundërvajtje disiplinore",
      "parregullsi disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 486,
    "num": 485,
    "page": 75,
    "question": "Nëse nëpunësi administrativ keqpërdor të dhëna personale ose konfidenciale, ai kryen:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 487,
    "num": 486,
    "page": 75,
    "question": "Nëse nëpunësi administrativ refuzon të shkojë në formimin dhe përmirësimin profesional atje ku e dërgon  institucioni ku punon, ai kryen:",
    "options": [
      "kundërvajtje disiplinore",
      "parregullsi disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 488,
    "num": 487,
    "page": 75,
    "question": "Nëse nëpunësi administrativ shpreh dhe përfaqëson besim politik në kryerjen e detyrave të punës, merr pjesë në aktivitete zgjedhore ose në dalje të tjera publike të kësaj natyre gjatë orarit të punës, ose vë në dyshim statusin e tij si nëpunës administrativ duke kryer veprimtari partiake, duke mbajtur ose ekspozuar simbole partiake në hapësirën e punës, kryen:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 489,
    "num": 488,
    "page": 75,
    "question": "Refuzimi i dhënies, ose dhënia institucioneve të dhëna të pasakta, qytetarëve ose personave juridikë, në rastet kur dhënia e të dhënave përcaktohet me ligj, për nëpunësin administrativ është:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 490,
    "num": 489,
    "page": 75,
    "question": "Përsëritja e parregullsisë disiplinore më shumë herë përbën kundërvajtje disiplinore:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 491,
    "num": 490,
    "page": 75,
    "question": "Shpërdorimi i pushimit mjekësor nga një nëpunës administrativ përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 492,
    "num": 491,
    "page": 76,
    "question": "Futja dhe përdorimi i alkoolit në ambientet e punës, ose puna nën ndikimin e alkoolit ose të narkotikëve nga një nëpunës administrativ përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 493,
    "num": 492,
    "page": 76,
    "question": "Nëse nëpunësi administrativ nuk i përmbahet rregullores për mbrojtjen nga sëmundjet, siguria dhe shëndeti gjatë punës, si dhe rregullores për mbrojtjen e mjedisit jetësor, kjo përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 494,
    "num": 493,
    "page": 76,
    "question": "Nëse nëpunësi administrativ vendos interesin e tij financiar personal në kundërshtim me pozitën dhe statusin e nëpunësit administrativ, kjo përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 495,
    "num": 494,
    "page": 76,
    "question": "Nëse nëpunësi administrativ, si anëtar i një organi zgjedhor, përfshihet në pengimin e zgjedhjeve dhe të votimit, cenon të drejtën zgjedhore të zgjedhësve, kufizon lirinë e zgjedhjes së zgjedhësve, blen gjatë zgjedhjeve, cenon fshehtësinë e votimit, shkatërron dokumentet zgjedhore ose kryen mashtrime zgjedhore, ai përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 496,
    "num": 495,
    "page": 76,
    "question": "Pranimi i dhuratave ose një lloj tjetër përfitimi nga një nëpunës administrativ përbën:",
    "options": [
      "parregullsi disiplinore",
      "kundërvajtje disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 497,
    "num": 496,
    "page": 76,
    "question": "Nëse nëpunësi administrativ në mënyrë të paarsyeshme nuk njofton menjëherë nëpunësin administrativ përgjegjës, sekretarin, përkatësisht titullarin e institucionit në të cilin nuk emërohet sekretar, për arsyen e mosardhjes në punë brenda tre orëve, kjo përbën:",
    "options": [
      "kundërvajtje disiplinore",
      "parregullsi disiplinore"
    ],
    "answerIndex": 1
  },
  {
    "id": 498,
    "num": 497,
    "page": 76,
    "question": "Me vendim për parregullsi të konstatuar disiplinore, nëpunësit administrativ mund t'i shqiptohet një nga masat disiplinore të mëposhtme: vërejtje me shkrim ose gjobë në masë 20% të shumës njëmujore të rrogës neto të paguar në muajin e fundit para parregullsisë disiplinore, për një periudhë prej një deri në tre muaj",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 499,
    "num": 498,
    "page": 77,
    "question": "Me vendim për kundërvajtje të konstatuar disiplinore, nëpunësit administrativ mund t'i shqiptohet një nga masat disiplinore të mëposhtme: gjobë në masën 30% të shumës së rrogës neto të paguar në muajin e fundit para parregullsisë disiplinore, në kohëzgjatje nga një deri në gjashtë muaj; caktimi në një pozicion në një nivel drejtpërdrejt më të ulët, dhe ndërprerja e marrëdhënies së punës, kur kanë ndodhur pasoja të dëmshme për institucionin, ndërkaq nuk janë konstatuar rrethana lehtësuese për nëpunësin administrativ që ka kryer kundërvajtjen.",
    "options": [
      "saktë",
      "pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 500,
    "num": 499,
    "page": 77,
    "question": "Masa disiplinore ndaj nëpunësit administrativ që ka kryer parregullsi disiplinore shqiptohet nga:",
    "options": [
      "Komisioni për konstatimin e përgjegjësisë disiplinore",
      "Agjencia e Administratës",
      "sekretari, përkatësisht drejtuesi i institucionit në të cilin nuk emërohet sekretar"
    ],
    "answerIndex": 2
  },
  {
    "id": 501,
    "num": 500,
    "page": 77,
    "question": "Kundër vendimit të marrë për masë disiplinore për parregullsi disiplinore, përkatësisht për kundërvajtje disiplinore, nëpunësi administrativ ka të drejtë ankese",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 502,
    "num": 501,
    "page": 77,
    "question": "Mënyra e zhvillimit të procedurës disiplinore dhe formulari për votimin e fshehtë të anëtarëve të komisionit disiplinor përcaktohet nga:",
    "options": [
      "Ministri i Shoqërisë Informatike dhe i Administratës",
      "Komisioni për konstatimin e përgjegjësisë disiplinore",
      "sekretari, përkatësisht drejtuesi i institucionit në të cilin nuk emërohet sekretar"
    ],
    "answerIndex": 0
  },
  {
    "id": 503,
    "num": 502,
    "page": 77,
    "question": "Një nismë për fillimin e procedurës disiplinore kundër nëpunësit administrativ, me arsyetimin e duhur, ka të drejtë të dorëzojë:",
    "options": [
      "Kryetari i Komisionit për konstatimin e përgjegjësisë disiplinore",
      "drejtuesi i institucionit në të cilin nuk emërohet sekretar",
      "çdo nëpunës administrativ dhe person tjetër, në përputhje me ligjin ose Komisioni Shtetëror të Zgjedhjeve dhe Enti Shtetëror i Statistikës"
    ],
    "answerIndex": 2
  },
  {
    "id": 504,
    "num": 503,
    "page": 77,
    "question": "Propozimi për fillimin e procedurës disiplinore kundër nëpunësit administrativ paraqitet nga:",
    "options": [
      "Kryetari i Komisionit për konstatimin e përgjegjësisë disiplinore",
      "përgjegjësi i njësisë organizative për menaxhimin e burimeve njerëzore në institucion",
      "nëpunësi administrativ përgjegjës, si dhe sekretari, përkatësisht drejtuesi i institucionit në të cilin nuk emërohet sekretar"
    ],
    "answerIndex": 2
  },
  {
    "id": 505,
    "num": 504,
    "page": 78,
    "question": "Nëse shkelja e detyrës zyrtare sjell edhe përgjegjësi penale, procedura disiplinore për përcaktimin e përgjegjësisë së nëpunësit administrativ parashkruhet brenda:",
    "options": [
      "një vjet nga dita e informimit për shkeljen",
      "dy vjetësh nga dita e informimit për shkeljen",
      "tre vjet nga dita e informimit për shkeljen"
    ],
    "answerIndex": 1
  },
  {
    "id": 506,
    "num": 505,
    "page": 78,
    "question": "Ndalesa nga rroga, në emër të gjobave të shqiptuara për nëpunësin administrativ për parregullsi disiplinore ose kundërvajtje disiplinore të kryera, gjatë një muaji, nuk mund të kalojë shumën prej:",
    "options": [
      "60% të shumës së rrogës  neto për atë muaj",
      "një të tretës së shumës së rrogës neto për atë muaj",
      "gjysmën e shumës së rrogës neto për atë muaj"
    ],
    "answerIndex": 1
  },
  {
    "id": 507,
    "num": 506,
    "page": 78,
    "question": "Procedura për konstatimin e përgjegjësisë materiale të nëpunësit administrativ, duke filluar nga dita e miratimit të vendimit për formimin e komisionit për konstatimin e përgjegjësisë materiale, nuk mund të zhvillohet më gjatë se:",
    "options": [
      "60 ditë",
      "45 ditë",
      "30 ditë"
    ],
    "answerIndex": 0
  },
  {
    "id": 508,
    "num": 507,
    "page": 78,
    "question": "Nëse nëpunësi administrativ në punë ose në lidhje me punën, me dashje ose nga pakujdesia e madhe i shkakton dëm institucionit, si dhe nëse me procedurë përkatëse vërtetohet se është përgjegjës për dëmin e shkaktuar, dëmi kompensohet nga:",
    "options": [
      "nëpunësi administrativ personalisht",
      "fondi për kompensime të dëmeve të themeluar në baza solidare",
      "njësia/sektori ku është i punësuar nëpunësi administrativ"
    ],
    "answerIndex": 0
  },
  {
    "id": 509,
    "num": 508,
    "page": 78,
    "question": "Nëse nëpunësi administrativ gjatë kryerjes së punëve dhe detyrave, u shkakton dëm material palëve të tretëve, institucioni është i detyruar të kompensojë dëmin material të shkaktuar.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 510,
    "num": 509,
    "page": 78,
    "question": "Rrogat dhe kompensimet e rrogave të nëpunësve administrativë sigurohen nga:",
    "options": [
      "me vetëfinancim dhe marrëdhëniet debitore-kreditore të institucionit",
      "donacione dhe ndihma ndërkombëtare",
      "Buxheti i Republikës së Maqedonisë, buxhetet e njësive të vetëqeverisjes lokale, si dhe nga burimet e tjera të mjeteve të përcaktuara me ligj"
    ],
    "answerIndex": 2
  },
  {
    "id": 511,
    "num": 510,
    "page": 79,
    "question": "Rrogat e nëpunësve administrativë:",
    "options": [
      "llogariten në shumën bruto dhe paguhen me para në dorë",
      "llogariten dhe paguhen si shumë e mëditjeve për muajin e mëparshëm",
      "llogariten në shumën bruto, ndërsa paguhen në shumën monetare neto një herë në muaj në muajin aktual për muajin e mëparshëm"
    ],
    "answerIndex": 2
  },
  {
    "id": 512,
    "num": 511,
    "page": 79,
    "question": "Rroga e nëpunësit administrativ përbëhet nga:",
    "options": [
      "rroga sipas rezultatit dhe bonusi",
      "rroga sipas rezultatit dhe kompensimi për rregullsinë",
      "komponenti bazë dhe komponenti i veçantë"
    ],
    "answerIndex": 2
  },
  {
    "id": 513,
    "num": 512,
    "page": 79,
    "question": "Komponentin themelor të pagës së nëpunësit administrativ e përbëjnë: paga minimale, pjesë e pagës për shkallën e arsimit, pjesë e pagës për nivelin dhe pjesë e pagës për stazhin:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 514,
    "num": 513,
    "page": 79,
    "question": "Pjesa e rrogës për shkallën e arsimit dhe pjesa e rrogës për nivelin, dhe pjesa e rrogës për stazhin e nëpunësve administrativë vlerësohen me:",
    "options": [
      "indekse",
      "pika",
      "përqindje"
    ],
    "answerIndex": 1
  },
  {
    "id": 515,
    "num": 514,
    "page": 79,
    "question": "Pjesa e rrogës për stazhin e punës së nëpunësit administrativ vlerësohet në shumën prej:",
    "options": [
      "20% e pjesës së rrogës për arsimin profesional dhe nivelin",
      "0,5% e pjesëve të rrogës për shkallën e arsimit dhe për nivelin, për çdo vit të kryer stazh pune, dhe deri në maksimum 20%",
      "0,5% e dallimit ndërmjet pjesëve të rrogës për shkallën e arsimit dhe për nivelin, për çdo vit të kryer stazh pune"
    ],
    "answerIndex": 1
  },
  {
    "id": 516,
    "num": 515,
    "page": 79,
    "question": "Komponenti i veçantë i rrogës së nëpunësve administrativë përbëhet nga: shtesa e rrogës për kushte të veçanta pune, shtesa e rrogës për shkak të përshtatjes me tregun e punës dhe/ose shtesa e rrogës për punë natën, me turne dhe punë jashtë orarit:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 517,
    "num": 516,
    "page": 79,
    "question": "Gjatë grevës, nëse plotësohen të gjitha kushtet ligjore, nëpunësi administrativ ka të drejtën e rrogës deri në masën:",
    "options": [
      "60% të rrogës që ka marrë muajin e kaluar",
      "50% të rrogës që ka marrë muajin e kaluar",
      "40% të rrogës që ka marrë muajin e kaluar"
    ],
    "answerIndex": 0
  },
  {
    "id": 518,
    "num": 517,
    "page": 80,
    "question": "Punonjësit administrativ i ndërpritet marrëdhënia e punës: me marrëveshje, me kërkesën e tij, me fuqi të ligjit dhe në raste të tjera të përcaktuara me Ligjin e Nëpunësve Administrativë dhe ligjet tjera dhe marrëveshjet kolektive",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 519,
    "num": 518,
    "page": 80,
    "question": "Nëse nëpunësit administrativ i pushon shtetësia e Republikës së Maqedonisë, punësimi i tij do të pushojë me forcën e ligjit me datën e dorëzimit të vendimit për heqjen nga shtetësia e Republikës së Maqedonisë",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 520,
    "num": 519,
    "page": 80,
    "question": "Nëse nëpunësi administrativ dënohet për një vepër penale që lidhet me detyrën zyrtare, punësimi i tij ndërpritet me ligj në ditën e plotfuqishmërisë së aktgjykimit",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 521,
    "num": 520,
    "page": 80,
    "question": "Nëpunësit administrativ i ndërpritet marrëdhënia e punës me fuqinë e ligjit për shkak të vuajtjes së dënimit me burg më të gjatë se gjashtë muaj, me ditën e fillimit të vuajtjes së dënimit",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 522,
    "num": 521,
    "page": 80,
    "question": "Nëpunësit administrativ i ndërpritet marrëdhënia e punës me fuqinë e ligjit, nëse mungon pa arsye nga puna për të paktën tri ditë pune të njëpasnjëshme brenda muajit.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 523,
    "num": 522,
    "page": 80,
    "question": "Nëpunësit administrativ i ndërpritet marrëdhënia e punës me ligj, nëse organi i administratës shtetërore përgjegjës për inspektim, brenda një viti konstaton se punonjësi është punësuar në kundërshtim me dispozitat e Ligjit të Nëpunësve Administrativë.",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 524,
    "num": 523,
    "page": 80,
    "question": "Mbikëqyrjen inspektuese mbi zbatimin e dispozitave të Ligjit të Nëpunësve Administrativë dhe të rregulloreve të miratuara në bazë të këtij ligji, e kryejnë:",
    "options": [
      "Agjencia e Administratës",
      "Inspektorati Administrativ Shtetëror",
      "Inspektorati Shtetëror i Punës"
    ],
    "answerIndex": 1
  },
  {
    "id": 525,
    "num": 524,
    "page": 81,
    "question": "Forma dhe përmbajtja e konkursit të brendshëm, mënyra e dorëzimit të fletëparaqitjes për avancimin, mënyra e kryerjes së përzgjedhjes administrative dhe e intervistës, si dhe mënyra e pikëzimit të tyre dhe numri maksimal i pikëve nga procedura e përzgjedhjes, në varësi të kategorisës së vendit të punës, për të cilën shpallet konkursi publik, i përshkruan:",
    "options": [
      "drejtori i Agjencisë së Administratës",
      "Komisioni i përzgjedhjes dhe i avancimit",
      "Ministri i Shoqërisë Informatike dhe i Administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 526,
    "num": 525,
    "page": 81,
    "question": "Provimi i menaxhimit administrativ organizohet dhe zhvillohet nga:",
    "options": [
      "Agjencia e Administratës në bashkëpunim me Ministrinë e Arsimit dhe të Shkencës",
      "Agjencia e Administratës në bashkëpunim me institucionet",
      "Agjencia e Administratës në bashkëpunim me Ministrinë e Shoqërisë Informatike dhe të Administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 527,
    "num": 526,
    "page": 81,
    "question": "Drejtori i Agjencisë së Administratës emërohet për një periudhë prej:",
    "options": [
      "katër vjetësh",
      "pesë vjetësh",
      "gjashtë vjetësh"
    ],
    "answerIndex": 2
  },
  {
    "id": 528,
    "num": 527,
    "page": 81,
    "question": "Të drejtat dhe detyrimet e ndërsjella të institucionit dhe nëpunësit administrativ, që dërgohet në trajnime të specializuara për nevojat e institucionit rregullohen me...",
    "options": [
      "një marrëveshje me shkrim që specifikon datën e saktë deri në të cilën nëpunësi administrativ nuk mund të kërkojë ndërprerjen e marrëdhënies së punës, si dhe përgjegjësinë e tij materiale në përpjesëtim me fondet e shpenzuara për realizimin e trajnimit, nëse për fajin e tij ose me kërkesën e tij marrëdhëniet e punës i ndërpritet përpara datës së caktuar",
      "një urdhër me shkrim që specifikon datën e saktë në të cilën nëpunësi administrativ nuk mund të kërkojë ndërprerjen e marrëdhënies së punës, si dhe përgjegjësinë e tij materiale në përpjesëtim me fondet e shpenzuara për realizimin e trajnimit, nëse për fajin e tij ose me kërkesën e tij, marrëdhënia e punës ndërpritet përpara datës së caktuar",
      "aktvendim që specifikon datën e saktë deri në të cilën nëpunësi administrativ nuk mund të kërkojë ndërprerjen e marrëdhënies së punës, si dhe përgjegjësinë e tij materiale në përpjesëtim me mjetet e shpenzuara për realizimin e trajnimit, nëse për fajin e tij ose me kërkesën e tij marrëdhënia e punës i ndërpritet përpara datës së caktuar"
    ],
    "answerIndex": 1
  },
  {
    "id": 529,
    "num": 528,
    "page": 81,
    "question": "Mentorimi si një metodë e transferimit të njohurive dhe të aftësive ndërmjet nëpunësve administrativë mund të jetë:",
    "options": [
      "me shkrim ose verbalisht",
      "këshillues ose praktik",
      "organizuar në formë trajnimi nga pedagogë të jashtëm"
    ],
    "answerIndex": 1
  },
  {
    "id": 530,
    "num": 529,
    "page": 81,
    "question": "Ministria e Sistemit Politik dhe e Marrëdhënieve ndërmjet Bashkësive jep pëlqimin me rastin e miratimit të planit vjetor të punësimit për:",
    "options": [
      "institucionet në sektorin publik",
      "organet e administratës shtetërore",
      "organet e pushtetit shtetëror dhe lokal"
    ],
    "answerIndex": 1
  },
  {
    "id": 531,
    "num": 530,
    "page": 82,
    "question": "Procedura e përzgjedhjes për punësimin e një nëpunësi administrativ përbëhet nga:",
    "options": [
      "dy faza",
      "tri faza",
      "katër faza"
    ],
    "answerIndex": 1
  },
  {
    "id": 532,
    "num": 531,
    "page": 82,
    "question": "Gjatë procedurës së avancimit, respektohet parimi i përfaqësimit të duhur dhe të drejtë:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 533,
    "num": 532,
    "page": 82,
    "question": "Programi vjetor i trajnimeve gjenerike për nëpunësit administrativë miratohet nga:",
    "options": [
      "drejtori i Agjencisë së Administratës",
      "Ministri i Shoqërisë Informatike dhe i Administratës",
      "sekretari, përkatësisht drejtuesi i institucionit në të cilin nuk emërohet sekretar"
    ],
    "answerIndex": 1
  },
  {
    "id": 534,
    "num": 533,
    "page": 82,
    "question": "Mentorimi praktik realizohet nëpërmjet:",
    "options": [
      "vizita në trajnime",
      "vëzhgimit të punës së nëpunësit administrativ të mentoruar, konsultimeve të vazhdueshme e punës praktike, si dhe kryhet me qëllim të zhvillimit të kompetencave të veçanta të punonjësit.",
      "nëpërmjet këshillave specifike të mentorit, si dhe kryhet me qëllim të zhvillimit të kompetencave të përgjithshme të punonjësit"
    ],
    "answerIndex": 1
  },
  {
    "id": 535,
    "num": 534,
    "page": 82,
    "question": "Në planin individual që përgatitet për zhvillimin profesional të nëpunësit administrativ, përcaktohet:",
    "options": [
      "plani për dhënien e provimeve profesionale në vitin kalendarik",
      "nevoja për zhvillim profesional të nëpunësit administrativ për të kryer me efikasitet qëllimet dhe detyrat e përcaktuara të punës, si dhe nevoja për zhvillimin dhe avancimin e kompetencave të punës",
      "nevoja për arsimim profesional shtesë për të kryer me efikasitet qëllimet dhe detyrat e përcaktuara të punës, si dhe nevoja për zhvillimin dhe avancimin e kompetencave të punës"
    ],
    "answerIndex": 1
  },
  {
    "id": 536,
    "num": 535,
    "page": 82,
    "question": "Intervista gjashtëmujore, në kuadër të procesit të monitorimit të vazhdueshëm të efektit të nëpunësit administrativ nga nëpunësi administrativ përgjegjës, realizohet:",
    "options": [
      "një herë në vjet",
      "dy herë gjatë vitit",
      "çdo gjashtë muaj"
    ],
    "answerIndex": 0
  },
  {
    "id": 537,
    "num": 536,
    "page": 83,
    "question": "Puna e nëpunësit administrativ, për sa i përket cilësisë, efektivitetit dhe efikasitetit të punës, respektimit të afateve dhe nivelit të përmbushjes së qëllimeve dhe të detyrave të përcaktuara të punës, nivelit të përfshirjes dhe të përkushtimit në punë, kontributit për realizimin e planit strategjik për zhvillim profesional dhe sjelljen e nëpunësit administrativ, duke pasur parasysh raportin nga intervista gjashtëmujore, mund të vlerësohet nga vlerësuesi:",
    "options": [
      "me notën \"6\", \"7\", \"8\", \"9\" ose \"10\"",
      "me notën \"1\", \"2\", \"3\", \"4\" ose \"5\"",
      "me vlerësim \"dallohet veçanërisht \", \"dallohet\", \"i përmbush\", \"pjesërisht i përmbush\" ose \"nuk i përmbush\""
    ],
    "answerIndex": 1
  },
  {
    "id": 538,
    "num": 537,
    "page": 83,
    "question": "Procedura e përzgjedhjes për punësimin e një nëpunësi administrativ përbëhet nga tri faza:",
    "options": [
      "verifikimi i dëshmive të paraqitura, testi me shkrim, provimi me gojë dhe intervista.",
      "përzgjedhja administrative, provimi profesional dhe intervista.",
      "përzgjedhja administrative, testi për nëpunës administrativ, verifikimi i besueshmërisë së dëshmive të paraqitura dhe intervistimi."
    ],
    "answerIndex": 2
  },
  {
    "id": 539,
    "num": 538,
    "page": 83,
    "question": "Provimi i nëpunësit administrativ përbëhet nga dy pjesë:",
    "options": [
      "pjesa e përgjithshme dhe praktike",
      "pjesa e përgjithshme dhe e veçantë",
      "pjesa profesionale dhe pjesa e kontrollimit të njohurive të njërit nga tri gjuhët më të përdorura në BE (anglisht, frëngjisht, gjermanisht)"
    ],
    "answerIndex": 2
  },
  {
    "id": 540,
    "num": 539,
    "page": 83,
    "question": "Avancimi i nëpunësve administrativë bëhet nëpërmjet shpalljes së:",
    "options": [
      "konkursit të brendshëm në ueb faqen e institucionit dhe të Agjencisë së Administratës.",
      "njoftim në ueb faqen e Agjencisë së Administratës",
      "konkursit publik në të paktën tri gazeta ditore, të cilat botohen në gjuhën që e flasin së paku 20% e qytetarëve që flasin gjuhë zyrtare të ndryshme nga gjuha maqedonase."
    ],
    "answerIndex": 0
  },
  {
    "id": 541,
    "num": 540,
    "page": 83,
    "question": "Një nëpunës administrativ, që paraqitet në konkurs të brendshëm duhet t'i plotësojë kushtet e mëposhtme:",
    "options": [
      "të jetë i punësuar në institucionin që shpall konkursin e brendshëm, të plotësojë kushtet e përgjithshme dhe të veçanta për plotësimin e pozitës që i atribuohet nivelit përkatës në Ligjin e Nëpunësve Administrativë dhe në aktin e sistematizimit, të ketë notën \"A\" ose \"B\", në vlerësimin e fundit dhe të ketë dhe të jetë në vend pune në një pozicion të një niveli menjëherë më të ulët ose të jetë në vend pune brenda të njëjtës kategori në të cilën është vendi i punës, për të cilin është shpallur konkurs i brendshëm, për të paktën dy vjet, dhe të mos i jetë shqiptuar masa disiplinore në vitin e fundit para shpalljes së konkursit të brendshëm.",
      "të jetë i punësuar në një institucion të sektorit publik, të plotësojë kushtet e përgjithshme dhe të veçanta për plotësimin e pozicionit, të jetë në një vend pune menjëherë më të ulët se vendi i punës, për të cilin është shpallur konkursi i brendshëm, kjo të paktën një vit dhe të mos i jetë shqiptuar masa disiplinore në vitin e fundit para publikimit të shpalljes së brendshme",
      "të jetë i punësuar në një institucion nga sektori privat ose publik, të plotësojë kushtet e përgjithshme dhe të veçanta që i atribuohen nivelit përkatës në Ligjin e Nëpunësve Administrativë dhe në aktin e sistematizimit, të jetë vlerësuar me notën \"dallohet veçanërisht\" ose “dallohet”, në vlerësimin më të fundit dhe të jetë në një vend pune të nivelit më të ulët se vendi i punës, për të cilin është shpallur konkursi i brendshëm."
    ],
    "answerIndex": 0
  },
  {
    "id": 542,
    "num": 541,
    "page": 84,
    "question": "Nëpunësi administrativ që vlerësohet me notën vjetore \"A\" i jepet:",
    "options": [
      "me fuqinë e ligjit avancohet një shkallë më lart",
      "shtesë e rrogës për karrierë",
      "kompensim për suksesin në punë, në masën e rrogës së marrë në muajin e fundit të vitit për të cilin është bërë vlerësimi."
    ],
    "answerIndex": 2
  },
  {
    "id": 543,
    "num": 542,
    "page": 84,
    "question": "Nëpunësi administrativ që vlerësohet me notën vjetore \"A\", i jepet kompensim për suksesin në punë në masën e rrogës së marrë në muajin e fundit të vitit, për të cilin është kryer vlerësimi, nëse:",
    "options": [
      "përgjegjësi i drejtpërdrejtë merr vendim për këtë.",
      "në buxhetin e institucionit parashikohen mjete për këtë qëllim, dhe për këtë vendos sekretari, përkatësisht titullari i institucionit, me propozimin përgjegjësit.",
      "në buxhetin e institucionit parashikohen mjete për këtë qëllim, pavarësisht se kush e merr vendimin për pagesën e kompensimit."
    ],
    "answerIndex": 1
  },
  {
    "id": 544,
    "num": 543,
    "page": 84,
    "question": "Nëse nëpunësi administrativ vlerësohet me notën \"D\", i ndërpritet marrëdhënia e punës:",
    "options": [
      "nëse në pesë vitet e fundit, të paktën dy herë, ka marrë notën \"D\".",
      "nëse vlerësohet një herë me notën “D”.",
      "nëse është vlerësuar me notën \"D\" dy herë radhazi ose të paktën tri herë në pesë vitet e fundit."
    ],
    "answerIndex": 2
  },
  {
    "id": 545,
    "num": 544,
    "page": 84,
    "question": "Kodi i nëpunësve administrativë miratohet nga ministri i Shoqërisë Informatike dhe i Administratës:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 546,
    "num": 545,
    "page": 84,
    "question": "Kodi i nëpunësve administrativë përfaqëson:",
    "options": [
      "ligj për sjelljen e nëpunësve administrativë",
      "dekret për sjelljen e nëpunësve administrativë",
      "një sërë standardesh etike dhe rregullash sjelljeje për nëpunësit administrativë"
    ],
    "answerIndex": 2
  },
  {
    "id": 547,
    "num": 546,
    "page": 85,
    "question": "Qëllimi i Kodit të nëpunësve administrativë është të inkurajojë sjelljen e mirë dhe sjelljen e nëpunësve administrativë, dhe të forcojë besimin e qytetarëve në punën e institucioneve të sektorit publik:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 548,
    "num": 547,
    "page": 85,
    "question": "Interesin e cilit e përfaqëson dhe promovon nëpunësi administrativ në punën e tij:",
    "options": [
      "interesin personal",
      "interesin public",
      "interesin privat"
    ],
    "answerIndex": 1
  },
  {
    "id": 549,
    "num": 548,
    "page": 85,
    "question": "Nëpunësi Administrativ punon:",
    "options": [
      "në mënyrë të paligjshme, padrejtësisht dhe në mënyrë imorale",
      "ligjërisht, drejtësisht ose moralisht",
      "ligjërisht, padrejtësisht dhe pa respektuar rendin e lëndëve"
    ],
    "answerIndex": 1
  },
  {
    "id": 550,
    "num": 549,
    "page": 85,
    "question": "Punonjësi administrativ e kryen punën me përkushtim dhe profesionalizëm:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 551,
    "num": 550,
    "page": 85,
    "question": "A angazhohet nëpunësi administrativ, për përfshirjen e qytetarëve dhe të palëve të interesuara në procesin e politikëbërjes?",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 552,
    "num": 551,
    "page": 85,
    "question": "Nëpunësi administrativ në punën dhe sjelljen e tij respekton parimet e:",
    "options": [
      "njerëzisë dhe pabarazisë",
      "njerëzisë, barazisë dhe drejtësisë sociale",
      "barazisë, çnjerëzisë dhe drejtësisë sociale"
    ],
    "answerIndex": 1
  },
  {
    "id": 553,
    "num": 552,
    "page": 85,
    "question": "Nëpunësi administrativ në punën dhe sjelljen e tij vepron:",
    "options": [
      "me synimin për të arritur përfitime personale",
      "njëanshëm dhe subjektivisht",
      "i paanshëm, pa paragjykime dhe pa synimin për të arritur përfitime apo ambicie personale"
    ],
    "answerIndex": 2
  },
  {
    "id": 554,
    "num": 553,
    "page": 85,
    "question": "Puna dhe sjellja e nëpunësit administrativ mundëson realizimin e të drejtave të garantuara me Kushtetutë për barazi dhe mosdiskriminim, nëpërmjet:",
    "options": [
      "mospërfilljes së diversitetit",
      "shpërdorimit dhe diskriminimit",
      "krijimit të mundësive dhe të respektimit të diversitetit"
    ],
    "answerIndex": 2
  },
  {
    "id": 555,
    "num": 554,
    "page": 86,
    "question": "Përdoruesve të shërbimeve të administratës, nëpunësi administrativ u ofron standarde të barabarta në ofrimin e shërbimeve nëpërmjet:",
    "options": [
      "marrëdhënieve personale, miqësore dhe familjare",
      "marrëdhënies së drejtë dhe të barabartë",
      "marrëdhënieve subjektive dhe të njëanshme"
    ],
    "answerIndex": 1
  },
  {
    "id": 556,
    "num": 555,
    "page": 86,
    "question": "Nëpunësi administrativ u siguron të gjithë qytetarëve mbrojtje nga padrejtësia, shpërdorimi dhe diskriminimi, mbi çdo bazë:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 557,
    "num": 556,
    "page": 86,
    "question": "Nëpunësi administrativ, në bazë të kompetencave të tij të punës dhe të rregullave e procedurave të shërbimit, i kryen detyrat:",
    "options": [
      "kuturu dhe sipas udhëzimeve të marra",
      "me përkushtim dhe profesionalisht",
      "bazuar në urdhrat e përditshme nga përgjegjësi"
    ],
    "answerIndex": 2
  },
  {
    "id": 558,
    "num": 557,
    "page": 86,
    "question": "Nëpunësi administrativ kryen punën:",
    "options": [
      "duke respektuar prioritetet, me zvarritje dhe mosrespektim të renditjes së detyrave",
      "duke respektuar afatin për kryerjen e detyrave të punës, duke mos respektuar prioritetet dhe rendin e detyrave",
      "në mënyrë të pavarur dhe në kohë, duke i kushtuar vëmendje dhe duke respektuar prioritetet dhe rendin e detyrave"
    ],
    "answerIndex": 2
  },
  {
    "id": 559,
    "num": 558,
    "page": 86,
    "question": "Nëpunësi administrativ nuk e thekson, apo imponon përkatësinë e tij politike ndaj të tjerëve:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  },
  {
    "id": 560,
    "num": 559,
    "page": 86,
    "question": "Nëpunësi administrativ guxon të kryejë veprimtari politike, që mund ta cenojnë besimin e qytetarëve në administratë:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 561,
    "num": 560,
    "page": 86,
    "question": "Nëpunësi administrativ përdor atë që ka mësuar për:",
    "options": [
      "qëllime personale",
      "përmirësimin e punës së tij dhe zhvillimin e institucionit",
      "ngritjen e nivelit të njohurive të përgjithshme"
    ],
    "answerIndex": 1
  },
  {
    "id": 562,
    "num": 561,
    "page": 87,
    "question": "A e lehtëson nëpunësi administrativ qasjen në të dhënat që ka në punën e tij?",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 563,
    "num": 562,
    "page": 87,
    "question": "Nëpunësi administrativ kryen komunikim të mbyllur dhe periodik me qytetarët dhe personat juridikë:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 1
  },
  {
    "id": 564,
    "num": 563,
    "page": 87,
    "question": "Sipas Kodit të nëpunësve administrativë, nëpunësi administrativ a e respekton privatësinë dhe diskrecionin e kolegëve dhe bashkëpunëtorëve?",
    "options": [
      "po",
      "jo"
    ],
    "answerIndex": 0
  },
  {
    "id": 565,
    "num": 564,
    "page": 87,
    "question": "Bisedat zyrtare telefonike të nëpunësit administrativ janë...",
    "options": [
      "të përgjithshme dhe të detajuara",
      "të shkurtëra dhe të sakta",
      "të gjata dhe jo konstruktive"
    ],
    "answerIndex": 1
  },
  {
    "id": 566,
    "num": 565,
    "page": 87,
    "question": "Kur palët janë të pakënaqura me përgjigjen, nëpunësi administrativ...",
    "options": [
      "ia drejton Avokatit të Popullit të Republikës së Maqedonisë",
      "i këshillon që të nisin procedurë gjyqësore",
      "kërkon arbitrazh nga nëpunësi administrativ përgjegjës ose e përcjell dhe ia drejton atij mesazhin"
    ],
    "answerIndex": 2
  },
  {
    "id": 567,
    "num": 566,
    "page": 87,
    "question": "Nëpunësi administrativ, bisedat telefonike private a i bën në prani të palëve, ose kur palët presin një përgjigje, ose kur synojnë të bëjnë një pyetje?",
    "options": [
      "jo",
      "po",
      "po, nëse palët janë të njohura për nëpunësin administrative"
    ],
    "answerIndex": 0
  },
  {
    "id": 568,
    "num": 567,
    "page": 87,
    "question": "Në sjelljen dhe veprimet e tij jashtë punës, në prezantimin e ngjarjeve publike, në rrjetet sociale apo në çdo formë tjetër komunikimi, nëpunësi administrativ...:",
    "options": [
      "ai vepron në bazë të bindjes së tij",
      "është shembull i sjelljes së duhur dhe dinjitoze",
      "nuk kujdeset për dëmtimin e reputacionit dhe opinionin e publikut për administratën"
    ],
    "answerIndex": 1
  },
  {
    "id": 569,
    "num": 568,
    "page": 88,
    "question": "Në marrëdhëniet me kolegët, nëpunësi administrativ kultivon frymën dhe parimet e:",
    "options": [
      "diskriminimit, mosrespektimit dhe përfaqësimit të interesave personale",
      "punës individuale",
      "punës ekipore, respektit të ndërsjellë, respektit për diversitetin, solidaritetin dhe bashkëpunimin"
    ],
    "answerIndex": 2
  },
  {
    "id": 570,
    "num": 569,
    "page": 88,
    "question": "Nëpunësi administrativ në shërbim, në jetën private dhe në publik, sillet me dinjitet dhe nuk vepron në mënyrë që të cenojë:",
    "options": [
      "rendin publik në institucion",
      "reputacionin e familjes së tij",
      "reputacionin e tij personal, reputacionin e institucionit dhe të administratës në tërësi"
    ],
    "answerIndex": 2
  },
  {
    "id": 571,
    "num": 570,
    "page": 88,
    "question": "Nëpunësi administrativ përmbahet nga dhënia e deklaratav të dëmshme për shërbimin...:",
    "options": [
      "nëse për këtë nuk ka marrë pëlqim nga nëpunësi administrativ përgjegjës të drejtpërdrejtë",
      "nëse ka një interes të caktuar",
      "pa penguar ushtrimin e të drejtës për të ndërtuar qëndrimin dhe shprehjen e tij publike të mendimit"
    ],
    "answerIndex": 2
  },
  {
    "id": 572,
    "num": 571,
    "page": 88,
    "question": "Nëpunësi administrativ, ndaj burimeve që i janë dhënë në përdorim, si dhe në kryerjen e punës, sillet në mënyrë ekonomike dhe efikase, duke i shfrytëzuar burimet për:",
    "options": [
      "nevoja personale",
      "nevojat zyrtare",
      "për çdo nevojë"
    ],
    "answerIndex": 1
  },
  {
    "id": 573,
    "num": 572,
    "page": 88,
    "question": "A kujdeset nëpunësi administrativ për sigurinë e lëndëve dhe dokumenteve të besuara:",
    "options": [
      "po",
      "jo",
      "po, nëse i theksohet nga nëpunësi administrativ përgjegjës i drejtpërdrejtë"
    ],
    "answerIndex": 0
  },
  {
    "id": 574,
    "num": 573,
    "page": 88,
    "question": "Punonjësi administrativ i kushton vëmendje pamjes dhe mënyrës së veshjes, që të mos shkaktojë:",
    "options": [
      "komente nga kolegët dhe palët",
      "reagime negative",
      "përshtypjen e pahijshmërisë dhe dëmtimin e reputacionit të administratës"
    ],
    "answerIndex": 2
  },
  {
    "id": 575,
    "num": 574,
    "page": 88,
    "question": "Për mosrespektim të dispozitave të Kodit të nëpunësve administrativë, nëpunësi administrativ mban përgjegjësi:",
    "options": [
      "disiplinore",
      "kundërvajtëse"
    ],
    "answerIndex": 0
  },
  {
    "id": 576,
    "num": 575,
    "page": 89,
    "question": "Nëpunësi administrativ gjatë punësimit në shërbim firmos:",
    "options": [
      "betim",
      "pëlqim",
      "Deklaratën e pranimit të Deklaratës për misionin e përbashkët të punonjësve në sektorin publik"
    ],
    "answerIndex": 2
  },
  {
    "id": 577,
    "num": 576,
    "page": 89,
    "question": "Vlerat dhe normat e përfshira në Kodin e nëpunësve administrativë janë në formë:",
    "options": [
      "dispozita ligjore",
      "deklarata të pëlqimit",
      "standarde dhe rregulla etike"
    ],
    "answerIndex": 2
  },
  {
    "id": 578,
    "num": 577,
    "page": 89,
    "question": "Nëpunësi administrativ sillet me përgjegjësi dhe punon për të ndërtuar dhe ruajtur të mirën e përbashkët, rritjen dhe vlerat sociale, duke krijuar kushte për zhvillim të qëndrueshëm njerëzor dhe social:",
    "options": [
      "e saktë",
      "e pasaktë"
    ],
    "answerIndex": 0
  }
];
