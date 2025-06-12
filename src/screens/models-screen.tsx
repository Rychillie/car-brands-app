import React from "react";
import { api, useFetch } from "../api";
import { ItemList, Layout, ListItems, Skeleton } from "../components";
import { ModelsResponse } from "../types/api";
import { ModelsScreenProps } from "../types/navigation";

export default function ModelsScreen({ route }: ModelsScreenProps) {
  const { brandId } = route.params;
  const { data, isLoading } = useFetch<ModelsResponse>(api.ModelsURL(brandId));

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Layout>
      <ListItems
        data={data?.modelos}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <ItemList
            code={item.codigo.toString()}
            name={item.nome}
            isLast={
              data?.modelos &&
              data?.modelos?.indexOf(item) === data?.modelos?.length - 1
            }
          />
        )}
      />
    </Layout>
  );
}
