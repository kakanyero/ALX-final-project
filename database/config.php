<?php
    $host = 'localhost';    // Host
    $user = 'root';         // User name
    $pswd = '';             // User password
    $db = 'ecommerce';      // Database Name

    // Making a connection to the database
    $conn = mysqli_connect($host, $user, $pswd, $db);

    // Check if the connection is made
    
    // if ($conn) {
    //     echo "Connection was made successfully";
    // }else {
    //     echo "505: Server connection error";
    // }
?>