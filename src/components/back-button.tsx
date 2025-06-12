import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BackButton() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity className="ml-4" onPress={() => navigation.goBack()}>
      <Image source={require("../../assets/arrow-back.png")} />
    </TouchableOpacity>
  );
}
