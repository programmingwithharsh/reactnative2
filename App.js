import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import About from './About';
import Homepage from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Catalogpage from './Catalog';
import CatalogDetail from './CatalogDetail';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName="Dashboard"
          headerMode="screen"
        >

          <Stack.Screen
            name="Dashboard"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Dashboard" />
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="News" />
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              header: () => <Header headerDisplay="About Globomantics" />
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              header: () => <Header headerDisplay="Contact" />
            }}
          />
          <Stack.Screen
            name="Catalog"
            component={Catalogpage}
            options={{
              header: () => <Header headerDisplay="Globomantics Robotics" />
            }}
          />
          <Stack.Screen
            name="CatalogDetail"
            component={CatalogDetail}
            options={{
              header: () => <Header headerDisplay="Product Information" />
            }}
          />


        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
  }
}
