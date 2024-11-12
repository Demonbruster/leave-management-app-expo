import React, {useEffect } from 'react';
import { Spinner } from "@/components/ui/spinner"
import {Image, View, useWindowDimensions } from 'react-native';
import {StyleSheet} from "react-native"
import { useRouter } from "expo-router";




export default function SplashScreen(){
    const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
  
      <Image  
        style={styles.image} 
        source={require('@/assets/images/logo.jpg')}
        alt="App Logo"

      />

 
      <Spinner size={50} color="blue.500" style={styles.spinner} />

 
      
    </View>
  );
}
const styles =StyleSheet.create({ 
  image: {
    resizeMode:"cover", 
    width:450,
    height:400,
  },
  spinner: {
    marginBottom: 4,  
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,  
  },
  
});

