const clientId = '4f482d3452d04e2090916aed8c10631e';
const clientSecret = '2135116a364c49d8b65c3115ddef3f4c';
const baseUrl = 'https://api.spotify.com/v1/browse/';

const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    setToken(data.access_token);
};
export { clientId, clientSecret, baseUrl, token };

export default getToken;
