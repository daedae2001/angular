function convierte_escala_zoom(zom){
   var escalas=[
     [20,128],
     [19,128],
     [18,96],
     [17,64],
     [16,48],
     [15,32],
     [14,24],
     [13,16],
     [12,12],
     [11,8],
     [10,6],
     [9,4],
     [8,3],
     [7,2],
     [6,1.5],
     [5,1],
     [4,1],
     [3,1],
     [2,1],
     [1,1]
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