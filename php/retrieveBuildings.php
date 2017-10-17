<?php

$connection = mysqli_connect("localhost","root","","buildingsdb");
mysqli_set_charset($connection,"utf8");
$sql = "select * from building";

$queryarray[] =  array();
$result = mysqli_query($connection, $sql);


//Devolver el usuario actualizado
if($connection){

    $row=$result->fetch_assoc();
    echo " street: ".$row["street"]."<br>";
    echo " num: ".$row["num"]."<br>";
    echo " postal code: ".$row["postalcode"]."<br>";

}else{
    echo "Error en la select";
}


mysqli_close($connection);

