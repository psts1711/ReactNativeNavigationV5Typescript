import * as React from "react";
import {Text} from 'react-native';
import Container from "../components/Container";

interface Props {
}

interface State {
}

class More extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Container>
                <Text>
                    This is More Screen
                </Text>
            </Container>
        )
    }
}


export default More;
