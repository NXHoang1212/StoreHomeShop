/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

notifee.onBackgroundEvent(({ type, detail }) => {
    if (type === EventType.BACKGROUND_ACTION_PRESS) {
        // Xử lý sự kiện nhấn nút trên thông báo khi ứng dụng đang ở trong trạng thái nền
        // ...
    }
});

AppRegistry.registerComponent(appName, () => App);
