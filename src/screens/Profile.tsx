import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
    <View style={{ backgroundColor: '#BFEFFF', flex: 1 }}>
      <Text>Profile Screen</Text>
    </View>
    </SafeAreaView>
    
  );
}

export default  ProfileScreen;