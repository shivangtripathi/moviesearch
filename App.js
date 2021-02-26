import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//REDUX
import { createStore, applyMiddleware } from 'redux' ;
import { Provider } from 'react-redux'
import reducers from './source/reducers/variables' ;
import thunk from 'redux-thunk';
//SCREENS
import LoginScreen from './source/screens/login';
import HomeScreen from './source/screens/home';
import SearchScreen from './source/screens/search';



const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
        headerShown:false,
        animationEnabled:'true'
      }}/>
      <Stack.Screen name="HomeStack" component={HomeTabNavigation} options={{
        headerShown:false,
        animationEnabled:'true'
      }}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      labeled={false}
      activeColor="#000"
    inactiveColor="#dedede"
    barStyle={{ backgroundColor: 'white' }}
   >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon: ({color}) => (
          ( color === "#000") ? <Image source={require("./source/assets/home-selected.png")} style={{ width: 25, height: 25 }}/> : <Image source={require("./source/assets/home.png")} style={{ width: 25, height: 25 }}/> )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ tabBarIcon: ({color}) => (
          ( color === "#000") ? <Image source={require("./source/assets/user-selected.png")} style={{ width: 25, height: 25 }}/> : <Image source={require("./source/assets/user.png")} style={{ width: 25, height: 25 }}/> )
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk)) ;
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
        <MainStack />
    </NavigationContainer>
    </Provider>
  );
};

export default App;