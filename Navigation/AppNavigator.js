import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNavigator from './DrawerNavigator';

AppNavigator = createAppContainer(
    createSwitchNavigator({
        Main: DrawerNavigator
    })
);

export default AppNavigator;