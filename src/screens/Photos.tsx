import * as React from "react";
import {Button, Text} from 'react-native';
import Container from "../components/Container";
import {Utils} from "../Utils/Utils";

interface Props {
    navigation:any;
}

interface State {
}

class Photos extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Container>
                <Text>
                    This is Photo Screen
                </Text>
                <Button title={'Open Gallery'} onPress={()=>this.props.navigation.navigate(Utils.screenNames.GALLERY)}/>
            </Container>
        )
    }
}


export default Photos;
