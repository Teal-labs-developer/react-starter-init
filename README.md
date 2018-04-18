
  

# React Native Init

:fire: :tada: A React-Native starter kit with Google Signin + Onesignal + Sentry + Code Push + React-Navigation + Redux :tada: :fire:

  

## Includes

*  [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native)

*  [React Navigation](https://reactnavigation.org/)

*  [Redux](https://github.com/reactjs/redux)

*  [Code Push](https://github.com/Microsoft/react-native-code-push)

*  [Sentry](https://github.com/getsentry/react-native-sentry)

*  [OneSignal](https://github.com/geektimecoil/react-native-onesignal)

*  [Google SignIn](https://github.com/devfd/react-native-google-signin)

## Requirements

* Globally installed [Node](https://nodejs.org/) 7.x or better

*  [Xcode](https://developer.apple.com/xcode/) for iOS Development

*  [Android SDK](https://developer.android.com/sdk/) for Android development

*  [React-Native-CLI](https://facebook.github.io/react-native/docs/getting-started.html)

# Get Started

1.  ## :arrow_down: Installation

Fire command prompt and run following commands :

  

```

  

$ git clone https://github.com/Teal-labs-developer/react-starter-init.git

$ cd react-starter-init && npm install

  

// Run on ios

$ react-native run-ios

  

// Run on android

$ react-native run-android

  

```

  

2.  ## :clipboard: Documentation :clipboard:

To get this project running with all dependencies, follow steps given below :

1. ## Google Signin

We are using [react-native-google-signin](https://github.com/devfd/react-native-google-signin) for Google Signin. For user authentication and push notification we will be using [Firebase](https://firebase.google.com/). First we setup our firebase app for both platforms.

* Create a new account / Log in to your account

* Create a new project with required information

### Generate Release/Debug keystores

Fire up console in your project folder and run following command :

```

// For Debug

keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

// For Release

keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

```

> Move the .keystore file generated to android/app folder.

Make sure your *gradle.properties* file in *android/app* should look like following :

![gradle.properties](https://image.ibb.co/jwtFGn/carbon_1.png)

Now add firebase individually to your android and iOS app. You can check bundle id from _build.gradle_ file in _android/app_. Follow steps according to platform :

1. **Android**
	You need to generate SHA and add the generated fingerprint to your firebase config for android app.
	```
	// For Debug
	keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
	// For Release
	keytool -list -v -keystore [keystore path] -alias [alias-name] -storepass [storepass] -keypass [keypass]
	```

	Go to Firebase > Project Settings ![enter SHA](https://image.ibb.co/hY3t6n/Screen_Shot_2018_04_18_at_1_10_11_PM.png)

	  

	After adding both SHA fingerprint of Debug and Release download _google-services.json_ file and replace it with your *android/app/google-services.json file.*

2.  **iOS**

	Add new iOS app in your Firebase project and follow instructions. Download the *GoogleService-Info.plist*.

	Open Xcode and switch to Info tab. You need to give _url types_ which we will get from *.plist* file _reverse client id_ field.

	![info tab](https://preview.ibb.co/iVtDp7/Screen_Shot_2018_04_18_at_1_34_39_PM.png)

	Get Bundle Id and Reverse Client Id from .plist file.

	![bundleid](https://preview.ibb.co/bGfUwn/Screen_Shot_2018_04_18_at_1_42_25_PM.png)

	Navigate to *App.js* file and change *iosClientId * in *hasPlayServices*

  
  

	![hasplayServices](https://image.ibb.co/ckqb97/Screen_Shot_2018_04_18_at_1_46_29_PM.png)

  

	For more configuration in Google Signin, follow instructions from [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin) .
3.  ## OneSignal
	[OneSignal](https://onesignal.com/) provides a simple interface to push notifications and email.
	* Create an account
	* Add a new app
* Configure individually for both platforms
4. **Android**
Open your firebase project and switch to Cloud Messaging tab and copy required fields for configuring android app
* Google Server API Key: ```/* insert Server key */```
* Google Project Number: ```/* insert Sender Id here */```
![cloud messaging](https://image.ibb.co/dsKHhS/firebase1.png)

	You need to replace * ADD_ONE_SIGNAL_APP_ID, ADD_FIREBASE_SENDER_ID*. You will get *ADD_ONE_SIGNAL_APP_ID* from App settings of OneSignal Project.

	> https://onesignal.com/apps/enter-your-app-id/settings#tab_keys_and_ids

	  

	And *ADD_FIREBASE_SENDER_ID* will be Sender Id from Firebase Project as given in picture above.

  

	![onesignal app id](https://image.ibb.co/no8M97/Screen_Shot_2018_04_18_at_2_36_35_PM.png)

	2. **iOS**

	For iOS, you will be prompted to give .p12 file. Read from [here](https://support.magplus.com/hc/en-us/articles/203808748-iOS-Creating-a-Distribution-Certificate-and-p12-File) how to get .p12 file

	* Now open *AppDelegate.m* in *project-name/ios/project-name* folder and change

		*oneSignalAppId* with the one you get on creating a new app on Onesignal platform.
		
		![oneSignalAppId](https://image.ibb.co/hYziNS/Screen_Shot_2018_04_18_at_2_50_13_PM.png)
3.  ## Sentry
	[Sentry](https://sentry.io/) provides open source error tracking that shows you every crash in your stack as it happens, with the details needed to prioritize, identify, reproduce, and fix each issue.

	* Create your account
	* Add a new project
	* Now go to *sentry.properties* file in both android and iOS folder
	Note : Your *sentry.properties* file should look like this

	  

	![onesignal](https://image.ibb.co/n1qUwn/Screen_Shot_2018_04_18_at_2_57_37_PM.png)

	Now open *index.js* and change *ADD_SENTRY_CLIENT_KEY* from DSN https://sentry.io/teal-labs/your-project-name/settings/keys/

	![](https://image.ibb.co/fFrmbn/Screen_Shot_2018_04_18_at_3_02_40_PM.png)

4.  ## Code Push

  

## :poop: Troubleshooting :poop:

If you have any problem, search for the issues in this repository. If you don't find anything, you can raise an issue [here](https://github.com/Teal-labs-developer/react-starter-init/issues).

  

## References

*  [Generating keystores](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores)

*  [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin)