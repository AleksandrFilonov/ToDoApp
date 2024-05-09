import React, { useState } from "react";
import {TextInput, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons';

interface BaseInputProps {
     placeholder?: string;
     value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    error?: boolean;
    passwordEye?: boolean;
}

const BaseInput = ({placeholder, value, onChangeText, secureTextEntry, error, passwordEye}: BaseInputProps) => {
const [secureText, setSecureText] = useState(secureTextEntry ? secureTextEntry: false);

  return (
    <View style={{width: '100%'}}>
   <TextInput
   secureTextEntry = {secureText}
   placeholder = {placeholder}
   value = {value}
   onChangeText = {onChangeText} 
   style={{
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
    backgroundColor: error ? "rgba(234, 34, 34, 0.4)" : "#fff",
    fontSize: 13,
      }} 
   placeholderTextColor={'rgba(0,0,0,0.8)'}>
  </TextInput>
  {passwordEye && <TouchableOpacity
  onPress={() => setSecureText(!secureText)}
  style={{width: 50 , height: "100%",   position: "absolute", right: 0,  borderTopEndRadius:100, borderBottomEndRadius:100, justifyContent: 'center', alignItems: 'center' }}>
  <Feather name={secureText ? "eye" : "eye-off"} size={35} color="black" style={{}} />
  </TouchableOpacity> 
  }
   </View>
  );
};

export default BaseInput;

