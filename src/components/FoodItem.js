import { View, Image, Text, ScrollView } from "react-native";
import React from "react";
import Thirdsection from "../screens/Thirdsection";


const FoodItem = ({ FoodItem, marginLeft, marginRight }) => {
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
              source={require("../assets/icons/star.png")}
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

      <View>
        <Thirdsection />
      </View>
    </View>
    
  );
};

export default FoodItem;
