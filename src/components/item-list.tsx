import { Text, TouchableOpacity, View } from "react-native";

type ItemListProps = {
  code: string;
  name: string;
  onPress?: () => void;
  isLast?: boolean;
};

function TextContent({ code, name, onPress }: ItemListProps) {
  return (
    <>
      <Text className="text-lighten-100 font-bold">{name}</Text>
      <Text className="text-lighten-300 text-xs">{code}</Text>
    </>
  );
}

export default function ItemList({
  code,
  name,
  onPress,
  isLast,
}: ItemListProps) {
  if (!onPress) {
    return (
      <View
        className="gap-1 mx-8 bg-darken-200 py-5 px-4 rounded-md"
        style={{ marginBottom: isLast ? 80 : 0 }}
      >
        <TextContent code={code} name={name} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="gap-1 mx-8 bg-darken-200 py-5 px-4 rounded-md"
      style={{ marginBottom: isLast ? 80 : 0 }}
      onPress={onPress}
    >
      <TextContent code={code} name={name} />
    </TouchableOpacity>
  );
}
