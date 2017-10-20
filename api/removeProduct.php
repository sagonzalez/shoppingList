<?php
	include "connection.php";

	$conn = getConnection();
	$sql = "delete from products where name = '".$_GET['name']."' and cost = ".$_GET['cost'];
	$response = "";

	if(mysqli_query($conn,$sql)){
		$response = true;
	}else{
		$response = $conn->error;
	}
	mysqli_close($conn);	//close connection
	echo json_encode($response);	//send reponse
?>