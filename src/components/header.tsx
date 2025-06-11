import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  name: string;
  signOut: () => void;
};

export default function Header({ name, signOut }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-darken-200">
      <View
        className="flex-row items-center justify-between py-8 px-8"
        style={{ marginTop: insets.top }}
      >
        <View className="flex-row gap-2 items-center">
          <View className="size-12">
            <Image
              className="size-full rounded-lg"
              source={require("../../assets/rychillie.png")}
            />
          </View>
          <View>
            <Text className="text-lighten-200">Olá,</Text>
            <Text className="text-lg font-bold text-lighten-200">{name}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={signOut}>
          <Image
            className="size-8"
            source={require("../../assets/signout.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
