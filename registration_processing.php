<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $filename = 'registrations.json';

    if (file_exists($filename)) {
        $current_data = file_get_contents($filename);
        $array_data = json_decode($current_data, true);
    } else {
        $array_data = [];
    }

    $array_data[] = $data;

    if (file_put_contents($filename, json_encode($array_data, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
