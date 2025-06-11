import { Text, TouchableOpacity } from "react-native";

type ItemListProps = {
  code: string;
  name: string;
  onPress: () => void;
};

export default function ItemList({ code, name, onPress }: ItemListProps) {
  return (
    <TouchableOpacity
      className="gap-1 mx-8 bg-darken-200 py-5 px-4 rounded-md"
      onPress={onPress}
    >
      <Text className="text-lighten-100 font-bold">{name}</Text>
      <Text className="text-lighten-300 text-xs">{code}</Text>
    </TouchableOpacity>
  );
}
