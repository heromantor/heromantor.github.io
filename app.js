function hmsMessaging() {
    var hmsConfig = {
       "apiKey":"TMHHvt8AN578n4N-kwM3Rlxqqffx2ncM9Wq6Tmty",
        "projectId":"737518067793605225",
        "appId":"322780611176135936",
        "countryCode":"RU"
    };
    
    console.log(hmsConfig);

    //Initialize Hms
    hms.initializeApp(hmsConfig);
    
    const messaging = hms.messaging();

    return messaging;
}
