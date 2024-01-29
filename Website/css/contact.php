<?php
// Get the form data
$familyname = $_POST['familyname'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Send the email
$to = 'seppe.ghekiere@student.ehb.be';
$subject = 'New contact form submission';
$headers = 'From: ' . $email;
$body = "Name:$familyname $name\nEmail: $email\nMessage:\n$message";

if (mail($to, $subject, $body, $headers)) {
  // Email sent successfully
  echo 'Thank you! Your message has been sent.';
} else {
  // Email failed to send
  echo 'Sorry, there was a problem sending your message. Please try again later.';
}
?>