import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {useState, useEffect} from 'react';

import NativeIconicIcon from '../components/NativeIconicIcon';
import ProjectContext from '../contexts/ProjectContext';
import CountingScreen from '../screens/CountingScreen';
import DetailsStack from './DetailsStack';

import data from '../dummyData';

const Tab = createBottomTabNavigator();

function ProjectTabs({route}){
  const [observations, setObservations] = useState([]);
  const [variants, setVariants] = useState([]);
  const projectName = route.name;

  // load the dummy data the first time we load
  useEffect(()=>{
    const projectData = data.find((p)=>p.name === projectName)
    setObservations(projectData.observations);
    setVariants(projectData.variants);
  },[]);

  const sharedState = {
    name: projectName,
    observations,
    variants,
    addObservation:(newObservation)=>{setObservations([...observations, newObservation])}
  };

 
  return(
    <ProjectContext.Provider value={sharedState}>
    <Tab.Navigator  
      screenOptions={{headerShown:false}}
      >
      <Tab.Screen 
        name="Count" 
        component={CountingScreen} 
        options={{
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="checkmark-circle-outline" color={color} size={size} />
        }}
        />
      <Tab.Screen 
        name="Details Stack" 
        component={DetailsStack} 
        options={{
          tabBarLabel:'Data',
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="stats-chart" color={color} size={size} />
        }}
        />
    </Tab.Navigator>
    </ProjectContext.Provider>

  )
}

export default ProjectTabs;