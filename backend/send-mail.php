<?php
header('Content-Type: application/json');

header("Access-Control-Allow-Origin: http://rozwonhealth.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


// Hämta JSON-data
$input = json_decode(file_get_contents("php://input"), true);

// --- Formulärdata ---
$name = strip_tags($input['name'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = strip_tags($input['message'] ?? '');
$recaptcha = $input['captchaResponse'] ?? '';


$config = include(__DIR__ . '/../config/secrets.php');
$email_user = $config['email_user'];
$recaptcha_secret = $config['recaptcha_secret'];


// --- Validering ---
if (!$name || !$email || !$message || !$recaptcha) {
    echo json_encode(['success' => false, 'error' => 'All fields and reCAPTCHA are required']);
    exit;
}

// --- reCAPTCHA ---
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha");
$captcha_success = json_decode($verify);

if (!$captcha_success->success) {
    echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed']);
    exit;
}

// --- Skicka mejlet ---
$to = $email_user;
$subject = "New message from $name";
$headers = "From: $email_user\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";


$body = "
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Message:</strong><br>" . nl2br($message) . "</p>
";

// --- Skicka mejl via Stratos inbyggda mailserver ---
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
} else {
    echo json_encode(["success" => false, "error" => "Mail sending failed"]);
}
?>
