class Animal {
  constructor(numPrestador,direccion}) {
     
        this.numPrestador = 0;
        this.direccion = 0;
      this.nombre = 0;
        this.etiquetainfiwindows="" ;

        this.lat1 = 0;
        this.long1 = 0;
        this.tam_f = 0;
        this.zom = 0;
        this.escala = 0;
     
        this.frecuencia = 0;
        this.Facturado = 0;
      
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre) + ' ladra.';
  }
}
this.etiquetainfiwindows="" ;

        this.lat1 = farmacias[i][3]
        this.long1 = farmacias[i][4]
        this.lat2 = farmacias[i][3]
        this.long2 = farmacias[i][4]
        this.tam_f = farmacias[i][6] / 200
        this.zom = map.getZoom()
        this.escala = (convierte_escala_zoom(map.getZoom()))
        this.prestador = farmacias[i][0]
        this.direccion = farmacias[i][1]
        this.frecuencia = farmacias[i][7]
        this.Facturado = farmacias[i][5]


        function html_info_market_1(etiquetainfiwindows,escala,zoom,color_f ) {return " <h1> Nombre: " + etiquetainfiwindows + ' </h1> ' + "<h2> color_f: " + color_f + " </h2> <h3> orden: " + "</h3><h2> zoom: " +  zoom + "</h2>"}


}