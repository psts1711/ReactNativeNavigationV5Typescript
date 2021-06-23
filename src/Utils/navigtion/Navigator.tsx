import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {RootReducerState} from "../../reducer";
import {connect} from "react-redux";
import {AuthStack, DrawerStack} from "./Routes";
import {bindActionCreators} from 'redux'
import {UserActions} from "../../actions/UserAction";
import {AsyncStorage} from "react-native";
import {Utils} from "../Utils";
interface Props {
    isLoggedIn: boolean;
    UpdateUserAction:any;
}

interface State {
}

class Navigator extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {};
        AsyncStorage.getItem(Utils.userKey).then((data)=>{
            if(data){
                let isLoggedIn = JSON.parse(data).loggedIn
                console.log(isLoggedIn);
                this.props.UpdateUserAction({isLoggedIn: isLoggedIn})
            }
        })
    }

    render(){
        return(

            <NavigationContainer>
                {this.props.isLoggedIn?<DrawerStack/>: <AuthStack/>}
            </NavigationContainer>
        )
    }
}

const mapStateToProps=(state:RootReducerState)=>({
    isLoggedIn: state.userReducer.isLoggedIn
})

const mapDispatchToProps=dispatch=>bindActionCreators({
    UpdateUserAction: UserActions.UpdateUserAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
