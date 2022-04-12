<!-- made with help from: https://www.youtube.com/watch?v=4q0gYjAVonI&ab_channel=DaniKrossing -->

<?php

    // if the form was submitted
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mainFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "denise.j.siu@gmail.com";
        $subject = "message: [".$mailFrom."]from denisesiu.ca";
        $headers = "From: ".$mailFrom;
        $txt = "Message from your portfolio site from ".$name.".\n\n".$message;


        // mail to
        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html");

    }

?>