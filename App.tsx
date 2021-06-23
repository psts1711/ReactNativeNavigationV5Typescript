import * as React from 'react';
import {Text, SafeAreaView} from "react-native";
import Navigator from "./src/Utils/navigtion/Navigator";
import {Provider} from "react-redux";
import store from "./src/reducer";

class App extends React.Component<any,any>{
  componentDidMount(): void {
  }

  render(){
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}

export default App;
