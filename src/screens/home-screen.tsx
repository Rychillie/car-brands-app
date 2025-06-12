import React from "react";
import { api, useFetch } from "../api";
import { ItemList, Layout, ListItems, Skeleton } from "../components";
import { Api, Navigation } from "../types";

export default function HomeScreen({ navigation }: Navigation.HomeScreenProps) {
  const { data, isLoading } = useFetch<Api.BrandsResponse>(api.BrandsURL);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Layout>
      <ListItems
        data={data}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <ItemList
            code={item.codigo}
            name={item.nome}
            isLast={
              data && item.codigo === data[data.length - 1].codigo
                ? true
                : false
            }
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
