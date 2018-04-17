import { AppRegistry } from 'react-native';
import setup from './js/setup';
import { Sentry } from 'react-native-sentry';
Sentry.config('https://48b5e82775d24ff5862b214bfaff54f5:bf4a2331f7974e39955f38a2b6aca1c3@sentry.io/1189658').install();

AppRegistry.registerComponent('ReactNativeInit', setup);
