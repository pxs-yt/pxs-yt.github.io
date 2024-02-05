function init() {
    gapi.client.init({
      apiKey: 'AIzaSyAu216oiOvXe863IjHF2T4Peh1qHECuHWw',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    });
}


gapi.auth2.authorize({
    client_id: '838358233425-dlrlsgdumvra7i4v1a3d74pca0ofeou1.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  }, handleAuthResult);


