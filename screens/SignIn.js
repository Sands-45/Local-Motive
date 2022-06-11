import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigate = useNavigation();
  const [loginValues, setValues] = useState({
    email: "",
    password: "",
  });

  //Component =======================
  return (
    <SafeAreaView style={tw`bg-[#E1F1FC] h-full`}>
      <View
        style={tw`bg-[#E1F1FC] w-full h-full p-4 pt-24 flex flex-col justify-center`}
      >
        <Text style={tw`text-[11] font-bold text-emerald-700  text-center`}>
          Let&#39;s sign you in.
        </Text>
        <Text
          style={tw`mt-4 text-3xl font-medium text-emerald-700  text-center`}
        >
          Welcome back.
        </Text>
        <Text
          style={tw`mt-2 text-3xl font-medium text-emerald-700  text-center`}
        >
          You&#39;ve been missed!
        </Text>

        {/**Log In Form ========= */}
        <View style={tw`w-full flex flex-col mt-6 p-2`}>
          <TextInput
            style={tw`w-full h-14 border border-emerald-600 bg-[#E7F4FD] rounded p-2 px-4 text-xl lowercase text-emerald-800`}
            onChangeText={(text) =>
              setValues((prev) => ({ ...prev, email: text }))
            }
            value={loginValues.email}
            placeholder="Email"
            autoComplete="off"
            placeholderTextColor={"#0d9488"}
            keyboardType="email-address"
            multiline={false}
          />
          <TextInput
            style={tw`mt-4 w-full h-14 border border-emerald-600 bg-[#E7F4FD] rounded p-2 px-4 text-xl lowercase text-emerald-800`}
            onChangeText={(text) =>
              setValues((prev) => ({ ...prev, password: text }))
            }
            value={loginValues.password}
            placeholder="Password"
            autoComplete="off"
            placeholderTextColor={"#0d9488"}
            secureTextEntry={true}
            multiline={false}
          />

          <View
            style={tw`w-full mt-2 p-2 flex flex-col items-center justify-center`}
          >
            <Text
                onPress={() => navigate.navigate("Welcome")}
              style={tw`text-base font-medium text-emerald-700 text-right w-full`}
            >
              Password Recovery ?
            </Text>
            <TouchableOpacity
              style={tw`mt-6 flex flex-row items-center justify-center bg-emerald-700 w-[70%] h-12 px-6 py-1 rounded`}
            >
              <Text
                style={tw`text-emerald-50 font-bold  text-xl text-center tracking-normal`}
              >
                Sign in
              </Text>
            </TouchableOpacity>
            {/**Other sign in options Devider ================= */}
            <View
              style={tw`w-full flex flex-row justify-center items-center mt-4`}
            >
              <View style={tw`w-[20] h-[2px] rounded bg-emerald-700`}></View>
              <View style={tw`w-[20]`}>
                <Text
                  style={tw`text-xl font-medium text-emerald-700  text-center`}
                >
                  OR
                </Text>
              </View>
              <View style={tw`w-[20] h-[2px] rounded bg-emerald-700`}></View>
            </View>

            {/**Other sign in options ================= */}
            <View
              style={tw`w-full flex flex-row justify-center items-center mt-4`}
            >
              <View
                style={tw`w-[23%] h-12 rounded border border-emerald-600 bg-[#E7F4FD] flex flex-col items-center justify-center`}
              >
                <Icon
                  style={tw`rounded-full `}
                  name="google"
                  type="antdesign"
                  color="#0f766e"
                  size={20}
                />
              </View>
              <View
                style={tw`w-[23%] h-12 rounded border border-emerald-600 bg-[#E7F4FD] flex flex-col items-center justify-center mx-6`}
              >
                <Icon
                  style={tw`rounded-full `}
                  name="apple1"
                  type="antdesign"
                  color="#0f766e"
                  size={20}
                />
              </View>
              <View
                style={tw`w-[23%] h-12 rounded border border-emerald-600 bg-[#E7F4FD] flex flex-col items-center justify-center`}
              >
                <Icon
                  style={tw`rounded-full `}
                  name="facebook-with-circle"
                  type="entypo"
                  color="#0f766e"
                  size={22}
                />
              </View>
            </View>

            {/**Register Account ================================ */}
            <Text style={tw`text-base font-medium text-emerald-700 mt-6`}>
              Don't have an account ?{" "}
              <Text
                onPress={() => navigate.navigate("Welcome")}
                style={tw`text-base font-bold text-emerald-700 `}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
