import * as React from "react";
import {AsyncStorage, Button, Text} from 'react-native';
import Container from "../components/Container";

interface Props {
}

interface State {
}

class Logout extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    logoutHandler=()=>{
        AsyncStorage.clear()
    }

    render(){
        return(
            <Container>
                <Text style={{alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
                    Hello World... This is Logout Screen
                </Text>
                <Button title={'Logout'} onPress={()=>this.logoutHandler()}/>
            </Container>
        )
    }
}


export default Logout;
