
# React Native Init
:fire: :tada: A React-Native starter kit with React-Navigation + Code Push + Onesignal + Sentry + Google Signin :tada: :fire:

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
		### Generate  Release/Debug keystores
		Fire up console in your project folder and run following command :
		```
		// For Release  
		keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

		// For Debug  
		keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
		```
		
		> Move the .keystore file generated to android/app folder.  
		
		To generate SHA , run following commands, and add the generated SHA to your firebase config of android app.
		```
		// For Debug   
			keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
		// For Release  
			keytool -list -v -keystore [keystore path] -alias [alias-name] -storepass [storepass] -keypass [keypass]
		```

		Now add firebase individually to your android and iOS app. You can check bundle id from _build.gradle_ file in _android/app_. For **Android** we need to give SHA-1 fingerprint and download _google-services.json_ file.
		
		Make sure your *gradle.properties* file in *android/app* should look like following :
		![gradle.properties](https://image.ibb.co/jwtFGn/carbon_1.png)

		
		
		For **iOS**, open Xcode and switch to Info tab. You need to give _url types_ which we will get from *.plist* file _reverse client id_ field. Your GoogleSignin configure function should look like following.
		![google-signin](https://image.ibb.co/fOQ9Rn/googlesignclinetid.png)
		
		```
		import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';  
		  
		render() {  
		  
		  <GoogleSigninButton  
		    style={{width: 48, height: 48}}  
		    size={GoogleSigninButton.Size.Icon}  
		    color={GoogleSigninButton.Color.Dark}  
		    onPress={this._signIn.bind(this)}/>
		}
		  ```
		  For more configuration in Google Signin, follow instructions from [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin) .


	2. ## OneSignal
		OneSignal provides a simple interface to push notifications and email.

		* Create an account

		* Add a new app

		* We will configure individually for both platforms

		* Android

			Open your firebase project and switch to Cloud Messaging tab and copy required fields for configuring android app

			* Google Server API Key: ```/* insert Server key */```

			* Google Project Number: ```/* insert Sender Id here */```

		* iOS

			* For iOS, you will be prompted to give .p12 file. Read from [here](https://support.magplus.com/hc/en-us/articles/203808748-iOS-Creating-a-Distribution-Certificate-and-p12-File) how to get .p12 file
			* Now open *AppDelegate.m* in *project-name/ios/project-name* folder and 		change
			* *oneSignalAppId* with the one you get on creating a new app on Onesignal platform.

	3. ## Sentry
		Sentry provides open source error tracking that shows you every crash in your stack as it happens, with the details needed to prioritize, identify, reproduce, and fix each issue.

		* Create your account

		* Add a new project

		* Now go to *sentry.properties* file in both android and iOS folder
		Note : Your *sentry.properties* file should look like this

		![onesignal](https://image.ibb.co/bSvvGn/carbon.png)


## :poop: Troubleshooting :poop:
If you have any problem, search for the issues in this repository. If you don't find anything, you can raise an issue [here](https://github.com/Teal-labs-developer/react-starter-init/issues).

## References
*  [Generating keystores](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores)
*  [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin)
