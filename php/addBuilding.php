<?php
//fetching values from URL

$street = $_POST['street'];
$number = $_POST['number'];
$postalCode = $_POST['postalCode'];
$numFloors = $_POST['numFloors'];
$numDoors = $_POST['numDoors'];

$connection = mysql_connect("localhost","root","");
$db = mysql_select_db("buildingsdb");
if(isset($street)){
$result = mysql_query("insert into building (street, num, postalcode, numFloors, numDoors) VALUES ('$street',$number,$postalCode,$numFloors,$numDoors)");
if (!$result) {
    die('Could not enter data: ' . mysql_error());
}

echo "Building submited succesfully";
}
mysql_close($connection);

