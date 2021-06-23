import * as React from "react";
import {Text} from 'react-native';
import Container from "../components/Container";

interface Props {
}

interface State {
}

class Gallery extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Container>
                <Text>
                    This is Gallery Screen
                </Text>
            </Container>
        )
    }
}


export default Gallery;
