importScripts('https://push-static.dbankcdn.com/hms-messaging.js');

const apiKey = localStorage['HMS_API_KEY']
const appId = localStorage['HMS_APP_ID']

console.log(appId = ${appId});
console.log(apiKey = ${apiKey});

// Configure web app information.
var hmsConfig = {
    apiKey: apiKey,
    appId: appId,
    countryCode: "ru"
};

// Initialize the WebPush SDK.
hms.initializeApp(hmsConfig);
const messaging = hms.messaging();

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
