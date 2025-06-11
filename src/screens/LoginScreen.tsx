import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, SafeAreaView, Text, TextInput } from "react-native";
import { useAuth } from "../context/AuthContext";

type FormData = { user: string; password: string };

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<FormData>();
  const { signIn } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.user, data.password);
    } catch (err: any) {
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <SafeAreaView className="m-4 flex-1 justify-center bg-darken-100">
      <Text className="text-2xl mb-4">Login</Text>

      <Controller
        control={control}
        name="user"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Usuário"
            className="border p-2 mb-2"
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Senha"
            secureTextEntry
            className="border p-2 mb-4"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
