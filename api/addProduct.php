<?php
	
	include "connection.php";
	// header('Content-Type: application/json');

	$name = $_GET['name'];
	$cost = $_GET['cost'];

	$conn = getConnection();
	$sql = "insert into products(name,cost,buyed) values('".$name."',".$cost.",0)"; 

	$res;
	if(mysqli_query($conn,$sql)){
		$res = true;
	}else{
		$res = $conn->error;
	}
	mysqli_close($conn);

	//send response
	echo json_encode($res);
?>