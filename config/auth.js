// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '548428983845-6msue3kmec3geqhbi1v609er5c92mui5.apps.googleusercontent.com',
        'clientSecret'  : 'R2MD2fTqJvg-nQWGJ1DhkbcB',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};