const express = require('express');
const app = express();

app.use('/imgs', express.static('imgs'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>IT412 Final Project</title>
        <style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Arial, sans-serif;
            min-height: 100vh;
            background: url('imgs/pink.gif') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.35);
            z-index: 0;
            animation: fadeInUp 1s ease-out;
          }
          .card {
            position: relative;
            z-index: 1;
            background: rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            border-radius: 24px;
            padding: 48px 56px 36px 56px;
            text-align: center;
            backdrop-filter: blur(8px);
            color: #fff;
            max-width: 420px;
            width: 100%;
            animation: fadeInUp 0.8s ease-out;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
          }
          .profile-img {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 50%;
            border: 5px solid #fff;
            box-shadow: 0 4px 16px rgba(0,0,0,0.25);
            margin-bottom: 24px;
            background: #eee;
            animation: scaleIn 0.6s ease-out 0.2s both;
            transition: transform 0.3s ease;
          }
          .profile-img:hover {
            transform: scale(1.08) rotate(5deg);
          }
          h1 {
            margin: 0;
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 1px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.18);
            animation: slideInDown 0.7s ease-out 0.3s both;
          }
          h2 {
            margin-top: 10px;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 1px;
            animation: slideInDown 0.7s ease-out 0.4s both;
          }
          p {
            margin-top: 22px;
            font-size: 20px;
            font-style: italic;
            color: #f8f8f8;
            text-shadow: 0 1px 4px rgba(0,0,0,0.15);
            animation: slideInDown 0.7s ease-out 0.5s both;
          }
        </style>
      </head>
      <body>
        <div class="overlay"></div>
        <div class="card">
          <img class="profile-img" src="imgs/cinds.jpg" alt="Profile Photo" />
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
  console.log(`Server running on port ${port}`);
});
