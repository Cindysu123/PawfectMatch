// Function to fetch access token from Petfinder API
const fetchAccessToken = async () => {
  // Your client key
  const key = 'uULurLgufMF4NfMhZgbp8ThtgybvQmLMwT2sLClSD9GZl34Z7k';
  
  // Your client secret
  const secret = '5qP0xjGa93DqFcJWx6whJa74lsMz3sov17prU12h';

  // Make a POST request to the token endpoint with the client credentials
  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // Content type for the request
    },
    body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`, // Body with client credentials
  });

  // Parse the JSON response
  const data = await response.json();

  // Return the access token
  return data.access_token;
};

// Export the function for use in other parts of the application
export default fetchAccessToken;
