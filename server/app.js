if (process.env.NODE_ENV === undefined || process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();

const API_URL = 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2';

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/champions', (req, res) => {
  const apiUrl = API_URL + '/champion?champData=all&api_key=' + process.env.LOL_API_KEY;

  axios.get(apiUrl, {
      params: {
        champData: 'all'
      }
    })
    .then((response) => {
      var data = {},
      keys = response.data.keys,
      champions = response.data.data

      for(key in keys) {
        var item = champions[keys[key]];

        data[key] = {
          key: key,
          tags: item.tags,
          lore: item.lore,
          info: item.info,
          name: item.name,
          title: item.title,
          image: item.image,
          skins: item.skins
        }
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ payload: data });
    })
    .catch(function (error) {      
      res.send({
        status: 400,
        error: "Unexpected error occurred."
      })
    });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
