const fetchAccessToken = async () => {
  const key = 'SzNq2t00bKk9SEaHchuwHfPyxdkbbjAAfR6gtEt3mbLwTVQrdn';
  const secret = 'pMYaXNh9pTUETArkCCNYUbPzMnnv6tD9u7i984wx';

  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
  });
  const data = await response.json();
  return data.access_token;
};

export default fetchAccessToken;
