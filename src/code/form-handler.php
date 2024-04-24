<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Встановіть адресу, на яку ви хочете отримувати заявки
    $to = "ira97brig@gmail.com";

    // Встановіть тему листа
    $subject = "Нова заявка з форми";

    // Створіть тіло листа
    $messageBody = "Ім'я: " . $name . "\n";
    $messageBody .= "Email: " . $surname . "\n";
    $messageBody .= "Повідомлення: " . $message . "\n";

    // Надіслати лист
    if (mail($to, $subject, $messageBody)) {
        echo "Заявка відправлена успішно!";
    } else {
        http_response_code(500);
        echo "Помилка при надсиланні заявки.";
    }
} else {
    http_response_code(400);
    echo "Помилка при надсиланні листа";
}
?>