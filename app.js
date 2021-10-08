function hmsMessaging() {
    const projectId = '737518067793605225';
    const appId = '732071094273459264';
    const apiKey = '732071094273459264';

    console.log(`projectId = ${projectId}`);
    console.log(`appId = ${appId}`);
    console.log(`apiKey = ${apiKey}`);

    // Configure web app information.
    var hmsConfig = {
        apiKey: apiKey,
        appId: appId,
        projectId: projectId,
        countryCode: "ru"
    };

    // Initialize the WebPush SDK.
    hms.initializeApp(hmsConfig);

    return hms.messaging();
}
