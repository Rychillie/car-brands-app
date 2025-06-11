import React, { useEffect, useState } from "react";
import { ItemList, Layout, ListItems } from "../components";

export default function HomeScreen({ navigation }: any) {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  return (
    <Layout>
      <ListItems
        data={brands}
        keyExtractor={(item) => item.codigo}
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
    </Layout>
  );
}
