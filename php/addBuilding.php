<?php
//fetching values from URL

$street = $_POST['street'];
$number = $_POST['number'];
$postalCode = $_POST['postalCode'];
$numFloors = $_POST['numFloors'];
$numDoors = $_POST['numDoors'];

$connection = mysqli_connect("localhost","root","");
mysqli_set_charset($connection,"utf8");
$db = mysqli_select_db($connection,"buildingsdb");
if(isset($street)){
    $result = mysqli_query($connection,"insert into building (street, num, postalcode, numFloors, numDoors) VALUES ('$street','$number','$postalCode','$numFloors','$numDoors')");
    if (!$result) {
        die('Could not enter data: ' . mysqli_error());
    }
    echo "Building submited succesfully";
}
mysqli_close($connection);

