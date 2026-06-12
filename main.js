<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agro Forte - Futuro Sustentável</title>

<style>
    body{
        font-family: Arial, sans-serif;
        text-align:center;
        background-color:#e8f5e9;
        margin:0;
        padding:20px;
    }

    h1{
        color:#2e7d32;
    }

    .card{
        background:white;
        max-width:500px;
        margin:auto;
        padding:20px;
        border-radius:10px;
        box-shadow:0 0 10px rgba(0,0,0,0.2);
    }

    button{
        background:#2e7d32;
        color:white;
        border:none;
        padding:10px 20px;
        border-radius:5px;
        cursor:pointer;
        font-size:16px;
    }

    button:hover{
        opacity:0.9;
    }

    #status{
        margin-top:20px;
        font-size:20px;
        font-weight:bold;
    }
</style>
</head>
<body>

<h1>🌱 Agro Forte, Futuro Sustentável 🤖</h1>

<div class="card">
    <h2>Monitoramento Inteligente da Plantação</h2>

    <p>Umidade do Solo:</p>
    <h3 id="umidade">--%</h3>

    <button onclick="verificarSolo()">
        Verificar Solo
    </button>

    <div id="status"></div>
</div>

<script>
function verificarSolo() {

    let umidade = Math.floor(Math.random() * 101);

    document.getElementById("umidade").innerText = umidade + "%";

    if (umidade < 40) {
        document.getElementById("status").innerHTML =
        "💧 Solo seco! Irrigação automática ativada.";
    } else {
        document.getElementById("status").innerHTML =
        "✅ Solo com umidade adequada. Irrigação desligada.";
    }
}
</script>

</body>
</html>