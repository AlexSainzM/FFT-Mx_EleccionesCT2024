<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputATPresidente = $_POST["inputATPresidente"];
    $inputProdPresidente = $_POST["inputProdPresidente"];
    $inputATSecretario = $_POST["inputATSecretario"];
    $inputProdSecretario = $_POST["inputProdSecretario"];
    $inputATAuxiliar1 = $_POST["inputATAuxiliar1"];
    $inputProdAuxiliar1 = $_POST["inputProdAuxiliar1"];
    $inputATAuxiliar2 = $_POST["inputATAuxiliar2"];
    $inputProdAuxiliar2 = $_POST["inputProdAuxiliar2"];
    $inputATAuxiliar3 = $_POST["inputATAuxiliar3"];
    $inputProdAuxiliar3 = $_POST["inputProdAuxiliar3"];
    $inputATAuxiliar4 = $_POST["inputATAuxiliar4"];
    $inputProdAuxiliar4 = $_POST["inputProdAuxiliar4"];
    

    try {
        require_once "dbh.inc.php";


        $query = "INSERT INTO nominacionesFFTCTMX2024 (presidenteAT, presidenteProd, secretarioAT, secretarioProd, aux1AT, aux1Prod, aux2AT, aux2Prod, aux3AT, aux3Prod, aux4AT, aux4Prod) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        $stmt = $pdo->prepare($query);

        $stmt->execute([$inputATPresidente, $inputProdPresidente, $inputATSecretario, $inputProdSecretario, $inputATAuxiliar1, $inputProdAuxiliar1, $inputATAuxiliar2, $inputProdAuxiliar2, $inputATAuxiliar3, $inputProdAuxiliar3, $inputATAuxiliar4, $inputProdAuxiliar4]);

        $pdo = null;
        $stmt = null;

        header("Location: ../index.html");

        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }

} else {
    header("Location: ../index.html");
}