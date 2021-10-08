function hmsMessaging() {
    const projectId = '737518067793605225';
    const appId = '322780611176135936';
    const apiKey = 'CwEAAAAA+e1e0bMr1dvI6tuv89ocV9HU5s4lQ8yyyMjF/ZUCEKfzOxdV6RN0AKMLWgOp43mGBUcrZaynZsQ+7Yts25CdtCTcZcQ=';

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
