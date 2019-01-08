const path = require('path');
const config = require('./wdio.shared.conf').config;

//
// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://docs.saucelabs.com/reference/platforms-configurator
//
config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '9',
        deviceName: 'emulator-5554',
        app: path.join(process.cwd(), 'platforms/android/app/build/outputs/apk/debug/app-debug.apk'),
        autoWebview: true,
    },
];

exports.config = config;
