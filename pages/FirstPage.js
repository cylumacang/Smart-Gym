import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BMIPage from './BMI'
import MoreBMI from './MoreBMI'

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BMIPage/>
      <View style={styles.container}>
      <Button title="Learn More about BMI" color="#079992" onPress={() => navigation.navigate('MoreBMI')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container:{
    flex:0.1,
    alignItems:'center',
  }

   
});

export default FirstPage;
