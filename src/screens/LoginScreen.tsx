import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Text, TextInput, View } from "react-native";
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
    <View>
      <Text>Login</Text>

      <Controller
        control={control}
        name="user"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Usuário"
            value={value}
            onChangeText={onChange}
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
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
