import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigate = useNavigation();

  //Component ==========
  return (
    <SafeAreaView style={tw`bg-[#E1F1FC] h-full`}>
      <View
        style={tw`flex h-[50%] w-full bg-[#E1F1FC] flex justify-center items-center bg-emerald-700`}
      >
        <Image
          source={require("../assets/images/welcome.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View
        style={tw`flex h-[50%] w-full bg-[#E1F1FC] flex items-center justify-center p-2`}
      >
        <Text style={tw`text-[8] font-bold text-emerald-700  text-center`}>
          Always on time, {"\n"} even when you are late.
        </Text>
        <Text
          style={tw`text-lg font-normal text-emerald-700  mt-4 text-center px-8 leading-[25px]`}
        >
          Our greatest currency is our time, spend it
          wisely and never waste another's or your own.
        </Text>
        <Image
          source={require("../assets/images/bg-logo-removebg.png")}
          resizeMode="contain"
          style={styles.logoStyles}
        ></Image>
        <TouchableOpacity
          onPress={() => navigate.navigate("SignIn")}
          style={tw`mt-4 flex flex-row items-center justify-center bg-emerald-700 w-[70%] h-12 px-6 py-1 rounded`}
        >
          <Text
            style={tw`text-emerald-50 font-bold  text-xl text-center tracking-normal`}
          >
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image2: {
    width: "100%",
    height: 250,
  },
  logoStyles: {
    width: 200,
    height: 100,
  },
});

export default Welcome;
