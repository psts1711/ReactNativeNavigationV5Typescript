import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import {Utils} from "../Utils";
import More from "../../screens/More";
import {PhotoStack} from "./tab-route/PhotoStack";
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer'
import SideDrawer from "../../screens/SideDrawer";
import Gallery from "../../screens/Gallery";
import Logout from "../../screens/Logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const AuthStack=()=>{
    return (
        <Stack.Navigator initialRouteName={Utils.screenNames.LOGIN}>
            <Stack.Screen name={Utils.screenNames.LOGIN} component={Login} />
            <Stack.Screen name={Utils.screenNames.SIGNUP} component={SignUp} />
        </Stack.Navigator>
    )
}

const tabScreenOptions=({route})=>{
    let isTabVisible = true;
    if(route.state && route.state.index>0){
       isTabVisible = false;
    }
    return {
        tabBarIcon: ({color})=>{
            const icons = {[Utils.screenNames.PHOTOS]:'image-outline', [Utils.screenNames.MORE]:'ios-menu'}
            if(!icons[route.name]){
                return;
            }
            return <Icon name={icons[route.name]} size={24} color={color}/>
        },
        tabBarVisible:isTabVisible
    }
}

export const TabStack=()=>{
    return (
        <Tab.Navigator tabBarOptions={{
            inactiveTintColor:'black',
            activeTintColor:'orange',
        }} screenOptions={tabScreenOptions} initialRouteName={Utils.screenNames.PHOTOS}>
            <Tab.Screen name={Utils.screenNames.PHOTOS} component={PhotoStack}/>
            <Tab.Screen name={Utils.screenNames.MORE} component={More}/>
        </Tab.Navigator>
    )
}


export const DrawerStack=()=>{
    return (
        <Drawer.Navigator   drawerStyle={{
            backgroundColor: 'rgb(229,241,227)',
            width: 240,
        }} initialRouteName={Utils.screenNames.TAB} /*drawerContent={()=>SideDrawer}*/>
            <Drawer.Screen name={Utils.screenNames.TAB} component={TabStack}/>
            <Drawer.Screen name={Utils.screenNames.LOGOUT} component={Logout} />
        </Drawer.Navigator>
    )
}
