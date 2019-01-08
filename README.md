# Cordova Appium Example

This is a simple appium example for cordova applications.

This example is based on:

* [Cordova](https://cordova.apache.org/)
* [Appium](http://appium.io/)
* [WebdriverIO v5](https://webdriver.io/)
* [Jasmine](https://jasmine.github.io/)

## Cordova version

```
$ cordova --version
8.1.2 (cordova-lib@8.1.1)
```

## Setup

Install the dependencies packages.

```
$ npm install
```

Run appium-doctor to ensure your machine is set up correctly.

```
$ npm run appium-doctor
```

Build the Cordova application.

```
$ cordova build android --emulate
$ cordova build ios --emulate
```

## Run locally

Connect a device or start up an emulator. Ensure it matches the capabilities specified in `config/wdio.*.conf.js`.

Start the Appium server.

```
$ npm run appium
```

Run tests.

```
$ npm run test:e2e:android
$ npm run test:e2e:ios
```
