
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet,TouchableOpacity,Linking,Image, ScrollView } from 'react-native';

const HiddenPage = ({ navigation }) => {
  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
    <Image source={require('./header2.png')} style={styles.exampleExercise}/>
      <View style={{ flex: 1, padding: 16 }}>
     
        <View
          style={styles.container}>
    
        <TouchableOpacity  onPress={() => { Linking.openURL('https://greatist.com/fitness/7-minute-upper-body-workout-you-can-do-at-home/'); }}>
        <Image source={require('./upper.png')} style={styles.linkExercise}/>

        </TouchableOpacity>
    <View style={styles.info}>
      <Text>Upper body strength is the ability of the body to exert a maximum force against an object external to the body in one maximum effort of the upper body muscles.</Text>
    </View>
        <Image source={require('./upperexer.png')} style={styles.exampleExercise}/>
  
        <TouchableOpacity  onPress={() => { Linking.openURL('https://therapydiadc.com/6-lower-body-exercises-to-do-at-home/'); }}>
        <Image source={require('./lower.png')} style={styles.linkExercise}/>
        </TouchableOpacity>
    <View style={styles.info}>
      <Text>Lower body exercises will enhance your body strength ability and will help to maintain healthy bones and joints.</Text>
    </View>
        <Image source={require('./lowerexer.png')} style={styles.exampleExercise}/>

          <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/best-core-exercises'); }}>
        <Image source={require('./core.png')} style={styles.linkExercise}/>
        </TouchableOpacity>
    <View style={styles.info}>
      <Text>Core exercises train the muscles in your pelvis, lower back, hips and abdomen to work in harmony.</Text>
    </View>
        <Image source={require('./coreexer.png')} style={styles.exampleExercise}/>

        <TouchableOpacity  onPress={() => { Linking.openURL('https://www.healthline.com/health/cardio-exercises-at-home'); }}>
        <Image source={require('./cardio.png')} style={styles.linkExercise}/>
        </TouchableOpacity>
    <View style={styles.info}>
      <Text>Cardio improves many aspects of health, including heart health, mental health, mood, sleep, weight regulation and metabolism.</Text>
    </View>
        <Image source={require('./cardioexer.png')} style={styles.exampleExercise}/>

        <TouchableOpacity  onPress={() => { Linking.openURL('https://www.self.com/gallery/essential-stretches-slideshow'); }}>
        <Image source={require('./flex.png')} style={styles.linkExercise}/>
        </TouchableOpacity>
    <View style={styles.info}>
      <Text>Helps maintain appropriate muscle length and avoid muscle shortening. Helps improve muscular weaknesses. Reduces the risk of injury. Improves posture and the ability to move.</Text>
    </View>
        <Image source={require('./flexexer.png')} style={styles.exampleExercise}/>

        </View>
       
        <Button
            title="Go back"
            onPress={() => navigation.navigate('SecondPage')}
          />
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
  justifyContent: 'center',
  },
 
 
   
});

export default HiddenPage;
