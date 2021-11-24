import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View, Text, SafeAreaView, StyleSheet,Image,TextInput,TouchableOpacity, Alert} from 'react-native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
import { HeaderStyleInterpolators } from "@react-navigation/stack";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjo5fbEaOwOzSc6RkyYznl2mahpvEITeU",
  authDomain: "smart-gym-35428.firebaseapp.com",
  projectId: "smart-gym-35428",
  storageBucket: "smart-gym-35428.appspot.com",
  messagingSenderId: "618575349434",
  appId: "1:618575349434:web:7285b1e1787fbba4a5a483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Basic write operations
const NewAccount = (name, bday, gender, email, password) => {
  const db = getDatabase();
  const AccountListRef = ref(db, 'accounts');
  const newAccountRef = push(AccountListRef);
  set(newAccountRef, {
    "Name": name,
    "Birthdate": bday,
    "Gender": gender,
    "Email": email,
    "Password": password
  });
  Alert.alert('Account has been created!');
}

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [bday, setbday] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 

  return (
      <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
       <View style={styles.inputView}>
       <TextInput
          style={styles.TextInput}
          placeholder="Birthdate  M/D/Y"
          placeholderTextColor="#003f5c"
          onChangeText={(bday) => setbday(bday)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Gender"
          placeholderTextColor="#003f5c"
          onChangeText={(gender) => setGender(gender)}
        />
      </View>      
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
          <Button
            title="create account"
            onPress={() => {NewAccount(name, bday, gender, email, password), navigation.navigate('LogIn')} }
          />
          <Button
            title="back"
            onPress={() => navigation.navigate('LogIn')}
          />
      </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe4ea",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#74b9ff",
    borderRadius: 5,
    width: "80%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 35,
    flex: 1,
    padding: 10,
  },
});

export default Register;

