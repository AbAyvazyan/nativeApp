import { FC } from "react";
import { ImageProps, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

const Button: FC<{ imageUrl: ImageProps; handleTouch?: () => void }> = ({
  imageUrl,
  handleTouch,
}) => {
  return (
    <TouchableOpacity
      onPress={handleTouch}
      className="h-10 w-10 bg-slate-100 rounded-lg "
    >
      <Image source={imageUrl} className="w-10 h-10 rounded-lg" />
    </TouchableOpacity>
  );
};

export default Button;
