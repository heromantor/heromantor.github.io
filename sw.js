importScripts('https://push-static.dbankcdn.com/hms-messaging.js');
importScripts('/app.js');

messaging = hmsMessaging();

/*
messaging.getToken().then((currentToken) => {
    if (currentToken) {
        // Obtain a token.
        console.log('Current token: ', currentToken);
    } else {
        console.log('No Instance ID token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});   
*/

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[hms-messaging-sw.js] Received background message.', payload);
    // Customize the notification panel.
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/hms-logo.png'
    };

     return self.registration.showNotification(notificationTitle, notificationOptions);
});
