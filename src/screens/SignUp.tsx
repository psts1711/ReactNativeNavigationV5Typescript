import * as React from "react";
import {Text} from 'react-native';
import Container from "../components/Container";

interface Props {
}

interface State {
}

class SignUp extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Container>
                <Text style={{alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
                    Hello World... This is SignUp Screen
                </Text>
            </Container>
        )
    }
}


export default SignUp;
