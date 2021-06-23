import * as React from "react";
import {Text, Button} from 'react-native';
import Container from "../components/Container";
import {Utils} from "../Utils/Utils";
import {AsyncStorage} from "react-native";
import {UserActions} from "../actions/UserAction";
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";

interface Props {
    navigation:any;
    route:any;
    UpdateUserAction:any;
}

interface State {
}

class Login extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
    }

    loginHadler=async()=>{
       await AsyncStorage.setItem(Utils.userKey, JSON.stringify({loggedIn:true}));
       this.props.UpdateUserAction({isLoggedIn: true})
    }

    render(){
        return(
         <Container>
             <Text>
                 Hello World... This is Login Screen
             </Text>
             <Button title={'Login'} onPress={()=>this.loginHadler()}/>
             <Button title={'SignUp'} onPress={()=>this.props.navigation.navigate(Utils.screenNames.SIGNUP)}/>
         </Container>
        )
    }
}

const mapDispatchToState=dispatch=>bindActionCreators({
    UpdateUserAction: UserActions.UpdateUserAction
}, dispatch)
export default connect(null, mapDispatchToState)(Login);
