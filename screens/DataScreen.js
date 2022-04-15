import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import {format, parseISO} from 'date-fns';
import {useProject} from '../contexts/ProjectContext'





function DataScreen({navigation}){
  const {observations} = useProject();


  const keyExtractor = (_, index) => index.toString();

  const ItemRenderer = ({item})=>(
  <Pressable 
    onPress={()=>navigation.navigate('Details', item)}
    style={({pressed})=>(
      {
        backgroundColor: pressed ? '#aaa' : 'white'
      }
    )}
    >
    <View style={styles.item}>
       <Text style={styles.itemDate}>{format(parseISO(item.time), 'MMM dd, hh:mmaaaaa')}</Text>
      <Text style={styles.itemName}>{item.variant}</Text>
    </View>
    </Pressable>
  
  );

  return(
    <View style={styles.container}>
     <FlatList 
     style={styles.list}
      data={observations}
      keyExtractor={keyExtractor}
      renderItem={ItemRenderer}
      />
    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  list:{
    width:'100%',
    paddingHorizontal: 20
  },
  item:{
    flex: 1,
    alignItems: 'flex-start',
    flexDirection:'row',
    marginVertical:15
  },
  itemDate:{
   width:'30%'
  },
  itemName:{
    fontWeight:'bold',
    marginLeft: 30
  }
});

export default DataScreen;