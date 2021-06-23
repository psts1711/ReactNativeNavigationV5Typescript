import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AuthStack, DrawerStack, TabStack} from "./Routes";
import {useEffect} from "react";
import {AsyncStorage} from "react-native";
import {Utils} from "../Utils";

export interface Props {
}

const Navigator = (props:Props)=>{

    /* Not Working */
  /*  const [isLoggedIn, updateLoggedIn] = React.useState(false);
    useEffect(()=>{
        AsyncStorage.getItem(Utils.userKey).then((data)=>{
            if(!data){
                return;
            }else{
                updateLoggedIn(JSON.parse(data));
            }
        })
    });
     return <NavigationContainer>
        {isLoggedIn?DrawerStack():AuthStack()}
    </NavigationContainer>
    */



    return <NavigationContainer>
        {isLoggedIn?DrawerStack():AuthStack()}
    </NavigationContainer>
}
Navigator.defaultProps = {};
export default Navigator;
