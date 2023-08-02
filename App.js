import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";


import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify, Analytics} from 'aws-amplify';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);
Analytics.disable();

 function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);