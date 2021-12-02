import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
export default class App extends Component {
    render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
  }