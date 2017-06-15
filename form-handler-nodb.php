<?php
        if(isset($_POST['name']) && !empty($_POST['name'])){
                $name = $_POST['name'];
                $email = $_POST['email'];
                $phonenum = $_POST['phonenum'];
                $message = $_POST['message'];
                $finalMessage = "Name: ".$name.
                " || Email: ".$email.
                " || Phone Number: ".$phonenum.
                " || Message: ".$message;
//Insert your email here
                mail("bennyjoe100@hotmail.com", 'Message received from website contact form.', $finalMessage);
                echo 'Thank you for your submission.  Please <a href="index.html">Click here to return to our homepage.';
        }
?>

<!--$msg = "New contact form submission!\nName: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone . "\nEmail: " . $email;
$msg = wordwrap($msg,70);
mail($myemail,"New Form Submission",$msg);
mail($email,"Thank you for your form submission",$msg);
echo 'Thank you for your submission.  Please <a href="index.html">Click here to return to our homepage.'; //-->