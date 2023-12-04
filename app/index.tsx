import { ReactNode } from "react";
import { Stack } from "expo-router";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import Button from "@components/ScreenButtons/index";
import Welcome from "@components/Welcome";

import menuBar from "@assets/images/menus.png";
import profileImage from "@assets/images/pexels-photo-220453.webp";

import colors from "../constants/Colors";
const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.light.background },
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: (): ReactNode => {
            return <Button imageUrl={menuBar} />;
          },
          headerRight: () => {
            return <Button imageUrl={profileImage} />;
          },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 h-screen px-5 py-7">
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
