require('dotenv').config();

const shopifyConfig = {
  storeUrl: process.env.SHOPIFY_STORE_URL,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN
};

module.exports = shopifyConfig;
