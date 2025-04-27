const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/kullanıcı/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('memory.json'));
  res.json(data.kullanıcılar[req.params.id] || {});
});

app.post('/kullanıcı/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('memory.json'));
  data.kullanıcılar[req.params.id] = req.body;
  fs.writeFileSync('memory.json', JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(3000); // Yerel test için (Vercel’de kaldırılacak)
