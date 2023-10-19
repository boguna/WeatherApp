import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    conteinerStyles,
    messageOneStyles,
    messageTwoStyles,
  } = props;
  //   const {  } = styles;
  return (
    <View style={conteinerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
