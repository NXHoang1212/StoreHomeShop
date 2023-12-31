/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import ShortcutBadge from 'react-native-app-badge';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

notifee.onBackgroundEvent(({ type, detail }) => {
    if (type === EventType.BACKGROUND_ACTION_PRESS) {
        console.log('User pressed background action', detail);
    }
});
notifee.setBadgeCount(1);
ShortcutBadge.setCount(1);
AppRegistry.registerComponent(appName, () => App);
