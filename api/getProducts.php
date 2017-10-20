<?php
	include "connection.php";

	$conn = getConnection();
	if($result = mysqli_query($conn,"select name,cost,buyed from products")){
		$rows = array();	//create an array to save all products
		while($r = mysqli_fetch_assoc($result)){
			$rows [] = $r;	//save product in 'rows' array
		}
		echo json_encode($rows);	//return products
	}else{
		echo json_encode($conn->error);	
	}
	mysqli_close($conn);
?>