import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../context/auth-context";

type FormData = { user: string; password: string };

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<FormData>();
  const { signIn } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.user, data.password);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="m-8 flex-1 justify-center"
      >
        <Text className="text-2xl font-bold mb-4 text-lighten-100">
          Acesse sua conta:
        </Text>

        <Controller
          control={control}
          name="user"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Usuário"
              className="border p-4 mb-4 bg-darken-200 placeholder:text-lighten-300/80 border-darken-300 rounded-lg placeholder:font-semibold text-lighten-200"
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
              className="border p-4 mb-4 bg-darken-200 placeholder:text-lighten-300/80 border-darken-300 rounded-lg placeholder:font-semibold text-lighten-200"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <TouchableOpacity
          className="bg-green-100 p-4 rounded-lg justify-center items-center"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-lighten-100 font-bold text-lg">Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
