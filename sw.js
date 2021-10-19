importScripts('https://push-static.dbankcdn.com/hms-messaging.js');
importScripts('/app.js');

messaging = hmsMessaging();

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
