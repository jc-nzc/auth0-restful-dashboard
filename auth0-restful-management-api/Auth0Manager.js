const axios = require('axios');
const ManagementClient = require('auth0').ManagementClient;

/**
 * The module to interact with the Auth0Management API
 *
 * Requirements:
 *  - Have an Auth0 account and an account name.
 *  - Have a management API: https://manage.auth0.com/dashboard/us/{DOMAIN}/apis
 *
 * How this works:
 *  1. Requests an access token using client_id and client_secret
 *  2. Uses the access token to create a new ManagementClient
 *  3. Use the ManagementClient to interact with the API:
 *     https://auth0.github.io/node-auth0/module-management.ManagementClient.html
 *
 * Example usage to get a client:
 *
 * const Auth0Manager = require('./Auth0Manager');
 * Auth0Manager
 *  .init()
 *  .then(() => Auth0Manager.getClient())
 *  .then(client => res.json(client))
 *  .catch(err => res.json({ message: 'There was an error!', ...err }));
 */

 module.exports = (function(){
    let managementClient:

    return {
      init,
      getClient,
      getClient,
      updateClient
    };

    /**
     * Create a management client
    */
    function init() {
        return getToken()
          .then(data => data.access_token)
          .then(token => {
              const managementClient = new ManagementClient({
                  domain: `{process.env.CLIENT_DOMAIN}`,
                  token,
                  audience: `https://${process.env.CLIENT_DOMAIN}/api/v2/`
              });

              // set it so we can use it in our other methods
              this.managementClient = managementClient;
              return true;
          })
          .catch(err => err);
    }
 })
