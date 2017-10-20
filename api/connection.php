<?php
	//localhost
	define("HOST","localhost");
	define("DB_NAME","shopping_list");
	define("USER","root");
	define("PASSWORD","");
	
	function getConnection(){
		$mysql = new mysqli(HOST,USER,PASSWORD,DB_NAME); 
		//check for error
		if($mysql->connect_error){
			echo "Fallo la conexion: "+$mysql->connect_error;
			exit();
		}
		return $mysql;	//return connection
	}
?>