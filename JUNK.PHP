<?php

// Get the form data
$name = $_POST['Junk'];

// Redirect the user to the new page
header("Location: index.html?name=$name");
exit;

?>
