import { View, Text, FlatList, Pressable, Dimensions, StyleSheet } from "react-native";
import {useProject} from '../contexts/ProjectContext';
import {formatISO} from 'date-fns';


function CountingScreen(){
  const {variants, addObservation, observations} = useProject();


  const keyExtractor = (item) => item;

  const ItemRenderer = ({item})=>{ 

    return(
    <Pressable 
    onPress={()=>{addObservation({variant:item, time:formatISO(new Date())})}}
    style={({pressed})=>(
      {
        backgroundColor: pressed ? '#aaa' : 'white',
        margin: 10
      }
    )}
     >
    <View style={styles.listItem}>
      <Text style={styles.variant}>{item}</Text>
      <Text>{observations.reduce((acc, current)=>acc+= current.variant === item? 1 : 0, 0)}</Text>
    </View>
    </Pressable>

  )};

  return(
    <View style={styles.container}>
      <FlatList 
      data={variants} 
      numColumns={2}
      keyExtractor={keyExtractor} 
      renderItem={ItemRenderer}
     
      />
    </View>
  )


}

const cardSize= Dimensions.get('window').width / 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  listItem:{
    // margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#ddd',
    borderWidth:1,
    borderRadius:5,
    padding: 10,
    width: cardSize,
    height: cardSize
 
  },
  variant:{
    fontSize: 24,
    fontWeight: 'bold',

    
  },
});

export default CountingScreen;