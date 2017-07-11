
<meta charset="utf-8"/>
 <?php
 
//SELECT id_consultorio, codigo_prestador, localidad, latitud, longitud, razon, Clasificacion, Especialidad, cantidad, pesos, Socios FROM  tb_mapas_consultorios WHERE        (latitud < 0) AND (cantidad > 0)

// Rescatamos el parámetro que nos llega mediante la url que invoca xmlhttp
$pais=$_POST["pais"];
$resultadoConsulta = '';
$msg = 'El pais recibido en segundo plano ahora es '.$pais;
if ($pais) {
    $serverName = "ccsqlcluster"; //serverName\instanceName
$connectionInfo = array( "Database"=>"servicios_operativo", "UID"=>"CC22221238", "PWD"=>"22221238");
$link = sqlsrv_connect( $serverName, $connectionInfo);

ccsqlcluster;Initial Catalog=servicios_operativo;Integrated Security=True
    //$link = mysqli_connect("aquiNombreServidor", "aquiUsuario", "aquiPassword");
    mysqli_select_db($link, "prueba1");
    $tildes = $link->query("SET NAMES 'utf8'"); //Para que se muestren las tildes correctamente
    $result = mysqli_query($link, "SELECT top1 id_consultorio, codigo_prestador, localidad, latitud, longitud, 
    razon, Clasificacion, Especialidad, cantidad, pesos, Socios 
    FROM  servicios_operativo.dbo.tb_mapas_consultorios 
    WHERE (latitud < 0) AND (cantidad > 0)");

while ($fila = mysqli_fetch_array($result)){
$resultadoConsulta .= ','.$fila['codigo_prestador'];
}

//Devolvemmos la cadena de respuesta
echo $msg.$resultadoConsulta;

mysqli_free_result($result);
mysqli_close($link);
} else {
    echo 'No se han recibido datos';
}
?>