import {Utils} from "../../Utils";
import Photos from "../../../screens/Photos";
import Gallery from "../../../screens/Gallery";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export const PhotoStack=()=>{
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false,
        }} initialRouteName={Utils.screenNames.PHOTOS}>
            <Stack.Screen name={Utils.screenNames.PHOTOS} component={Photos} />
            <Stack.Screen name={Utils.screenNames.GALLERY} component={Gallery} />
        </Stack.Navigator>

    )
}
