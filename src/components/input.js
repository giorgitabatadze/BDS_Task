import React from "react";
import {TextInput} from "react-native";

const Input = ({value, onChangeText, placeholder, inputStyle}) => {
  return (
      <TextInput
          style={inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          autoCorrect={false}
      />
  );
};


export default Input;
