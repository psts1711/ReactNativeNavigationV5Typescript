import * as React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';

export interface Props {
    children: any
    containerStyle?: ViewStyle|ViewStyle[]
}

const Container = (props:Props)=>{
    return <SafeAreaView style={[{flex:1, alignItems:'center', justifyContent:'center'}, props.containerStyle]}>
        {props.children}
    </SafeAreaView>
}
Container.defaultProps = {};
export default Container;
