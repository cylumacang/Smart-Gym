
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet,ImageBackground,Image,TouchableOpacity, Linking} from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
     <ImageBackground source={require('./wallpaper.jpg')}  resizeMode="cover" style={styles.image}>

     <View style={{ flex: 1, padding: 16, margin:20 }}>
       <Image source={require('./header.png')} style={styles.imageHeader}/>
     </View>
    
        <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/fitness-exercise/aerobic-exercise-examples/'); }}>
        <Image source={require('./aero.png')} style={styles.imageHeader}/>
        </TouchableOpacity>
          <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/exercise-fitness/strength-training-at-home'); }}>
        <Image source={require('./strength.png')} style={styles.imageHeader}/>
        </TouchableOpacity>
          <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/squat-variations'); }}>
        <Image source={require('./squat.png')} style={styles.imageHeader}/>
        </TouchableOpacity>
           <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/fitness-exercise/daily-stretching-routine'); }}>
        <Image source={require('./stretch.png')} style={styles.imageHeader}/>
        </TouchableOpacity>

    
      
        <Button
            title="Recommended Exercises"
            onPress={() => navigation.navigate('HiddenPage')}
          />
          <Text>   </Text>
      
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  image:{
    flex: 1,
   alignItems: 'center',
  justifyContent: 'center',
  },

  imageHeader:{
    marginLeft: 13,
    marginRight: 13,
    marginTop: 13,
  },


 


   
});

export default SecondPage;
