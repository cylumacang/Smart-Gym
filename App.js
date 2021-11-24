import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogIn from './pages/LogIn';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import HiddenPage from './pages/HiddenPage';
import Register from './pages/Register';
import MoreBMi from './pages/MoreBMI';
import membership from './pages/membership'; 

import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};


function LogInScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#145DA0', //Set Header color
        },
        headerTintColor: 'white', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          title: 'Log in', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
        }}
      />
       <Stack.Screen
        name="membership"
        component={membership}
        options={{
          title: 'Membership', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}



function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="BMI information"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#145DA0', //Set Header color
        },
        headerTintColor: 'white', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'BMI Information', //Set Header Title
        }}
      />
      <Stack.Screen
        name="MoreBMI"
        component={MoreBMi}
        options={{
          title: 'Membership', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#145DA0', //Set Header color
        },
        headerTintColor: 'white', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Exercise Tracker', //Set Header Title
        }}
      />
      <Stack.Screen
        name="HiddenPage"
        component={HiddenPage}
        options={{
          title: 'Recommended Exercises', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Third Page">
      <Stack.Screen
        name="Third Page"
        component={ThirdPage}
        options={{
          title: 'Daily Food Calorie', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#145DA0', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Fourth Page">
      <Stack.Screen
        name="Fourth Page"
        component={FourthPage}
        options={{
          title: 'Notes', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#145DA0', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#274472',
          itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="LogIn"
          options={{ drawerLabel: 'Login' }}
          component={LogInScreenStack}
        />
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'User BMI Info' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Exercise Tracker' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Daily Food Calorie' }}
          component={thirdScreenStack}
        />

        <Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'Notes Page' }}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
