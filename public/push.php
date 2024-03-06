<?php
header('Content-Type: application/json; charset=utf-8');
// https: //github.com/MbpMelborp/NUXT3_Melborp
$owner = "MbpMelborp";
$repo = "mb_astro_2024";
$token = "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";

$payload = new stdClass();
$payload->event_type = 'dependency_update';
$payload->client_payload = new stdClass();
$payload->client_payload->command = '';



$dispatchUrl = 'https://api.github.com/repos/' . $owner . '/' . $repo . '/dispatches';

// echo "Dispatching $dispatchUrl with payload: " . json_encode($payload) . "\n";

$ch = curl_init($dispatchUrl);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $token,
    'Content-Type: application/json',
    'User-Agent: Awesome-Octocat-App'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo json_encode($response);
