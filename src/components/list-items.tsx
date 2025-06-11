import { FlatList, FlatListProps, View } from "react-native";

export default function ListItems({ ...props }: FlatListProps<any>) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View className="h-3" />}
      contentContainerStyle={{ marginVertical: 32 }}
      {...props}
    />
  );
}
