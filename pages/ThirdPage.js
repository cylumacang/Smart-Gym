import React, {useState} from "react";
import { Button, View, Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,ScrollView,Image,Linking } from 'react-native';

const ThirdPage = ({ navigation }) => {

const[value, onChangeText] =  React.useState();
  const [calories, setCalories] = useState();
  const [dailyCalories,setDailyCalories] = useState();

  const handleAddTask = () =>{
      console.log(value)
}
  return (
    <View style={styles.container}>
    
     <View style={styles.taskWrapper}>
     <View style={styles.writerTaskWrapper}>
      <Text style={{backgroundColor:'#145DA0',padding:10,color:'white',marginRight: 29, fontWeight: 'bold'}}> WEIGHT: </Text>
      <TextInput style={styles.input}
      placeholder={"Enter Weight in Kilograms"} keyboardType={'numeric'}  onChangeText={text => parseFloat(onChangeText(text))}
        value={value}/>
    </View>
 
      </View>

      <View style={{flexDirection: 'row',marginBottom: 10, marginLeft: 13,marginTop:20}}>
          <Text style={{marginBottom:20}}>  </Text>
         <Text style={{backgroundColor:'#145DA0',padding:15,color:'white',marginRight: 29, fontWeight: 'bold', textAlign: 'center'}}> GENDER: </Text>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>{
            setDailyCalories((1.0*value)*24);
          }}> 
            <Text>Male</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.btnStyle} onPress={()=>{
            setDailyCalories((0.9*value)*24);
          }}> 
            <Text>Female</Text>
          </TouchableOpacity>
 
      </View>
     
     <View style={{margin: 30, padding: 20}}>
     <Text style={{backgroundColor: '#59D7EE', padding: 30, borderRadius: 20, fontSize: 20}}>Daily calories: {dailyCalories} </Text>
     </View>

     <Text style={styles.textView}>COMMON DAILY CALORIE INTAKE</Text>
     <ScrollView style={styles.recoView}>
  
          <View style={styles.scrollText}>
          <Text >BREAD: </Text>
          <Image style={styles.images} source={require('./Bread.png')}/>
          <Text>Breadsticks (2 sticks)	-	77 calories</Text>
          <Text>Bread (white)(1 slice)	-	61 calories</Text>
          <Text>Bread (whole wheat)(1 slice)	-	55 calories</Text>
           <Text>Cookie (oatmeal raisin)(1)	-	62 calories</Text>
         
          </View>

          <View style={styles.scrollText}>
          <Text>RICE: </Text>
           <Image style={styles.images} source={require('./Rice.png')}/>
          <Text>Rice, white (1 cup)	-	223 calories</Text>
          <Text>Rice, brown (1 cup)	-	232 calories</Text>
          </View>

          <View style={styles.scrollText}>
          <Text>VEGTABLES: </Text>
          <Image style={styles.images} source={require('./Veg.png')}/>
          <Text>Carrot (1 medium)	- 31 calories</Text>
           <Text>Corn (1/2 cup)	-	89 calories</Text>
            <Text>Potato (1 large, baked, plain) -	220 calories</Text>
             <Text>Peas, green (1/2 cup)	-	63 calories</Text>
          </View>

          <View style={styles.scrollText}>
          <Text>FRUITS: </Text>
          <Image style={styles.images} source={require('./fruits.png')}/>
          <Text>Apple (1 medium)	-	81 calories</Text>
           <Text>Banana (1)	-	105 calories</Text>
            <Text>Grapes (1 cup)	-	114 calories</Text>
             <Text>Orange (1)	-	65 calories</Text>
          </View>
          
        </ScrollView>
       <Text style={styles.link}
            onPress={() => {
              Linking.openURL('https://www.momsteam.com/nutrition/sports-nutrition-basics/nutritional-needs-guidelines/carbohydrate-and-calorie-content-of-foods'); }}> Learn More </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  textView:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
  },

  btnStyle:{
      margin: 10,
      padding:20,
      backgroundColor:"#53DFD1"
  },

  taskWrapper:{
      paddingTop: 20,
      paddingHorizontal: 20,
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
      borderRadius: 6,
      borderColor: "#D3F4FB",
      borderWidth:1,
      width: 230,
  }, 

   recoView:{
      flex: 1,
      padding: 10,
   },

   scrollText:{
      backgroundColor: "#A3EBB1",
      borderRadius: 20,
      padding: 20,
      textAlign: 'center',
      margin: 20,
      alignItems: 'center',
      alignSelf: 'center'
   },

   images:{
      margin: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
   },

   link:{
     alignSelf: "center",
     textDecorationLine: 'underline',
     backgroundColor: "#21B6A8",
     fontSize: 17,
     padding: 10,
     margin: 7,
     borderRadius: 20,
     borderColor: "#A3EBB1",
     borderWidth: 1,
     color: "white"
   }
});

export default ThirdPage;
