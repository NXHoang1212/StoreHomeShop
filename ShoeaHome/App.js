import { View, Text, Alert, Platform, PermissionsAndroid, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginContextProvider } from './config/context/LoginContext';
import ContaintNavigator from './src/stack/ContaintNavigator';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from './config/context/ThemContext';
import Theme from './config/Theme';
import { LanguageProvider } from './config/context/LanguageContext';
import { CartContextProvider } from './config/context/CartContext';
import { FavouriteContextProvider } from './config/context/FavouriteContext';
import { OrderProvider } from './config/context/OrderContext';
import FlashMessage from 'react-native-flash-message';
import { NotfifeeProvider } from './config/context/NotifeeContext';
import notifee from '@notifee/react-native';
import ShortcutBadge from 'react-native-app-badge';
const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    let eventRegister = EventRegister.addEventListener('changeTheme', data => {
      setDarkmode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventRegister);
    };
  }, [darkmode]
  );
  return (
    <>
      <StatusBar
        barStyle={darkmode ? 'light-content' : 'dark-content'}
        backgroundColor={darkmode ? '#000000' : '#ffffff'}
        translucent={false}
      />
      <NavigationContainer>
        <ThemeContext.Provider
          value={darkmode === true ? Theme.dark : Theme.light}>
          <LoginContextProvider>
            <OrderProvider>
              <FavouriteContextProvider>
                <CartContextProvider>
                  <NotfifeeProvider>
                    <LanguageProvider>
                      <ContaintNavigator />
                      <FlashMessage position="top" />
                    </LanguageProvider>
                  </NotfifeeProvider>
                </CartContextProvider>
              </FavouriteContextProvider>
            </OrderProvider>
          </LoginContextProvider>
        </ThemeContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
