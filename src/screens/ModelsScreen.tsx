import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function ModelsScreen({ route }: any) {
  const { brandId, brandName } = route.params;
  const [models, setModels] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
    )
      .then((res) => res.json())
      .then((data) => setModels(data.modelos));
  }, []);

  return (
    <View>
      <Text>{brandName}</Text>
      <FlatList
        data={models}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  );
}
