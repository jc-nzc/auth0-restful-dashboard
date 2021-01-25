const express = require('express');
const bodyParser = require('body-parser');
const Auth0Manager = require('./Auth0Manager');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

require('dontenv').config();
const apiPrefix = './api';

const app = express();

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.CLIENT_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.API_IDENTIFIER,
    issuer: `https://${process.env.CLIENT_DOMAIN}/`,
    algorithms: ['RS256']
  });
