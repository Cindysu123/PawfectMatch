// api.js
const fetchAccessToken = async () => {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=SzNq2t00bKk9SEaHchuwHfPyxdkbbjAAfR6gtEt3mbLwTVQrdn&client_secret=pMYaXNh9pTUETArkCCNYUbPzMnnv6tD9u7i984wx`,
    });
  
    const data = await response.json();
    return data.access_token;
  };
  
  export default fetchAccessToken;
  