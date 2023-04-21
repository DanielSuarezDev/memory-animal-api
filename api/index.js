const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

app.get('/api/animals', async (req, res) => {
  const pairsCount = req.query.pairs_count || 6;

  try {
    const response = await axios.get(`https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=${pairsCount}`);
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
