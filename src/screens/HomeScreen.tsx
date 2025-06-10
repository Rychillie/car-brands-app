import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }: any) {
  const { user, signOut } = useAuth();
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  return (
    <SafeAreaView className="flex-1 m-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg">Olá, {user?.name}</Text>
        <Button title="Sair" onPress={signOut} />
      </View>

      <FlatList
        data={brands}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={
              item.codigo === brands[brands.length - 1].codigo
                ? "p-3"
                : "p-3 border-b"
            }
            onPress={() =>
              navigation.navigate("Models", {
                brandId: item.codigo,
                brandName: item.nome,
              })
            }
          >
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
