import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import NavigationB from "../components/NavigationB";
import Map from "../components/Map";

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex flex-col justify-between w-full h-full relative`}>
        {/**Main container ========== */}
        <View style={tw`h-[93%] w-full`}>
          {/***Profile  ========== */}
          <TouchableOpacity
            style={tw`w-14 h-14 absolute top-14 right-4 flex flex-col justify-center items-center rounded-full overflow-hidden z-20`}
          >
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/82897602?s=400&u=b6f6f86529e5ee5dfe2bf15813ff8d0b93a3dec8&v=4",
              }}
              resizeMode="contain"
              style={tw`shadow-lg h-full w-full border-2 border-emerald-700 rounded-full`}
            ></Image>
          </TouchableOpacity>
          {/**End Of Profile ================ */}

          {/**Map Screen =========== */}
          <View style={tw`h-3/5`}>
            <Map />
          </View>
          {/**Adresses =========== */}
          <View style={tw`h-2/5 w-full flex flex-col p-6`}>
            <TextInput
              style={tw`w-full h-14 rounded bg-emerald-50 p-2 px-4 text-lg lowercase text-emerald-800`}
              placeholder="Where to Sands ?"
              autoComplete="off"
              placeholderTextColor={"#0d9488"}
              multiline={false}
            />
            <View
              style={tw`mt-4 w-full flex flex-row justify-center items-center`}
            >
              <TouchableOpacity
                style={tw`w-18 h-16 flex flex-col justify-center items-center bg-emerald-50 border border-emerald-200 rounded`}
              >
                <Icon
                  style={tw`font-semibold`}
                  name="md-car-sport"
                  type="ionicon"
                  color="#064e3b"
                  size={22}
                />
                <Text style={tw`text-sm text-emerald-900 font-semibold`}>
                  Ride
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-18 h-16 mx-4 flex flex-col justify-center items-center bg-emerald-50 border border-emerald-200 rounded`}
              >
                <Icon
                  style={tw`font-semibold`}
                  name="md-fast-food-sharp"
                  type="ionicon"
                  color="#064e3b"
                  size={22}
                />
                <Text style={tw`text-sm text-emerald-900 font-semibold`}>
                  Food
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-18 h-16 mr-4 flex flex-col justify-center items-center bg-emerald-50 border border-emerald-200 rounded`}
              >
                <Icon
                  style={tw`font-semibold`}
                  name="ios-cart-sharp"
                  type="ionicon"
                  color="#064e3b"
                  size={22}
                />
                <Text style={tw`text-sm text-emerald-900 font-semibold`}>
                  Shop
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-18 h-16 flex flex-col justify-center items-center bg-emerald-50 border border-emerald-200 rounded`}
              >
                <Icon
                  style={tw`font-semibold`}
                  name="gift-sharp"
                  type="ionicon"
                  color="#064e3b"
                  size={22}
                />
                <Text style={tw`text-sm text-emerald-900 font-semibold`}>
                  Courier
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/**Nav ================ */}
        <NavigationB />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
