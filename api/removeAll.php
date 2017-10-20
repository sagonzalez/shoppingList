<?php
	include "connection.php";

	$conn = getConnection();
	$sql = "delete from products";
	$response = "";

	//remove all products
	if(mysqli_query($conn,$sql)){
		$response = true;
	}else{
		$response = $conn->error;
	}
	mysqli_close($conn);	//close connection
	echo json_encode($response);	//send reponse
?>