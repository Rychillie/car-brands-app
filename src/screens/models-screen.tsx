import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";

export default function ModelsScreen({ route }: any) {
  const { brandId, brandName } = route.params;
  const [models, setModels] = useState<any[]>([]);

  console.log("model: ", route.params);

  useEffect(() => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
    )
      .then((res) => res.json())
      .then((data) => setModels(data.modelos));
  }, []);

  return (
    <SafeAreaView className="flex-1 m-4">
      <Text className="text-xl mb-4">{brandName}</Text>
      <FlatList
        data={models}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <Text
            className={
              item.codigo === models[models.length - 1].codigo
                ? "p-3"
                : "p-3 border-b"
            }
          >
            {item.nome}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
