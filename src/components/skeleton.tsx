import { FlatList, View } from "react-native";
import Layout from "./layout";

export default function Skeleton() {
  return (
    <Layout>
      <FlatList
        data={Array.from({ length: 10 })}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={(index) => (
          <View
            className="relative h-20 mx-8"
            style={{
              opacity: 1 - (index.index + 1) * 0.1,
            }}
          >
            <View className="size-full rounded-md bg-darken-200" />
            <View className="absolute inset-0 rounded-md bg-darken-300 animate-ping" />
          </View>
        )}
        contentContainerStyle={{ marginVertical: 32 }}
      />
    </Layout>
  );
}
