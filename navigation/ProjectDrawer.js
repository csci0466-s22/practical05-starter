import { createDrawerNavigator} from '@react-navigation/drawer';

import ProjectTabs from './ProjectTabs';
import data from '../dummyData.json';


const Drawer = createDrawerNavigator();

function ProjectDrawer(){
  const drawerItems = data.map((project)=>(
    <Drawer.Screen 
      name={project.name} 
      key={project.name} 
      component={ProjectTabs}
      options={{
        headerStyle: {
          backgroundColor:project.color}
      }}  />
));


  return ( <>
  <Drawer.Navigator>
    {drawerItems}
  </Drawer.Navigator>

  </>
  );


}


export default ProjectDrawer;