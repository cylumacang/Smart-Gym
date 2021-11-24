

import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './AssetExample';
import Task from './Task';


const FourthPage = ({ navigation }) => {
  const[value, onChangeText] =  React.useState();
  const [taskItems, setTaskItems] = React.useState([]);

  const handleAddTask = () =>{
      setTaskItems([...taskItems,value]);
      onChangeText(null);
}

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
    
     <View style={styles.taskWrapper}>
     <View style={styles.writerTaskWrapper}>

      <TextInput style={styles.input}
      placeholder={"Write a task"}  onChangeText={text => onChangeText(text)}
        value={value}/>

      <TouchableOpacity onPress={()=> handleAddTask()}> 
      
      <View style={styles.addWrapper}> 
      <Text style={styles.addText}>+</Text>
      </View>
      
      </TouchableOpacity>
    </View>
  
     <ScrollView style={styles.scrollView}>
      {
        taskItems.map((item, index) =>{
          return(
            <TouchableOpacity key={index} onPress= {() => completeTask(index)}>
             <Task  text={item}/>
            </TouchableOpacity>
          ) 
         
        })
      }
     <Task text={'Exercise notes and more'}/>

      </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  taskWrapper:{
    paddingTop: 20,
    paddingHorizontal: 20,
  }, 
  scrollView:{
    marginTop: 30,

    
  },
  writerTaskWrapper:{
    width:"100%",
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  input:{
      paddingHorizontal: 15,
      paddingVertical: 15,
      color: '#050A30',
      backgroundColor: "#59D7EE",
      borderRadius: 60,
      borderColor: "#D3F4FB",
      borderWidth:1,
      width: 250,
  }, 

  addWrapper:{
    width: 45,
    height: 45,
    backgroundColor: '#0C2D48',
    alignItems: 'center',
    justifyContent: 'center',
      borderRadius: 100,
      borderColor: "#000C66",
      borderWidth:1,
  }, 

  addText:{
      color: 'white',
  }
  
});


export default FourthPage;
