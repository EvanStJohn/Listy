import React from 'react';
import { Dimensions, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './../screens/HomeScreen';
import PasswordScreen from './../screens/PasswordScreen';

const {width} = Dimensions.get('window');

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 150, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 36}} >Listy</Text>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );

const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="md-home" size={24} style={{ color: tintColor }} />)
      }
    },
    Passwords: {
      screen: PasswordScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="md-key" size={24} style={{ color: tintColor }} />)
      }
    }
  }, 
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width * 2/3
  });

export default DrawerNavigator;