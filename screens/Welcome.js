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
    <SafeAreaView style={tw`bg-emerald-700 h-full p-6 relative`}>
      <View
        style={tw`flex h-[55%] w-full flex justify-center items-center bg-emerald-700`}
      >
        {/**Deco Elements ===================== */}
        <View
          style={[
            tw`w-full h-[50%] absolute flex flex-col justify-center items-center`,
            { transform: [{ rotate: "65deg" }] },
          ]}
        >
          <View
            style={tw`w-[70%] h-8 mt-3 bg-emerald-600 rounded-full opacity-60`}
          ></View>
          <View
            style={tw`w-[85%] h-8 mt-3 bg-emerald-500 rounded-full opacity-60`}
          ></View>
          <View
            style={tw`w-[100%] h-8 mt-3  bg-emerald-500 rounded-full opacity-60`}
          ></View>
          <View
            style={tw`w-[85%] h-8 mt-3 bg-emerald-600 rounded-full opacity-60`}
          ></View>
          <View
            style={tw`w-[70%] h-8 mt-3 bg-emerald-500 rounded-full opacity-60`}
          ></View>
        </View>
        {/**Deco Elements ===================== */}

        <Image
          source={require("../assets/images/welcome.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View
        style={tw`flex h-[45%] w-full bg-[#E1F1FC] flex items-center justify-center p-2 rounded-2xl shadow-lg`}
      >
        <Text style={tw`text-[7] font-bold text-emerald-700  text-center px-6`}>
          Always on time, even when you are late.
        </Text>
        <Text
          style={tw`text-[4.5] font-normal text-emerald-600  text-center mt-2 px-8`}
        >
          What we like to say is that the vision for{" "}
          <Text style={tw`font-bold text-emerald-700`}>Local</Text> is the cross
          between lifestyle and logistics.
        </Text>
        <TouchableOpacity
          onPress={() => navigate.navigate("SignIn")}
          style={tw`mt-12 flex flex-row items-center justify-center bg-emerald-700 w-[70%] h-12 px-6 py-1 rounded-lg`}
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
    height: 280,
  },
  logoStyles: {
    width: 200,
    height: 100,
  },
});

export default Welcome;
