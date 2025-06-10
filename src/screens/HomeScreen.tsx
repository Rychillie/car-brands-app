import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }: any) {
  const { user, signOut } = useAuth();
  const [brands, setBrands] = useState<any[]>([]);

  console.log("user: ", user);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  return (
    <View>
      <View>
        <Text>Olá, {user?.name}</Text>
        <Button title="Sair" onPress={signOut} />
      </View>

      <FlatList
        data={brands}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <TouchableOpacity
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
    </View>
  );
}
