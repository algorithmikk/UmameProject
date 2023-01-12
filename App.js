import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";


import {NavigationContainer} from '@react-navigation/native';
import {Amplify} from 'aws-amplify';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
