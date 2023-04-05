import { View, Text, Image, TextInput, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HeaderContent = () => {
  const [search, setSearch] = useState("");

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
        flex: Platform.OS === "ios" ? 0.6 : 0.5,
      }}
    >
      {/* menu icons */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 60 : 35,
          marginHorizontal: 17,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../../src/assets/icons/menu.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
        <View style={{ paddingRight: 25, justifyContent: "center" }}>
          <Image
            source={require("../../src/assets/icons/bag.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../../src/assets/icons/bell.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
      </View>

      {/* header text */}
      <View style={{ marginTop: 30, marginLeft: 16 }}>
     <TouchableOpacity
     onPress={ pressHandler }
     >
     <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "600",
            lineHeight: 30,
          }}
        >
          Delicious food ready to
        </Text>
     </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
           <TouchableOpacity
           onPress={ pressHandler }
           >
           <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "600",
                lineHeight: 30,
              }}
            >
             be delivered to you
            </Text>
           </TouchableOpacity>
          </View>
          <View style={{ flex: 1, paddingLeft: 10, justifyContent: "center" }}>
            <Image
              source={require("../../src/assets/icons/meal.png")}
              style={{ width: 25, height: 25, tintColor: 'red'}}
            />
          </View>
        </View>
      </View>

      {/* search bar */}
      <View
        style={{
          backgroundColor: null,
          height: 50,
          borderWidth: 0.5,
          borderColor: "white",
          marginTop: 20,
          flexDirection: "row",
          paddingHorizontal: 15,
          marginHorizontal: 30,
          borderRadius: 12,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../../src/assets/icons/search.png")}
            style={{
              width: 20,
              height: 20,
              justifyContent: "center",
              tintColor: "white",
            }}
          />
        </View>

        <TextInput
          autoFocus={false}
          onChangeText={setSearch}
          value={search}
          placeholder={"Search something..."}
          placeholderTextColor={"white"}
          style={{
            color: "black",
            paddingLeft: 12,
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default HeaderContent;
