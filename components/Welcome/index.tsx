import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import searchIcon from "@assets/images/search-interface-symbol.png";
import { Href, useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const router = useRouter();

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };
  return (
    <View>
      <View>
        <Text className="text-lg text-slate-700">Hello Adrian</Text>
        <Text className="text-2xl text-slate-700 font-bold">
          Find your perfect job
        </Text>
      </View>

      <View className=" flex-row items-center flex-nowrap">
        <View className="w-10/12 h-14 bg-slate-100 rounded-lg my-4 mr-1.5">
          <TextInput
            className="w-auto h-full font-['DMBold'] text-xl pl-3 box-border"
            placeholder="What are you looking for?"
            value={inputValue}
            onChangeText={(text: string) => handleInputChange(text)}
          />
        </View>

        <TouchableOpacity className="w-14 h-14">
          <View className="w-full h-full bg-orange-600 flex justify-center items-center rounded-md">
            <Image source={searchIcon} className="w-8 h-8" />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={jobTypes}
          horizontal
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              className={`h-9 w-24 border-solid border-gray-300 border-2 mb-1 mr-2 rounded-full flex justify-center items-center ${
                activeJobType === item ? "border-black" : ""
              }`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}` as Href<string>);
              }}
            >
              <Text
                className={`text-gray-400 ${
                  activeJobType === item ? "text-black" : ""
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Welcome;
