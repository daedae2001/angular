function html_info_market_1(etiquetainfiwindows,escala,zoom,color_f ) {return " <h1> Nombre: " + etiquetainfiwindows + ' </h1> ' + "<h2> color_f: " + color_f + " </h2> <h3> orden: " + "</h3><h2> zoom: " +  zoom + "</h2>"}
var farmacias = [ 
['44 FARMACIA BLANCO' ,  'DOMINGO F SARMIENTO 47 CORDOBA' ,  -31.410218 ,  -64.181253 ,  15819 ,  1239287.79 ,  11 ,  7 ,  '#49ff33' ,  '#2828f0'],  
['45 FARMACIA BUENOS AIRES' ,  'BUENOS AIRES 399 CORDOBA' ,  -31.4210929 ,  -64.1849083 ,  1670 ,  70268.02 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['46 FARMACIA EL SOL' ,  'AV. COLON 302 CORDOBA' ,  -31.4123195 ,  -64.1873595 ,  805 ,  51415.94 ,  6 ,  6 ,  '#060675' ,  '#060675'],  
['48 FARMACIA GENERAL PAZ' ,  'SARMIENTO 436 LA FALDA' ,  -31.0875359 ,  -64.4837265 ,  8893 ,  1019690.96 ,  9 ,  7 ,  '#279c0f' ,  '#2828f0'],  
['78 FARMACIA FARMACENTER S.A.' ,  'AV FUERZA AEREA ARGE 2950 CORDOBA' ,  -31.4314082 ,  -64.2281882 ,  22718 ,  1944267.46 ,  12 ,  8 ,  '#71ff33' ,  '#2861f0'],  
['81 FARMACIA BAZAN' ,  'JOSE M PEREZ ARZENO 5372 CORDOBA' ,  -31.3527574 ,  -64.1789174 ,  127 ,  18363.71 ,  6 ,  6 ,  '#060675' ,  '#060675'],  
['86 FARMACIA HERNANDEZ' ,  'DOMINGO F SARMIENTO 1469 CORDOBA' ,  -31.410056 ,  -64.1651283 ,  2416 ,  152950.31 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['88 FARMACIA NANCY SEGURA' ,  'AV DR AMADEO SABATTI 4097 CORDOBA' ,  -31.4334323 ,  -64.1332716 ,  9407 ,  494666.06 ,  9 ,  7 ,  '#279c0f' ,  '#2828f0'],  
['89 FARMACIA LOPEZ PICCIONI' ,  'AV ARMADA ARGENTINA 144 CORDOBA' ,  -31.4508495 ,  -64.2014772 ,  550 ,  21771.56 ,  6 ,  6 ,  '#060675' ,  '#060675'],  
['91 FARMACIA EDEN' ,  'AV EDEN 299 LA FALDA' ,  -31.0875359 ,  -64.4837265 ,  5001 ,  341089.7 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['95 FARMACIA DAPARTE' ,  'VELEZ SARSFIELD 600 RIO TERCERO' ,  -32.1753998 ,  -64.1122055 ,  5660 ,  530287.41 ,  8 ,  7 ,  '#2861f0' ,  '#2828f0'],  
['99 FARMACIA SANTA CECILIA' ,  'JUAN D PERON 225 EMBALSE' ,  -32.2131151 ,  -64.4733422 ,  3010 ,  207934.41 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['104 FARMACIA ZUCCHINI' ,  'BELGRANO 402 CIUDAD AUTONOMA BUEN' ,  -31.4666691 ,  -64.3666687 ,  1962 ,  117441.98 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['105 FARMACIA COPPARI' ,  '25 DE MAYO 618 ONCATIVO' ,  -31.4092376 ,  -64.1663729 ,  5601 ,  506908.49 ,  8 ,  7 ,  '#2861f0' ,  '#2828f0'],  
['107 FARMACIA MUTUAL DEL TAXI' ,  'DR JUAN BAUTISTA JUS 364 VILLA CARLOS PAZ' ,  -31.4209385 ,  -64.5001297 ,  7614 ,  626216.45 ,  9 ,  7 ,  '#279c0f' ,  '#2828f0'],  
['116 FARMACIA ZAYA' ,  'TUCUMAN 802 JESUS MARIA' ,  -30.9763097 ,  -64.0958128 ,  4340 ,  443124.94 ,  7 ,  7 ,  '#2828f0' ,  '#2828f0'],  
['119 FARMACIA BENITO' ,  'TUCUMAN 453 JESUS MARIA' ,  -30.9763097 ,  -64.0958128 ,  2629 ,  172883.9 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['120 FARMACIA ZIADE' ,  'BVRD AGUERO 55 JESUS MARIA' ,  -30.9763097 ,  -64.0958128 ,  256 ,  12530.95 ,  6 ,  6 ,  '#060675' ,  '#060675'],  
['2818 FARMACIA ALAZRAKI' ,  'AV RECTA MARTINOLI 7415 CORDOBA' ,  -31.3477076 ,  -64.2654825 ,  30644 ,  2076044.19 ,  13 ,  8 ,  '#afff33' ,  '#2861f0'],  
['2819 FARMACIA MILOVICH' ,  'AV GOYCOECHEA 557 VILLA ALLENDE' ,  -31.3000507 ,  -64.3002319 ,  1836 ,  118291.36 ,  7 ,  6 ,  '#2828f0' ,  '#060675'],  
['3166 FARMACIA NERVEGNA' ,  'JULIO A. ROCA 288 CIUDAD AUTONOMA BUEN' ,  -31.9833298 ,  -64.5666809 ,  9927 ,  981849.76 ,  9 ,  7 ,  '#279c0f' ,  '#2828f0']  
];
var stylesArray0 = [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}];
var stylesArray1 =[{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
