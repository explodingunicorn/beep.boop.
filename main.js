var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'bSBzWkiTGVpK4fsCPdc4rJgGY',
  consumer_secret: 'THXnbUfKSWqNRrOCFnBDbb5MYhsoTLksf98WBbokAesnwY2kvA',
  access_token_key: '403000276-KNQp8tCf2MKc8Hgoz0QMbd2eH75fYeGLwPMS3ECQ',
  access_token_secret: 'GzanOJn1i4ehryEncdA4Dn8BEUP6ILUPmvTMEmTRDOTNR'
});

// client.get('trends/available', function(error, trends, response) {
//     if(error) throw error;
//     console.log(trends);
// })

client.get('trends/place', { Name: 'Worldwide', id: 1}, function(error, trends, response) {
    if(error) throw error;
    console.log(trends[0].trends);
})