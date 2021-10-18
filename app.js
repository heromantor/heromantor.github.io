function hmsMessaging() {
    var hmsConfig = {
        "apiKey":"GN0X4C3HDE53fOKw7-2QxsaO0iUcyZucOq0SBPvN",
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
