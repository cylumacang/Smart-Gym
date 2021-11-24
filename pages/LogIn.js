import React, {useState} from "react";
import 
{ Button, View, Text, SafeAreaView, 
  StyleSheet, Image, TextInput, 
  TouchableOpacity, Alert,
  } 
  from 'react-native';

const LogIn = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [valMembership, setValue] = useState(true); {/* initially this is true since the button is disabled*/}
  const [usernameValid, setUserNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const accountCorrect = () => {
    
   if(usernameValid&&passwordValid){  {/* if both password and username values are valid*/}
     setValue(false);  {/* setting this false means the disabled button is now false*/}
   }
};


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <Image
        source={require('./logoImage.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.logoText}>                        SMART GYM</Text>
        <View
          style={styles.container}>
          <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        </View>
         <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => {Alert.alert('Welcome user!'), navigation.navigate('membership') } }>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn2} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    backgroundColor: "#81ecec",
  },
 inputView: {
    backgroundColor: "#81ecec",
    borderRadius: 30,
    width: "90%",
    height: 50,
    marginBottom: 20,

    alignItems: "center",
  },
    loginBtn: {
    width: "65%",
    borderRadius: 45,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: "#0984e3",
  },

  loginBtn2: {
    width: "65%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
    marginBottom: 40,
    backgroundColor: "#050A30",
  },

  loginText:{
    color: 'white',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 200,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  logoText:{
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default LogIn;
