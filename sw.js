importScripts('https://push-static.dbankcdn.com/hms-messaging.js');
importScripts('/app.js');

messaging = hmsMessaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[hms-messaging-sw.js] Received background message.', payload);
});
