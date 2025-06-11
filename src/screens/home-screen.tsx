import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemList } from "../components";

export default function HomeScreen({ navigation }: any) {
  const [brands, setBrands] = useState<any[]>([]);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      <View
        className="flex-1 absolute inset-x-0 h-24 z-10 bg-gradient from-darken-100 to-darken-100/0"
        style={{ bottom: insets.bottom }}
      >
        <LinearGradient
          colors={[
            "rgba(32, 32, 36, 0)",
            "rgba(32, 32, 36, 0.5)",
            "rgba(32, 32, 36, 1)",
          ]}
          style={{ flex: 1 }}
        />
      </View>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.codigo}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerStyle={{ marginVertical: 32 }}
        renderItem={({ item }) => (
          <ItemList
            code={item.codigo}
            name={item.nome}
            onPress={() =>
              navigation.navigate("Models", {
                brandId: item.codigo,
                brandName: item.nome,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
