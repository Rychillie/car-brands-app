import React, { useEffect, useState } from "react";
import { ItemList, Layout, ListItems } from "../components";

export default function ModelsScreen({ route }: any) {
  const { brandId } = route.params;
  const [models, setModels] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
    )
      .then((res) => res.json())
      .then((data) => setModels(data.modelos));
  }, []);

  return (
    <Layout>
      <ListItems
        data={models}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <ItemList code={item.codigo} name={item.nome} />
        )}
      />
    </Layout>
  );
}
