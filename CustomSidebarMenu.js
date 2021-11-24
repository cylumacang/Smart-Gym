import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking, } from 'react-native';

import { DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {

  return (
    <SafeAreaView style={{ flex: 1}}>
      { }
      <Image
        source={require('./assets/logoImage.png')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://www.fitnessblender.com/'); }}> Rate Us </Text>
        </View>
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        React Native Project
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 200,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },

  customItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
