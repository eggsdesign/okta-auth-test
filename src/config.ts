import dotenv from 'dotenv';

dotenv.config();

const config = {
  issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.OKTA_CLIENT_ID,
  pkce: true,
};

export default config;
