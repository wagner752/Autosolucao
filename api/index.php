<?php
// Set the content type to JSON
header('Content-Type: application/jscon');

//Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    // Create a response array
    $response = array(
        'messeger' => 'Hello, World!'
    );

    //Encode the response array to JSON and print it
    echo json_encode($response);
} else {
    //if the request method is not GET, return an error response
    http_response_code(405); // Method not allowed
    echo json_encode(array('error' => 'Method not allowed'));
}
?>