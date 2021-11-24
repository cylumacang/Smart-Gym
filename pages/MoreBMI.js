import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground,Image,ScrollView,TouchableOpacity,Linking,Button } from 'react-native';
import Constants from 'expo-constants';

const MoreBMI = ({ navigation }) => {
  return (
    <View style={styles.container}>

        
    <ImageBackground source={require('./exerciseBackground.png')}  resizeMode="cover" style={styles.image}>
    

    <View style={styles.headerView}>
    <Image source={require('./FileHeader.gif')} style={styles.imageHeader}/>
    <TouchableOpacity onPress={() => {
              Linking.openURL('https://www.healthline.com/health/body-mass-index#Body-Mass-Index-for-Children'); }}>
    <Image source={require('./homeIcon.png')} style={styles.icon}/>
    </TouchableOpacity>
    </View>

    <View style={styles.body}>

      <Text style={styles.paragraph} >
        Body mass index (BMI) is an estimate of body fat based on height and weight. It doesn’t measure body fat directly, but instead uses an equation to make an approximation. BMI can help determine whether a person is at an unhealthy or healthy weight.
      </Text>

      <Text style={styles.paragraph} >
       BMI is interpreted differently for people under age 20. While the same formula is used to determine BMI for all age groups, the implications for children and adolescents can vary depending on age and gender.
      </Text>

      <Button
            title="Back"
            onPress={() => navigation.navigate('FirstPage')}/>

      

    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 10,
    padding: 16,
    fontSize: 17,
    textAlign: 'center',
    color: '#050A30',
    backgroundColor: 'rgba(160,	231,	229, 0.8)',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  imageHeader: {
    justifyContent: "center",
    backgroundColor: 'white',
    borderRadius: 10,
 
  },
  headerView:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row'
    
  },

  body:{
    flex:4
  },

  icon:{
    marginLeft: 15,
    width: 30,
    height:30,
    padding:25,
    borderRadius:20,
  }
});

export default MoreBMI;
