<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vai de Bet - Plataforma de Apostas</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
    }
    header {
      background: #020617;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      margin: 0;
      color: #22c55e;
    }
    nav a {
      color: #e5e7eb;
      margin-left: 20px;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      color: #22c55e;
    }
    .container {
      padding: 30px;
    }
    .saldo {
      background: #020617;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: #020617;
      padding: 20px;
      border-radius: 10px;
    }
    .card h3 {
      margin-top: 0;
    }
    .odd {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #22c55e;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover {
      background: #16a34a;
    }
    footer {
      background: #020617;
      text-align: center;
      padding: 15px;
      margin-top: 40px;
      font-size: 14px;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <header>
    <h1>Vai de Bet</h1>
    <nav>
      <a href="#">Início</a>
      <a href="#">Esportes</a>
      <a href="#">Cassino</a>
      <a href="#">Perfil</a>
    </nav>
  </header>

  <div class="container">
    <div class="saldo">
      <h2>Saldo disponível</h2>
      <p>R$ <span id="saldo">1000.00</span></p>
    </div>

    <h2>Apostas em destaque</h2>
    <div class="cards">
      <div class="card">
        <h3>Futebol</h3>
        <p>Time A vs Time B</p>
        <div class="odd">
          <span>Vitória Time A</span>
          <span>1.80</span>
        </div>
        <button onclick="apostar(50)">Apostar R$50</button>
      </div>

      <div class="card">
        <h3>Basquete</h3>
        <p>Equipe X vs Equipe Y</p>
        <div class="odd">
          <span>Vitória Equipe X</span>
          <span>2.10</span>
        </div>
        <button onclick="apostar(50)">Apostar R$50</button>
      </div>

      <div class="card">
        <h3>E-sports</h3>
        <p>Clã Alpha vs Clã Beta</p>
        <div class="odd">
          <span>Clã Alpha vence</span>
          <span>1.55</span>
        </div>
        <button onclick="apostar(50)">Apostar R$50</button>
      </div>
    </div>
  </div>

  <footer>
    ⚠️ Plataforma genérica apenas para fins educacionais e de demonstração.
  </footer>

  <script>
    let saldo = 1000;

    function apostar(valor) {
      if (saldo >= valor) {
        saldo -= valor;
        document.getElementById('saldo').innerText = saldo.toFixed(2);
        alert('Aposta realizada com sucesso!');
      } else {
        alert('Saldo insuficiente!');
      }
    }
  </script>
</body>
</html>
