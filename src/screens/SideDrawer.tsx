import * as React from "react";
import {Button, Text} from 'react-native';
import Container from "../components/Container";

interface Props {
}

interface State {
}

class SideDrawer extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    logoutHandler=()=>{

    }

    render(){
        return(
            <Container>
                <Text style={{alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
                    This is Side Drawer
                </Text>
                <Button title={'Logout'} onPress={()=>this.logoutHandler()}/>
            </Container>
        )
    }
}


export default SideDrawer;
