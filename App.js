import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ProjectDrawer from './navigation/ProjectDrawer';

import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <NavigationContainer >
      <ProjectDrawer />
   
      <StatusBar style="auto" />

    </NavigationContainer>
  );
}

