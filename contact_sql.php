<?php
	$servername = "localhost:3310";
	$username = "root";
	$password = "";
	$database= "register";

	// Create connection

	$conn = mysqli_connect($servername, $username, $password, $database);

	//Check connection
	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}
	echo "<br>Connected successfully";

	//Create database

	// $sql = "CREATE DATABASE register";
	// if (mysqli_query($conn,$sql))
	//  {
	//    echo "Database created successfully";
	//  } else {
	//   echo "Error creating database: " . mysqli_error($conn);
	// }

	// Use database

    $sql = "USE register";
    if (mysqli_query($conn,$sql))
    {
        echo "<br>Using database register";
    } else {
        echo "<br>Error finding database: " . mysqli_error($conn);
    }

    //Creating table

	// $sql = "CREATE TABLE Contact(
	// 	id INT(3) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	// 	first_name VARCHAR(20) NOT NULL,
	// 	last_name VARCHAR(20) NOT NULL,
	// 	Email varchar(50) NOT NULL,
	// 	Contact INT UNSIGNED NOT NULL,
	// 	Message VARCHAR(1000) NOT NULL)";

	// if(mysqli_query($conn,$sql)){
	//     echo "<br>Table Contact created successfully";
	// }else {
	//     echo "Error creating table ". mysqli_error($conn);
	// }

    //Inserting data into table

	$Fname = $_POST['fname'];
	$Lname = $_POST['lname'];
	$Email = $_POST['email'];
	$contact = $_POST['mobile_number'];
	$message = $_POST['message'];

	$sql = "INSERT INTO Contact(first_name, last_name, Email, Contact, Message) VALUES ('$Fname','$Lname', '$Email', '$contact', '$message')";

	$result_set = mysqli_query($conn,$sql); //returns a non-zero value on success

    if($result_set)
    {
        echo "<br>Record was inserted successfully";
    }
    else 
    {
        echo "<br>record entry failed";
    }
mysqli_close($conn);

 //    $sql = "DROP TABLE Members";

 //    if(mysqli_query($conn,$sql)){
	//     echo "<br>Table Members droped";
	// }else {
	//     echo "Error creating table ". mysqli_error($conn);
	// }
?>