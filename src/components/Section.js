import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Thirdsection from "../screens/Thirdsection";

const Section = ({ onPress, title, myStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
        ...myStyle,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
        <Text style={{ color: "green", fontSize: 14 }}>View All</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Section;
