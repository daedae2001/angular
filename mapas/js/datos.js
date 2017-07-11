
var especialidades = [ 
    [1, 'Centro de Rehab.'],
    [2, 'Fisiatria'],
    [3, 'Fonoaudiologia'],
    [4, 'Integracion Escolar'],
    [5, 'Kinesiologia'],
    [6, 'Neurologia'],
    [7, 'Prof. Edu. Def. Ment.'],
    [8, 'Prof. Edu. Sordos'],
    [9, 'Psicologia'],
    [10, 'Psicomotricidad'],
    [11, 'Psicopatologia'],
    [12, 'Psicopedagogia'],
    [13, 'Psiquiatria'],
    [14, 'Ter. Ocupacional']
];

var especiales = [ 
[ -30.8588461 , -64.5245221 , 54556 , 'CASTELLO MARIA ALEJANDRA ' , ' Psicologia' , 'Diag. Buenos Aires 244 2  Capilla del Monte ' , 'yellow' , 184 , 39 , 8 , 9 ] ,
[ -30.9736038 , -64.098412 , 55976 , 'PESCHIUTTA ALEJANDRA SOLEDAD ' , ' Psicopedagogia' , 'Palermo 568   Jesús María ' , 'Green' , 0 , 11 , 0 , 12 ] ,
[ -30.9736038 , -64.098412 , 54886 , 'CHAVES MARIA SOLEDAD ' , ' Psicomotricidad' , 'Palermo 568   Jesus Maria ' , 'Green' , 99 , 23 , 2 , 10 ] ,
[ -30.9736038 , -64.098412 , 52066 , 'ISPIZUA ANALIA RAQUEL ' , ' Kinesiologia' , 'Palermo 568   Jesus Maria ' , 'yellow' , 525 , 47 , 14 , 5 ] ,
[ -30.9803061 , -64.098931 , 50999 , 'GOMEZ  MARIA  INES ' , ' Psicopedagogia' , 'Pres. Gral J A Roca 188   Jesus Maria ' , 'Green' , 35 , 23 , 2 , 12 ] ,
[ -31.0068966 , -64.0785696 , 50850 , 'ALVAREZ SANDRA NOEMI ' , ' Kinesiologia' , 'Av. San Martin 2001   Colonia Caroya ' , 'Green' , 368 , 23 , 2 , 5 ] ,
[ -31.0793431 , -64.3541929 , 55480 , 'CENTRO DE DIA CANDONGA ESPACIO ABIE ' , ' Centro de Rehabilitacion' , 'Candonga Z/Rural 5107   El Manzano ' , 'Green' , 0 , 11 , 0 , 1 ] ,
[ -31.0982089 , -64.4807722 , 55248 , 'MOSCONI PATRICIA TERESITA ' , ' Fonoaudiologia' , 'Jujuy 79   La Falda ' , 'Green' , 0 , 11 , 0 , 3 ] ,
[ -31.0982089 , -64.4807722 , 55218 , 'MUMENTHALER SABRINA ' , ' Psicopatologia' , 'Jujuy 79   La Falda ' , 'Green' , 0 , 11 , 0 , 11 ] ,
[ -31.0982089 , -64.4807722 , 55247 , 'OCHOA BONETTO MARIA SOL ' , ' Psicomotricidad' , 'Jujuy 79   La Falda ' , 'Green' , 0 , 11 , 0 , 10 ] ,
[ -31.0982089 , -64.4807722 , 54045 , 'BELTRAMO EVANGELINA ' , ' Kinesiologia' , 'Jujuy 79   La Falda ' , 'orange' , 646 , 53 , 21 , 5 ] ,
[ -31.2874919 , -64.2956023 , 55404 , 'CECCHINI MARIA LAURA ' , ' Psicologia' , 'Del Carmen 879   Villa Allende ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.2874919 , -64.2956023 , 53841 , 'SANCHEZ MARIA ALEJANDRA ' , ' Profesora en Educacion de Deficientes Mentales' , 'Del Carmen 879   Villa Allende ' , 'Green' , 8 , 18 , 1 , 7 ] ,
[ -31.2874919 , -64.2956023 , 54640 , 'ROLANDO MARIA LAURA ' , ' Psicopedagogia' , 'Del Carmen 879   Villa Allende ' , 'yellow' , 97 , 37 , 7 , 12 ] ,
[ -31.2874919 , -64.2956023 , 55422 , 'VILLAGRA VALENTINA ROCIO ' , ' Fonoaudiologia' , 'Del Carmen 879   Villa Allende ' , 'yellow' , 168 , 37 , 7 , 3 ] ,
[ -31.2874919 , -64.2956023 , 53834 , 'GOMEZ MARIANA PAULA ' , ' Psicomotricidad' , 'Del Carmen 879   Villa Allende ' , 'yellow' , 277 , 39 , 8 , 10 ] ,
[ -31.2874919 , -64.2956023 , 51069 , 'DIAZ BRINGAS SILVINA ' , ' Psicopedagogia' , 'Del Carmen 879   Villa Allende ' , 'yellow' , 398 , 42 , 10 , 12 ] ,
[ -31.2874919 , -64.2956023 , 52078 , 'LUHRS ESTHER LILIANA ' , ' Fonoaudiologia' , 'Del Carmen 879   Villa Allende ' , 'yellow' , 364 , 44 , 11 , 3 ] ,
[ -31.2890291 , -64.2929384 , 54043 , 'MOSQUEN MARCELA PATRICIA ' , ' Terapia Ocupacional' , 'Av. Rio de Janeiro 847   Villa Allende ' , 'yellow' , 922 , 46 , 13 , 14 ] ,
[ -31.3021066 , -64.254654 , 53001 , 'ROLDAN NESTOR MARIA ' , ' Kinesiologia' , 'Padre Luchesse 4400   Villa Allende ' , 'yellow' , 520 , 27 , 3 , 5 ] ,
[ -31.3042467 , -64.28176 , 54491 , 'PAPONET PAOLA ALEJANDRA ' , ' Fonoaudiologia' , 'Pje. Córdoba 77   Villa Allende ' , 'yellow' , 201 , 45 , 12 , 3 ] ,
[ -31.3042467 , -64.28176 , 50736 , 'BARON GARRIDO MARTHA ESTELA ' , ' Kinesiologia' , 'Pje. Córdoba 77   Villa Allende ' , 'yellow' , 516 , 52 , 19 , 5 ] ,
[ -31.3042467 , -64.28176 , 50773 , 'CEBALLOS PABLO ALEJANDRO ' , ' Kinesiologia' , 'Pje. Córdoba 77   Villa Allende ' , 'orange' , 1605 , 74 , 74 , 5 ] ,
[ -31.3184574 , -64.3168661 , 52495 , 'NICOLA KARINA CECILIA ' , ' Psiquiatria' , 'Av. Gral. José María Paz 120 5 L Córdoba ' , 'red' , 1263 , 86 , 153 , 13 ] ,
[ -31.3340121 , -64.4799681 , 50751 , 'SANCHEZ LEONARDO DANIEL ' , ' Kinesiologia' , 'Bialet Masse 440   Villa Carlos Paz ' , 'orange' , 707 , 61 , 33 , 5 ] ,
[ -31.3421124 , -64.2618248 , 50332 , 'VANIN ' , ' Centro de Rehabilitacion' , 'Raymond Poincare 7175   Córdoba ' , 'yellow' , 1636 , 51 , 18 , 1 ] ,
[ -31.3451383 , -64.2585893 , 53921 , 'CAMPANA FABIANA DOLORES ' , ' Psicologia' , 'Ramón y Cajal 6358   Córdoba ' , 'orange' , 506 , 68 , 52 , 9 ] ,
[ -31.3493523 , -64.2615094 , 55130 , 'PASINI ANTONELLA ' , ' Psiquiatria' , 'Pje. Edison 6092 PA  Córdoba ' , 'orange' , 778 , 74 , 75 , 13 ] ,
[ -31.3518086 , -64.2459483 , 55658 , 'FINOCCHIARO FLORENCIA ' , ' Psicologia' , 'Miguel Arrambide 6127   Córdoba ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.3518086 , -64.2459483 , 55659 , 'PADULA RUZ ERICA ILEANA ' , ' Psicopedagogia' , 'Miguel Arrambide 6127   Córdoba ' , 'Green' , 0 , 11 , 0 , 12 ] ,
[ -31.3518086 , -64.2459483 , 55712 , 'ISUARDI NATALIA ' , ' Kinesiologia' , 'Miguel Arrambide 6127   Córdoba ' , 'Green' , 0 , 11 , 0 , 5 ] ,
[ -31.3518086 , -64.2459483 , 55558 , 'PUCCIO ANDREA MARICEL ' , ' Psicomotricidad' , 'Miguel Arrambide 6127   Córdoba ' , 'yellow' , 34 , 33 , 5 , 10 ] ,
[ -31.3518086 , -64.2459483 , 55559 , 'NAZRALA NATALIA NOE ' , ' Fonoaudiologia' , 'Miguel Arrambide 6127   Córdoba ' , 'yellow' , 112 , 39 , 8 , 3 ] ,
[ -31.3518086 , -64.2459483 , 54989 , 'FUNDACION MULTIPLES EXPRESIONES ' , ' Centro de Rehabilitacion' , 'Miguel Arrambide 6127   Córdoba ' , 'yellow' , 525 , 41 , 9 , 1 ] ,
[ -31.360459 , -64.247456 , 54737 , 'CIREHA - CENTRO INTERDISCIPLINARIO ' , ' Centro de Rehabilitacion' , 'Pedro Laplace 5400   Córdoba ' , 'red' , 10056 , 91 , 204 , 1 ] ,
[ -31.3646636 , -64.2321513 , 52495 , 'NICOLA KARINA CECILIA ' , ' Psiquiatria' , 'Martel de los Rios 2404   Córdoba ' , 'red' , 1263 , 86 , 153 , 13 ] ,
[ -31.3673118 , -64.2326803 , 54528 , 'CATEPSI SRL ' , ' Centro de Rehabilitacion' , 'Jimenez de Lorca 4316   Córdoba ' , 'orange' , 2836 , 73 , 72 , 1 ] ,
[ -31.3673118 , -64.2326803 , 55130 , 'PASINI ANTONELLA ' , ' Psiquiatria' , 'Jimenez de Lorca 4316   Córdoba ' , 'orange' , 778 , 74 , 75 , 13 ] ,
[ -31.3718019 , -64.2365202 , 54818 , 'MONELLI DELGADO MARIA MACARENA ' , ' Psicologia' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 121 , 27 , 3 , 9 ] ,
[ -31.3718019 , -64.2365202 , 53970 , 'NATALIA SOLEDAD USSEI ' , ' Psicopedagogia' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 110 , 30 , 4 , 12 ] ,
[ -31.3718019 , -64.2365202 , 54777 , 'FUENTES GUILLERMO LEONARDO ' , ' Psicologia' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 229 , 30 , 4 , 9 ] ,
[ -31.3718019 , -64.2365202 , 54601 , 'BANILLE MARIA CAROLINA ' , ' Psicologia' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 216 , 35 , 6 , 9 ] ,
[ -31.3718019 , -64.2365202 , 53015 , 'FLORENCIA CAPOMASSI ' , ' Psicomotricidad' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 776 , 41 , 9 , 10 ] ,
[ -31.3718019 , -64.2365202 , 52236 , 'CIKLIC JULIETA IRENE ' , ' Fonoaudiologia' , 'Jose D Gigena 1846   Córdoba ' , 'yellow' , 1252 , 51 , 18 , 3 ] ,
[ -31.3721048 , -64.2325866 , 51101 , 'ANGIONO VANINA ANDREA ' , ' Fonoaudiologia' , 'Av. Luis de Tejeda 4067   Córdoba ' , 'yellow' , 297 , 35 , 6 , 3 ] ,
[ -31.3721454 , -64.2368334 , 50763 , 'MACAGNO MARIANA ' , ' Psicologia' , 'Tristan Malbran 4246   Córdoba ' , 'orange' , 651 , 61 , 35 , 9 ] ,
[ -31.3747316 , -64.2319551 , 52574 , 'SARDI LUIS EDUARDO ' , ' Kinesiologia' , 'Av. Fernando Fader 3945   Córdoba ' , 'yellow' , 592 , 50 , 17 , 5 ] ,
[ -31.3756839 , -64.2325402 , 53251 , 'RUGGERI HERNAN DAVID ' , ' Psiquiatria' , 'Av. Tristán Malbrán 3946   Córdoba ' , 'red' , 787 , 87 , 161 , 13 ] ,
[ -31.3767176 , -64.2311824 , 55742 , 'APRENDER A SER - HACER ' , ' Centro de Rehabilitacion' , 'Av. Tristán Malbrán 3872   Córdoba ' , 'Green' , 0 , 11 , 0 , 1 ] ,
[ -31.3776443 , -64.2189049 , 50950 , 'ARMANDO  MARIA LAURA ' , ' Psicopedagogia' , 'Nuñez de Prado 2607   Córdoba ' , 'yellow' , 233 , 44 , 11 , 12 ] ,
[ -31.3789611 , -64.2249582 , 52404 , 'CHAVERO PABLO CESAR ' , ' Kinesiologia' , 'Adolfo Horma 2044   Córdoba ' , 'red' , 9123 , 99 , 322 , 5 ] ,
[ -31.3793669 , -64.2160552 , 54193 , 'SAN BENITO CENTRO DE REHABILITACION ' , ' Centro de Rehabilitacion' , 'José de Goyechea 3368   Córdoba ' , 'yellow' , 1547 , 44 , 11 , 1 ] ,
[ -31.3795609 , -64.2441698 , 50816 , 'RESPUELA MARIA EUGENIA ' , ' Psicologia' , 'Av. Menendez Pidal 4297   Córdoba ' , 'yellow' , 300 , 53 , 20 , 9 ] ,
[ -31.3810694 , -64.2393799 , 54953 , 'APPENDINO MARIA LUZ ' , ' Psicologia' , 'Victorino Rodriguez 1275   Córdoba ' , 'Green' , 16 , 18 , 1 , 9 ] ,
[ -31.3837253 , -64.2311227 , 55427 , 'MIEREZ CONSTANZA ' , ' Psicologia' , 'Juan C Lafinur 3576   Córdoba ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.3837253 , -64.2311227 , 55431 , 'GAGGERO SILVINA ' , ' Psicologia' , 'Juan C Lafinur 3576   Córdoba ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.3837253 , -64.2311227 , 55428 , 'VALLONE MIRIAM ELIZABETH ' , ' Psicologia' , 'Juan C Lafinur 3576   Córdoba ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.3837253 , -64.2311227 , 55414 , 'LOGROS ASOCIACION CIVIL ' , ' Centro de Rehabilitacion' , 'Juan C Lafinur 3576   Córdoba ' , 'yellow' , 18 , 30 , 4 , 1 ] ,
[ -31.3855527 , -64.2575729 , 52507 , 'BOIERO GERARDO FABIAN ' , ' Kinesiologia' , 'Calandria 548 3 13 Córdoba ' , 'yellow' , 1140 , 33 , 5 , 5 ] ,
[ -31.3891093 , -64.2740971 , 52357 , 'GUNSETT SILVIA VANESA ' , ' Kinesiologia' , 'Evasio Garrone 7090   Córdoba ' , 'orange' , 1084 , 71 , 63 , 5 ] ,
[ -31.3915393 , -64.2255654 , 55130 , 'PASINI ANTONELLA ' , ' Psiquiatria' , 'Nazaret 3182 1 1 Córdoba ' , 'orange' , 778 , 74 , 75 , 13 ] ,
[ -31.3992558 , -64.2103247 , 55954 , 'REINA MARIA LUCIANA ' , ' Fonoaudiologia' , 'Cnle. Pedro Zanni 763 1 C Córdoba ' , 'Green' , 0 , 11 , 0 , 3 ] ,
[ -31.4005825 , -64.1802209 , 53934 , 'OLIVA NATALIA ' , ' Kinesiologia' , 'Gral. Paz 1450   Córdoba ' , 'Green' , 0 , 11 , 0 , 5 ] ,
[ -31.4005825 , -64.1802209 , 53891 , 'CENTRO MEDICO DE REHABILITACION IND ' , ' Centro de Rehabilitacion' , 'Gral. Paz 1450   Córdoba ' , 'orange' , 2391 , 80 , 104 , 1 ] ,
[ -31.4005825 , -64.1802209 , 53925 , 'CASTILLO HEBE MARIA ' , ' Fisiatria' , 'Av. Gral. Paz 1450   Córdoba ' , 'red' , 309 , 87 , 160 , 2 ] ,
[ -31.403304 , -64.197149 , 54843 , 'LEDESMA MARIA JULIETA ' , ' Fonoaudiologia' , 'Cnel. Olmedo 734   Córdoba ' , 'Green' , 0 , 11 , 0 , 3 ] ,
[ -31.403304 , -64.197149 , 54844 , 'LERNER LAURA ' , ' Fonoaudiologia' , 'Cnel. Olmedo 734   Córdoba ' , 'Green' , 20 , 18 , 1 , 3 ] ,
[ -31.403304 , -64.197149 , 54842 , 'VALLEJO CLAUDIA CECILIA ' , ' Psicologia' , 'Cnel. Olmedo 734   Córdoba ' , 'Green' , 15 , 23 , 2 , 9 ] ,
[ -31.403304 , -64.197149 , 54841 , 'BIZARRI CRISTINA MONICA ' , ' Profesora en Educacion de Sordos' , 'Cnel. Olmedo 734   Córdoba ' , 'yellow' , 83 , 33 , 5 , 8 ] ,
[ -31.403304 , -64.197149 , 54787 , 'PROVIDUS ' , ' Centro de Rehabilitacion' , 'Cnel. Olmedo 734   Córdoba ' , 'yellow' , 1990 , 49 , 16 , 1 ] ,
[ -31.4054679 , -64.1995739 , 50946 , 'OLIVA LILIANA ROSA DEL VALLE ' , ' Psicopedagogia' , 'Av. Santa Fé 475   Córdoba ' , 'yellow' , 170 , 42 , 10 , 12 ] ,
[ -31.4054679 , -64.1995739 , 5476 , 'CABELLO STELLA MARIS ' , ' Fonoaudiologia' , 'Av. Santa Fé 475   Córdoba ' , 'yellow' , 180 , 42 , 10 , 3 ] ,
[ -31.4062816 , -64.5059539 , 54846 , 'CARDEA S.R.L. ' , ' Centro de Rehabilitacion' , 'Buonarotti 644   Villa Carlos Paz ' , 'yellow' , 1917 , 47 , 14 , 1 ] ,
[ -31.408809 , -64.1931082 , 55125 , 'CONCI MAGRIS DIEGO MARTIN ' , ' Psiquiatria' , 'Gral. J J de Urquiza 358 3  Córdoba ' , 'orange' , 94 , 61 , 33 , 13 ] ,
[ -31.408809 , -64.1931082 , 54649 , 'FUNDACION ALMENARA ' , ' Centro de Rehabilitacion' , 'Gral. J J de Urquiza 358 3  Córdoba ' , 'orange' , 1348 , 78 , 96 , 1 ] ,
[ -31.4097821 , -64.1640006 , 53251 , 'RUGGERI HERNAN DAVID ' , ' Psiquiatria' , 'Domingo F Sarmiento 1564   Córdoba ' , 'red' , 787 , 87 , 161 , 13 ] ,
[ -31.4107135 , -64.1673472 , 52333 , 'CE.IN. S.R.L. ' , ' Centro de Rehabilitacion' , 'Domingo F Sarmiento 1283   Córdoba ' , 'yellow' , 2360 , 52 , 19 , 1 ] ,
[ -31.4109557 , -64.1913943 , 54338 , 'HADDAD VIVIANA VERONICA ' , ' Psiquiatria' , 'Av. Colón 610 11 1 Córdoba ' , 'red' , 903 , 83 , 128 , 13 ] ,
[ -31.4121264 , -64.1945459 , 55066 , 'BOSCO MARIA MERCEDES ' , ' Integracion Escolar' , 'Gral. J J de Urquiza 65   Córdoba ' , 'Green' , 0 , 11 , 0 , 4 ] ,
[ -31.4121264 , -64.1945459 , 55065 , 'SCAUSO RENATA ' , ' Fonoaudiologia' , 'Gral. J J de Urquiza 65   Córdoba ' , 'Green' , 12 , 18 , 1 , 3 ] ,
[ -31.4124111 , -64.2093796 , 52547 , 'CAMPO SILVANA RAQUEL ' , ' Fonoaudiologia' , 'Sol de Mayo 350 4 D Córdoba ' , 'yellow' , 1130 , 41 , 9 , 3 ] ,
[ -31.4127008 , -64.5075368 , 54874 , 'SANTA CRUZ MARIA BELEN ' , ' Kinesiologia' , 'Hiroshima 234   Villa Carlos Paz ' , 'yellow' , 360 , 44 , 11 , 5 ] ,
[ -31.4128824 , -64.1627717 , 55233 , 'CENTRO DE REHABILITACION MEDITERRAN ' , ' Centro de Rehabilitacion' , 'Av. 24 de Septiembre 1566 PB  Córdoba ' , 'Green' , 0 , 11 , 0 , 1 ] ,
[ -31.4149995 , -64.2014357 , 55941 , 'SEQUEIROS REGINA MARÍA ' , ' Fonoaudiologia' , 'Paraguay 320   Córdoba ' , 'Green' , 0 , 11 , 0 , 3 ] ,
[ -31.4157749 , -64.1988125 , 54035 , 'DE MONTE MARIA EUGENIA ' , ' Psicopedagogia' , 'Dr. Mariano Moreno 321   Córdoba ' , 'yellow' , 223 , 42 , 10 , 12 ] ,
[ -31.4164262 , -64.48817 , 50751 , 'SANCHEZ LEONARDO DANIEL ' , ' Kinesiologia' , 'Tucuman 98   Villa Carlos Paz ' , 'orange' , 707 , 61 , 33 , 5 ] ,
[ -31.4216516 , -64.1897495 , 52553 , 'PERRONE MARIA JULIANA ' , ' Psicomotricidad' , 'Av. Vélez Sarsfield 562 2  Córdoba ' , 'yellow' , 83 , 27 , 3 , 10 ] ,
[ -31.4224071 , -64.2088397 , 54259 , 'COLEGIO ADOLFO BIOY CASARES ' , ' Centro de Rehabilitacion' , 'Angelo de Peredo 1572   Córdoba ' , 'Green' , 6 , 18 , 1 , 1 ] ,
[ -31.423 , -64.1885876 , 54354 , 'CACERES MAGDALENA MARCELA ' , ' Neurologia' , 'Obispo Trejo 620 1 B Córdoba ' , 'orange' , 766 , 79 , 101 , 6 ] ,
[ -31.4232518 , -64.4976015 , 54602 , 'LUNA OCAMPO SILVIA BEATRIZ ' , ' Psicologia' , 'San Lorenzo 122   Villa Carlos Paz ' , 'yellow' , 94 , 30 , 4 , 9 ] ,
[ -31.423475 , -64.1825157 , 54323 , 'PRAXIS SRL (INT. DOMICILIARIA) ' , ' Centro de Rehabilitacion' , 'Bv. Chacabuco 511 2  Córdoba ' , 'orange' , 21426 , 69 , 57 , 1 ] ,
[ -31.4240217 , -64.194967 , 55361 , 'JUAREZ VERONICA ISABEL ' , ' Kinesiologia' , 'Gral. Simón Bolivar 851   Córdoba ' , 'Green' , 0 , 11 , 0 , 5 ] ,
[ -31.4240217 , -64.194967 , 55523 , 'SORIA ANA LAURA ' , ' Psicopedagogia' , 'Gral. Simón Bolivar 851   Córdoba ' , 'Green' , 0 , 11 , 0 , 12 ] ,
[ -31.4240217 , -64.194967 , 55713 , 'GOYCOLEA WALTER GABRIEL ' , ' Psicologia' , 'Gral. Simón Bolivar 851   Córdoba ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.4240217 , -64.194967 , 55359 , 'GROS VALERIA INES ' , ' Kinesiologia' , 'Gral. Simón Bolivar 851   Córdoba ' , 'Green' , 76 , 23 , 2 , 5 ] ,
[ -31.4240217 , -64.194967 , 55409 , 'RIVAROLA DIEGO HUGO OCTAVIO ' , ' Fisiatria' , 'Gral. Simón Bolivar 851   Córdoba ' , 'Green' , 2 , 23 , 2 , 2 ] ,
[ -31.4240217 , -64.194967 , 55358 , 'FERNANDEZ VANINA RENEE ' , ' Kinesiologia' , 'Gral. Simón Bolivar 851   Córdoba ' , 'yellow' , 49 , 30 , 4 , 5 ] ,
[ -31.4240217 , -64.194967 , 55339 , 'BARROSO YANINA CECILIA ' , ' Terapia Ocupacional' , 'Gral. Simón Bolivar 851   Córdoba ' , 'yellow' , 195 , 37 , 7 , 14 ] ,
[ -31.4240217 , -64.194967 , 55269 , 'CONSULTORIOS INTEGRA ' , ' Centro de Rehabilitacion' , 'Gral. Simón Bolivar 851   Córdoba ' , 'yellow' , 967 , 39 , 8 , 1 ] ,
[ -31.4241422 , -64.1837912 , 52341 , 'ALPI ' , ' Centro de Rehabilitacion' , 'San Lorenzo 283   Córdoba ' , 'yellow' , 1137 , 44 , 11 , 1 ] ,
[ -31.4244547 , -64.1904895 , 55065 , 'SCAUSO RENATA ' , ' Fonoaudiologia' , 'Av. Dr. Velez Sarsfield 783 PB  Córdoba ' , 'Green' , 12 , 18 , 1 , 3 ] ,
[ -31.4251564 , -64.1848762 , 52947 , 'BAUDUCCO RAQUEL ' , ' Psiquiatria' , 'Ituzaingo 696 5 B Córdoba ' , 'orange' , 72 , 58 , 28 , 13 ] ,
[ -31.4363312 , -64.1780696 , 55416 , 'NEGRETE MARIA FERNANDA ' , ' Kinesiologia' , 'Felix Olmedo 2153   Córdoba ' , 'Green' , 0 , 11 , 0 , 5 ] ,
[ -31.4363312 , -64.1780696 , 53879 , 'GOSPA ' , ' Centro de Rehabilitacion' , 'Felix Olmedo 2153   Córdoba ' , 'orange' , 2248 , 59 , 30 , 1 ] ,
[ -31.4396785 , -64.1970559 , 5818 , 'ONECA ADRIANA IRENE ' , ' Terapia Ocupacional' , 'Friuli 2240   Córdoba ' , 'Green' , 100 , 18 , 1 , 14 ] ,
[ -31.4396785 , -64.1970559 , 54622 , 'OJEDA MARIANA ' , ' Fonoaudiologia' , 'Friuli 2240   Cordoba ' , 'Green' , 90 , 23 , 2 , 3 ] ,
[ -31.4396785 , -64.1970559 , 50193 , 'SCRUZZI GABRIELA ' , ' Kinesiologia' , 'Friuli 2240   Córdoba ' , 'yellow' , 249 , 30 , 4 , 5 ] ,
[ -31.4396785 , -64.1970559 , 5803 , 'MANIACI CLAUDIA ALEJANDRA ' , ' Fonoaudiologia' , 'Friuli 2240   Córdoba ' , 'yellow' , 340 , 35 , 6 , 3 ] ,
[ -31.4486734 , -64.1737082 , 55511 , 'GROSS MAURO NAHUEL ' , ' Psicologia' , 'Hernando de Lerma 3335   Córdoba ' , 'Green' , 78 , 23 , 2 , 9 ] ,
[ -31.4486734 , -64.1737082 , 55197 , 'JIMENEZ ESTEFANIA ' , ' Psicologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 126 , 27 , 3 , 9 ] ,
[ -31.4486734 , -64.1737082 , 54255 , 'CHINCHAYAN GRADOS JOSE ' , ' Kinesiologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 554 , 30 , 4 , 5 ] ,
[ -31.4486734 , -64.1737082 , 51111 , 'SPINELLI ADRIANA RAQUEL ' , ' Kinesiologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 792 , 33 , 5 , 5 ] ,
[ -31.4486734 , -64.1737082 , 54326 , 'TORRESI JAVIER ' , ' Kinesiologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 731 , 35 , 6 , 5 ] ,
[ -31.4486734 , -64.1737082 , 54273 , 'MORAGUES ANA CAROLINA ' , ' Fonoaudiologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 760 , 44 , 11 , 3 ] ,
[ -31.4486734 , -64.1737082 , 51070 , 'BONINO CLAUDIA NANCY ' , ' Kinesiologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 1197 , 46 , 13 , 5 ] ,
[ -31.4486734 , -64.1737082 , 53284 , 'BALSAMO VIVIANA EDITH ' , ' Psicologia' , 'Hernando de Lerma 3335   Córdoba ' , 'yellow' , 358 , 52 , 19 , 9 ] ,
[ -31.6565216 , -64.42873 , 54499 , 'ARGÜELLO PAOLA ANDREA ' , ' Kinesiologia' , 'P. Bustos 160   Alta Gracia ' , 'orange' , 1029 , 56 , 25 , 5 ] ,
[ -31.6567925 , -64.4275966 , 53071 , 'MOYANO DAVID SEBASTIAN ' , ' Kinesiologia' , 'Bv. Raúl Alfonsin 151   Alta Gracia ' , 'orange' , 614 , 69 , 56 , 5 ] ,
[ -31.6569272 , -64.4328855 , 51753 , 'MARTINEZ CLAUDIA ANGELA ' , ' Psicopedagogia' , 'Belisario Roldan 71   Alta Gracia ' , 'Green' , 28 , 23 , 2 , 12 ] ,
[ -31.6569272 , -64.4328855 , 51125 , 'FISCHER MERCEDES ALEJANDRA ' , ' Psicologia' , 'Belisario Roldan 71   Alta Gracia ' , 'yellow' , 121 , 52 , 19 , 9 ] ,
[ -31.6570663 , -64.4329951 , 50923 , 'TORCELLO PAULA INES ' , ' Psicologia' , 'Belisario Roldán 53   Alta Gracia ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.6570663 , -64.4329951 , 50920 , 'FUNDACION ESPACIOS ' , ' Centro de Rehabilitacion' , 'Belisario Roldán 53   Alta Gracia ' , 'Green' , 48 , 18 , 1 , 1 ] ,
[ -31.6584862 , -64.4125383 , 55079 , 'MOYANO LAURO GASTON ' , ' Kinesiologia' , 'Av. El Libertador 1794   Alta Gracia ' , 'yellow' , 273 , 45 , 12 , 5 ] ,
[ -31.6584988 , -63.9030177 , 53053 , 'SUGAR NANCY DEL VALLE ' , ' Kinesiologia' , 'Bv. Leandro N Alem 428   Rio Segundo ' , 'yellow' , 193 , 33 , 5 , 5 ] ,
[ -31.660615 , -64.4279649 , 51125 , 'FISCHER MERCEDES ALEJANDRA ' , ' Psicologia' , '24 de Septiembre 171   Alta Gracia ' , 'yellow' , 121 , 52 , 19 , 9 ] ,
[ -31.7221241 , -65.0011497 , 54979 , 'VITULLI JUAN FRANCISCO ' , ' Psicomotricidad' , 'Av. Intendente Vila 1626   Mina Clavero ' , 'Green' , 0 , 11 , 0 , 10 ] ,
[ -31.7221241 , -65.0011497 , 54224 , 'SALINARDI LAURA ' , ' Kinesiologia' , 'Av. Intendente Vila 1626   Mina Clavero ' , 'Green' , 65 , 18 , 1 , 5 ] ,
[ -31.7221241 , -65.0011497 , 55203 , 'FRUMAN VALERIA NATALIA ' , ' Psicopatologia' , 'Av. Intendente Vila 1626   Mina Clavero ' , 'Green' , 36 , 18 , 1 , 11 ] ,
[ -31.9141971 , -63.6819648 , 55681 , 'CENIR HEALTH ' , ' Centro de Rehabilitacion' , 'Gral. San Martin 763   Oncativo ' , 'yellow' , 476 , 44 , 11 , 1 ] ,
[ -31.9444717 , -65.1847508 , 55305 , 'ABRAMO MARIA SOLEDAD ' , ' Psicologia' , 'Siria 73 1  Villa Dolores ' , 'yellow' , 103 , 44 , 11 , 9 ] ,
[ -31.9446161 , -65.1923767 , 55909 , 'ANTON MARIA PIA ' , ' Psicomotricidad' , 'Remedios de Escalada 50   Villa Dolores ' , 'Green' , 0 , 11 , 0 , 10 ] ,
[ -31.9458175 , -65.1701428 , 53940 , 'SOSA LUCIANA ' , ' Psicomotricidad' , 'Av. Gral. José María Paz 1450   Córdoba ' , 'Green' , 0 , 11 , 0 , 10 ] ,
[ -31.9473124 , -65.1753797 , 54872 , 'GARCIA MARIANA KARINA ' , ' Psicomotricidad' , 'Av. Belgrano 1071   Villa Dolores ' , 'Green' , 50 , 18 , 1 , 10 ] ,
[ -31.9515561 , -65.1913869 , 53737 , 'PARICIA JORGE CEFERINO ' , ' Kinesiologia' , 'Domingo F Sarmiento 558   Villa Dolores ' , 'yellow' , 245 , 47 , 14 , 5 ] ,
[ -31.952132 , -65.1917686 , 54101 , 'CYNOWICZ CELIA EDITH ' , ' Psicologia' , 'Carlos Pellegrini 86   Villa Dolores ' , 'Green' , 0 , 11 , 0 , 9 ] ,
[ -31.966093 , -64.561693 , 54385 , 'TULIAN MARIA VIRGINIA ' , ' Terapia Ocupacional' , 'Lago di Garda 621   Villa General Belgrano ' , 'yellow' , 110 , 27 , 3 , 14 ] ,
[ -31.9770753 , -64.5591926 , 50860 , 'GAMBOA SILVIA MABEL ' , ' Psicopedagogia' , 'San Martin 20   Villa General Belgrano ' , 'yellow' , 84 , 33 , 5 , 12 ] ,
[ -32.0712288 , -64.5315008 , 50860 , 'GAMBOA SILVIA MABEL ' , ' Psicopedagogia' , 'Hipólito Yrigoyen 341   Santa Rosa de Calamuchita ' , 'yellow' , 84 , 33 , 5 , 12 ] ,
[ -32.0733188 , -64.5296861 , 50090 , 'PRIMO JUAN MARCELO ' , ' Kinesiologia' , 'Atahualpa Yupanqui 390   Santa Rosa de Calamuchita ' , 'orange' , 492 , 58 , 28 , 5 ] ,
[ -32.1755076 , -64.1097511 , 55312 , 'MEDINA SILVIA VERONICA ' , ' Fonoaudiologia' , 'Garibaldi 117   Rio Tercero ' , 'Green' , 0 , 11 , 0 , 3 ] ,
[ -32.1755076 , -64.1097511 , 55306 , 'QUADRELLO MAURIANA MARIA DEL LUJAN ' , ' Psicopedagogia' , 'Garibaldi 117   Rio Tercero ' , 'Green' , 80 , 18 , 1 , 12 ] ,
[ -32.1755076 , -64.1097511 , 55308 , 'GARCIA ROXANA NOELIA ' , ' Psicopedagogia' , 'Garibaldi 117   Rio Tercero ' , 'Green' , 10 , 18 , 1 , 12 ] ,
[ -32.1766409 , -64.4526877 , 50090 , 'PRIMO JUAN MARCELO ' , ' Kinesiologia' , 'Av. San Martin 250   Villa del Dique ' , 'orange' , 492 , 58 , 28 , 5 ] ,
[ -32.1780999 , -64.1145847 , 55666 , 'CARIGNANO CARLOS ADRIAN ' , ' Kinesiologia' , 'Av. Gral. San Martin 632   Rio Tercero ' , 'yellow' , 132 , 42 , 10 , 5 ] 
];
var stylesArray0 = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#aee2e0"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#abce83"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#769E72"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#7B8758"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#EBF4A4"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "simplified"
    }, {
        "color": "#8dab68"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#5B5B3F"
    }]
}, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ABCE83"
    }]
}, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#A4C67D"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#9BBF72"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#EBF4A4"
    }]
}, {
    "featureType": "transit",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#87ae79"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f2200"
    }, {
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ffffff"
    }, {
        "visibility": "on"
    }, {
        "weight": 4.1
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#495421"
    }]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}];
var stylesArray1 = [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }, {
        "saturation": "-100"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
    }, {
        "color": "#000000"
    }, {
        "lightness": 40
    }, {
        "visibility": "off"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "off"
    }, {
        "color": "#000000"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 20
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 17
    }, {
        "weight": 1.2
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 20
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#4d6059"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#4d6059"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#4d6059"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "lightness": 21
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#4d6059"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#4d6059"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#7f8d89"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f8d89"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f8d89"
    }, {
        "lightness": 17
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#7f8d89"
    }, {
        "lightness": 29
    }, {
        "weight": 0.2
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 18
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f8d89"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#7f8d89"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f8d89"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#7f8d89"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 19
    }]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "color": "#2b3638"
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2b3638"
    }, {
        "lightness": 17
    }]
}, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#24282b"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#24282b"
    }]
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}];