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
    messaging.usePublicVapidKey("BO56cwzeyARySlFTxtRf-gZiA5MHY0P3_YKf0kJIP9zwSAmpzjqnFbcgHEibglDbwL3BfPtBa05ABPb3PI53j9A");

    return messaging;
}
