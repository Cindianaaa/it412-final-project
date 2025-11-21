const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>IT412 Final Project</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
          .card {
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            padding: 40px 50px;
            text-align: center;
            backdrop-filter: blur(10px);
          }
          h1 {
            margin: 0;
            font-size: 42px;
            font-weight: bold;
          }
          h2 {
            margin-top: 10px;
            font-size: 26px;
            font-weight: 300;
          }
          p {
            margin-top: 20px;
            font-size: 20px;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Cindy Ramirez Diancin</h1>
          <h2>IT BA 4101</h2>
          <p>"It's the imperfections that make things beautiful - Jenny Han"</p>
        </div>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
