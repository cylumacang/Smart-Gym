
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet,ImageBackground,Image,TouchableOpacity, Linking} from 'react-native';

const membership = ({ navigation }) => {

  let text = "Thank you for subscribing to Smart Gym Membership!";
  let gymDiscountCode =  "Gym Discount code is: " + Math.floor(Math.random() * 10000) + 1000 ;
  
    const changeTextGym=()=> text = text+gymDiscountCode;

  return (
    <View style={{ flex: 1 }}>
     <ImageBackground source={require('./membershipBackground.png')}  resizeMode="cover" style={styles.image}>

     <View style={{ flex: 1, padding: 16, margin:20 }}>
       <Image source={require('./membershipHeader.png')} style={styles.imageHeader}/>
     </View>

     <View style={{ flex: 1, flexDirection: 'row',marginTop:10, }}>
        <TouchableOpacity  onPress={() => { Linking.openURL('https://www.fitnessblender.com/'); }}>
        <Image source={require('./MemberShipLogo1.png')} style={styles.imageHeader}/>
        </TouchableOpacity>

          <TouchableOpacity  onPress={() => { Linking.openURL('https://www.sportsrec.com/129423-ministepper-benefits.html'); }}>
        <Image source={require('./MemberShipLogo2.png')} style={styles.imageHeader}/>
        </TouchableOpacity>

          <TouchableOpacity  onPress={() => { Linking.openURL('https://www.lazada.com.ph/shop-home-gyms/'); }}>
        <Image source={require('./MemberShipLogo3.png')} style={styles.imageHeader}/>
        </TouchableOpacity>

     </View >
      
        <View style={{ flex: 1, flexDirection: 'row',marginTop: -20}}>
        <View style={styles.body}>
        <Text style={styles.paragraph} > {text} </Text>
        </View>
 
     <View style={styles.body}>
      <Text style={styles.paragraph2} >
       SUPRISE SALE: click on heart icon to learn more
      </Text>
    </View>
        </View>
       
       <View style={styles.body}>
      <Text style={styles.paragraph3} >
       {gymDiscountCode}
      </Text>
    

      
      <Text style={styles.paragraph4} >
       Free use of our gyms utilities such as showers, restrooms, and beverage machine
      </Text>
  </View>

        <Button
            title="logout"
            onPress={() => navigation.navigate('LogIn')}
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

  paragraph2: {
    margin: 10,
    padding: 16,
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(230, 103, 103,0.7)',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    
  },

  paragraph3: {
    margin: 5,
    marginBottom: 2,
    padding: 16,
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(25, 42, 86,0.7)',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    
  },

  paragraph4: {
    margin: 5,
    padding: 12,
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(87, 75, 144,0.8)',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    
  },

  body:{
    flex:1
  },

   
});

export default membership;
