import { View, Text, StyleSheet } from "react-native";
import {format, parseISO} from 'date-fns';


function DetailsScreen({route}){
  const {variant, time} = route.params;

  return(
    <View style={styles.container}>
        <Text>{variant}</Text>
      <Text>Recorded at {format(parseISO(time), 'MMM dd, hh:mmaaaaa')}</Text>
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
});

export default DetailsScreen;