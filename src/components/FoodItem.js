import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Thirdsection from "../screens/Thirdsection";
import { useNavigation } from "@react-navigation/native";

const FoodItem = ({ FoodItem, marginLeft, marginRight }) => {

  const navigation = useNavigation();

  // const navigate = () => {
  //   navigation.navigate("GrilledChicken");
  // };

    const pressHandler = () => {
    navigation.navigate("Page2");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 20,
        padding: 8,
        marginLeft: marginLeft,
        margin: marginRight,
        borderRadius: 12,
        height: 250,
        width: 240,
      }}
    >
      <TouchableOpacity
      onPress={ pressHandler }
      >
      <View>
        <Image
          source={FoodItem.image}
          resizeMode="cover"
          style={{ width: 223, height: 170, borderRadius: 12 }}
        />

        {/* rating */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            position: "absolute",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 12,
            top: 12, 
            right: 10
          }}
        >
          <View style={{ justifyContent: "center", paddingRight: 6 }}>
            <Image
              source={require("../../src/assets/icons/star.png")}
              style={{ width: 14, height: 14 }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{fontWeight: 'bold'}}>{FoodItem.rating}</Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 12 }}>
        <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "700" }}>
          {FoodItem.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingTop: 8,
            fontWeight: "600",
            color: "green",
          }}
        >
          ${FoodItem.price.toFixed(2)}
        </Text>
        
      </View>

      {/* <View>
        <Thirdsection />
      </View> */}
      </TouchableOpacity>
    </View>
    
  );
};

export default FoodItem;
