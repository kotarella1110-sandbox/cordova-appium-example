# Cordova Appium Example

## Setup

Install the dependencies packages.

```
$ npm install
```

Run appium-doctor to ensure your machine is set up correctly.

```
$ npm run appium-doctor
```

build the Cordova application.

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
