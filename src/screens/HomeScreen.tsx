import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View style={{ backgroundColor: '#BFEFFF', flex: 1 }}>
      <Text>Home Screen</Text>
    </View>
    </SafeAreaView>
    
  );
}

export default  HomeScreen;