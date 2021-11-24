import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet,Button, ScrollView,Pressable,Image } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import Constants from 'expo-constants';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";


const units = ["Feet - KG ", "Meters - KG", "Inches - LB"]

const range = ["Feet - KG ", "Meters - KG", "Inches - LB"]

class Inputs extends Component {
  
   state = {
      weight: '',
      height: '',
      index: '',
      bmi: '',
      inches: '',
   }

   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleInches = (text) => {
      this.setState({ inches: text })
   }
   handleIndex = (text,index) => {
      this.setState({ index: index })
   }
   
   handleBMI = (text) => {
      this.setState({ bmi:text })
   }

   compute = () => {
      let bmi;
        if(this.state.index==0){
          let currHeight = (((this.state.height*0.3048)+(this.state.inches*0.0254)).toFixed(1))
           bmi = this.state.weight/(currHeight**2);
           bmi = bmi.toFixed(2);
           console.log(currHeight);
        }

        else if(this.state.index==1){
           bmi = this.state.weight/(this.state.height**2);
           bmi = bmi.toFixed(2);
        }

        else if(this.state.index==2){
           bmi = (this.state.weight/(this.state.height**2))*703;
           bmi = bmi.toFixed(2);
        }
        
        return bmi;

   }

   getValues() {
        console.log(this.state.bmi);
        console.log(this.state.index);
    }

    bmiInfo(){
      let info;

      if(this.state.bmi<=0){
        info="Please enter BMI"
      }
      else if(this.state.bmi<18.5){
          info="Underweight"
      }
      else if(this.state.bmi>=18.5&&this.state.bmi<=24.9){
          info="Normal"
      }
      else if(this.state.bmi>=25&&this.state.bmi<=29.9){
          info="Overweight"
      }
      else if(this.state.bmi>=30){
          info="Obese"
      }

      return info
    }

   render() {
      return (
         <ScrollView style = {styles.container}>

         <View style={styles.enterBMI}>
           <Text style={{marginTop: 20,
    fontSize: 15,
    padding: 15,
    color: 'white',
    backgroundColor:'#145DA0',
     borderRadius: 8,}}>To view BMI information please enter BMI</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder="Enter BMI"    
              keyboardType={'numeric'}
               placeholderTextColor = "#145DA0"
               autoCapitalize = "none"
               onChangeText = {this.handleBMI}/> 
                <Button color="#0C2D48" onPress={() => console.log(this.state.bmi)} title='Enter BMI' />

                <Text style={styles.text}>Not sure what your BMI is? no worries, please enter information below to compute for BMI</Text>
          </View>


            <View style={styles.header}>
           
           <View>
          
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder="Height"    
              keyboardType={'numeric'}
               placeholderTextColor = "#145DA0"
               onChangeText = {this.handleHeight}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder="Inches for feet unit"    
              keyboardType={'numeric'}
               placeholderTextColor = "#145DA0"
               onChangeText = {this.handleInches}/>
            </View>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder="Weight"    
              keyboardType={'numeric'}
               placeholderTextColor = "#145DA0"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/> 
             </View>

            <View style={{justifyContent:'center',alignItems:'center',marginTop:15,}}>
                <SelectDropdown
            data={units}
            onSelect={this.handleIndex}
            defaultButtonText={"Select Units"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#FFF"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />

  

          </View>
                
 <View style={{justifyContent:'center',alignItems:'center',marginTop:15,flexDirection:'row'}}>
 <Text style={{backgroundColor:'#145DA0',padding:10,color:'white'}}> Computed BMI: </Text>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value = {this.compute()}
               placeholder="BMI"    
              keyboardType={'numeric'}
               placeholderTextColor = "#145DA0"
               editable={false}
              /> 
           </View>

         
        <View style={{justifyContent:'center',alignItems:'center',marginTop:15,backgroundColor:'#079992',flex:1,margin: 20,marginBottom:20}}>
        <Image style={styles.images} source={require('./exerciseBMI.jpg')}/>

            <Text style={{color:'white',padding:20}}> {this.bmiInfo()} </Text>
            
        </View>

        <Text style={{marginBottom:10}}>  </Text>
            
         </ScrollView>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
     paddingTop: Constants.statusBarHeight,
     flex:1,
   },

   enterBMI:{
     flex:1,
     justifyContent:'center',
     alignItems: 'center',
     textAlign: 'center'

   },

   header:{
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center'
   },

   

   input: {
      margin: 15,
      height: 40,
      width: 150,
      borderColor: '#6a89cc',
      borderWidth: 1,
      textAlign: 'center',
      color: '#145DA0'

   },

   dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#0C2D48",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  text:{
    marginTop: 20,
    fontSize: 15,
    backgroundColor: '#079992',
    padding: 15,
    color: 'white',
     borderRadius: 26,
  },

  images:{
      width: "100%",
      
  }
})