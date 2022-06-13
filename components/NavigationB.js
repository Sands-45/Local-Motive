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
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const NavigationB = () => {
  return (
    <View
      style={tw`h-[7%] min-h-15 w-full px-4 bg-emerald-50 flex flex-row justify-between items-center`}
    >
      <TouchableOpacity
        style={tw`w-1/4 h-full flex flex-col justify-center items-center border-t-2 border-emerald-700 `}
      >
        <Icon
          style={tw`font-semibold`}
          name="home"
          type="antdesign"
          color="#0f766e"
          size={22}
        />
        <Text style={tw`text-sm text-emerald-700 font-semibold`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-1/4 h-full flex flex-col justify-center items-center`}
      >
        <Icon
          style={tw`font-semibold`}
          name="clockcircleo"
          type="antdesign"
          color="#0f766e"
          size={22}
        />
        <Text style={tw`text-sm text-emerald-700 font-semibold`}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-1/4 h-full flex flex-col justify-center items-center`}
      >
        <Icon
          style={tw`font-semibold`}
          name="wallet"
          type="antdesign"
          color="#0f766e"
          size={22}
        />
        <Text style={tw`text-sm text-emerald-700 font-semibold`}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-1/4 h-full flex flex-col justify-center items-center`}
      >
        <Icon
          style={tw`font-semibold`}
          name="setting"
          type="antdesign"
          color="#0f766e"
          size={22}
        />
        <Text style={tw`text-sm text-emerald-700 font-semibold`}>Setings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationB;

const styles = StyleSheet.create({});
