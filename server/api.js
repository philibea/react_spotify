const express = require('express');
const path = require('path');
const request = require('request');
const cors = require('cors');
/* eslint-disable no-console */

const port = process.env.PORT || 3001;
const app = express();

const client_id = '9fd0ec958f8445d3bbf66a61186b4237'; // Your client id
const client_secret = '49e45838562e409986cfce445fb513e6'; // Your secret
const api_token = 'BQDSwgnJGyR0DluksF2qfoQS2P9VreiI1WGTD3h-y1hsLXcbPHtBLVxonO1SXhTyWGffdO2SsEOCxI0En0M';
const redirect_uri = 'http://localhost:3001/callback/'; // Your redirect uri

const url = {
  token: 'https://accounts.spotify.com/api/token',
  search: 'https://api.spotify.com/v1/search',
  artists: 'https://api.spotify.com/v1/artists/',
  albums: 'https://api.spotify.com/v1/albums/',
};

const spotify = {
  client_id,
  client_secret,
  access_token : '',
  refresh_token: '',
};

const authOptions = {
  form: {
    grant_type: 'client_credentials'
  },
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  json: true,
};

const apiRequest = {
  headers: {
    'Authorization': 'Bearer ' + spotify.access_token
  },
  json: true,
};

app.get('/api/credential', (req,res) => {
  Object.assign(authOptions, { url: url.token });
  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      spotify.access_token = body.access_token,
      spotify.refresh_token = body.refresh_token;
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      Object.assign(apiRequest, { headers: { Authorization: 'Bearer ' + spotify.access_token }});
      res.send(spotify);
    }
    else {
      res.send(error);
    }
  });
});


app.get('/api/search', (req,res) => {
  const { artist } = req.query;
  const a =  url.search + `?q=${artist}&type=artist&limit=20`;
  Object.assign(apiRequest, { url: a });
  reqs(req,res);
});

app.get('/api/artist/:id', (req,res) => {
  Object.assign(apiRequest, {url: url.artists + req.params.id + '/albums'});
  reqs(req,res);
});

app.get('/api/album/:id', (req,res) => {
  Object.assign(apiRequest, {url: url.albums + req.params.id + '/tracks'});
  reqs(req,res);
});

const reqs = (req,res) => {
  request.get(apiRequest, (error, response, body) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    if (!error && response.statusCode === 200) {
    res.setHeader('Content-Type', 'application/json');
    res.json(response.body);
    } else {
      res.send(error);
    }
  });
};

app.use(cors());
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server listening : http://localhost:%s', port);
  }
});

