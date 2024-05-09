import React from "react";
import {Text,TouchableOpacity, View } from "react-native";

interface BasseButtonProps {
    titel: String;
    onPress: () => void;
}

const BaseButton = ({titel, onPress}: BasseButtonProps) => {


  return (
    <View style={{width: "100%" }}>
    <TouchableOpacity style={{ borderRadius: 8, backgroundColor: "#50C2C9", paddingVertical: 16, marginHorizontal: 25}} onPress={onPress}>
      <Text style={{textAlign: "center", fontSize: 18, fontWeight: "600", color: '#FFFFFF'}}>{titel}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default BaseButton;
