import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';

const Task = (props) =>{
  return(
    <View style={styles.item}> 

    <View style={styles.itemLeft}> 
    
    <TouchableOpacity style={styles.square}>
    </TouchableOpacity>

     <Text style={styles.itemText}>{props.text}</Text>
    </View>

    <View style={styles.circular}> 

    </View>
   
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
      item:{
        backgroundColor:'#0C2D48',
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:"space-between",
        marginBottom: 20,
  },

      itemLeft:{
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: 'wrap'

  },

      square:{
        width: 24, 
        height: 24,
        backgroundColor: '#7EC8E3',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

  },

      itemText:{
        maxWidth: "80%",
        color: 'white'

  },

      circular:{
        width: 12,
        height: 12,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,

  }
})