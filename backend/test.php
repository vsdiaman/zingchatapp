<!DOCTYPE html>
<html>
<head>
    <title>Página de Login</title>
</head>
<body>
    <h2>Login</h2>
    <form action="login.php" method="post">
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" required><br>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required><br>

        <input type="submit" value="Entrar">
    </form>
</body>
</html>

<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifica se os campos de usuário e senha foram preenchidos
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Substitua estas informações com o seu sistema de autenticação real
        $usuarios = array(
            "usuario1" => "senha1",
            "usuario2" => "senha2",
            // Adicione mais usuários e senhas conforme necessário
        );

        $username = $_POST["username"];
        $password = $_POST["password"];

        // Verifica se o usuário existe no array de usuários e se a senha está correta
        if (isset($usuarios[$username]) && $usuarios[$username] === $password) {
            // Autenticação bem-sucedida
            echo "Login bem-sucedido! Bem-vindo, " . htmlspecialchars($username);
            // Aqui você pode redirecionar o usuário para a página desejada após o login
        } else {
            // Autenticação falhou
            echo "Usuário ou senha incorretos. Tente novamente.";
        }
    }
}
?>
