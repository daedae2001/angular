function html_info_market_1(especialidad,prestador,razon,direccion,tam_1,tam_2) {
    return ' <h5> Prestador: ' + ' ' + razon + ' </h5> '+ ' <h6> Especialidad: ' + especialidad+ ' </h6>  '+ ' <h6> Dirección: ' + direccion+ ' </h6>  '+ ' <h6> Frecuencia: ' + tam_1+ ' </h6> '+ ' <h6> Socios: ' + tam_2+ ' </h6> '
}
function html_info_market_0(especialidad,prestador,razon,direccion,tam_1,tam_2,lat,lng) {
    return '<a target="_blank" jstcache="6" href="https://www.google.com/maps/@'+lat+','+lng+',3a,75y,38.79h,90t/data=!3m7!1e1!3m5!1s_sEF4KeOfKFrmNdeBR6g6A!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3D_sEF4KeOfKFrmNdeBR6g6A%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D34.443657%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?hl=es"> <span>Ver streetview</span> </a> <h5> Prestador: ' + ' ' + razon + ' </h5> '+ ' <h6> Especialidad: ' + especialidad+ ' </h6>  '+ ' <h6> Dirección: ' + direccion+ ' </h6>  '+ ' <h6> Frecuencia: ' + tam_1+ ' </h6> '+ ' <h6> Socios: ' + tam_2+ ' </h6> '
}
//<a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=-31.416675,-64.185041&amp;z=18&amp;t=m&amp;hl=es&amp;gl=US&amp;mapclient=apiv3&amp;cid=14390311059552517399"> <span>Ver en Google Maps</span> </a>
function _titulo(especialidad,prestador,razon) {
    return 'Presatador: '  + razon + ' Especialidad: ' + especialidad
}
function convierte_escala_zoom(zom){
   var escalas=[
     [20,8],
     [19,6],
     [18,4],
     [17,2],
     [16,1.5],
     [15,1],
     [14,0.75],
     [13,0.5],
     [12,0.3],
     [11,0.15],
     [10,0.07],
     [9,0.06],
     [8,0.05],
     [7,0.04],
     [6,0.03],
     [5,0.02],
     [4,0.01],
     [3,0.005],
     [2,0.002],
     [1,0.001]
       ];
       for (var i = 0; i < escalas.length; i++) 
       {
        if ( escalas[i][0]==zom) {
         /// alert(escalas[i][1])
return escalas[i][1];ms_hi1();
        }{

        };
 }
}
function ms_hi1() {
      
     a = document.getElementById("hi");
        a.value =" zoom "+convierte_escala_zoom( map.getZoom()) +"tam "+ tam  ;;
    }