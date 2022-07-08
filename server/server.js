import fetch from 'node-fetch';
import express from 'express';

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/weather', (req, res) => {
  const latitude = req.query.lat;
  const longitude = req.query.lon;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin`;
  const result = fetch(url);
  result.then(response => response.json())
    .then(data => res.json(data));
});

app.get('/randomMovie', (req, res) => {
  const url = 'https://k2maan-moviehut.herokuapp.com/api/random';
  const result = fetch(url);
  result.then(response => response.json())
    .then(data => res.json(data));
});
