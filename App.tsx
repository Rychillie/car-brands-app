import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "./assets/tailwind.css";
import { BackButton, Header } from "./src/components";
import { AuthProvider, useAuth } from "./src/context/auth-context";
import { HomeScreen, LoginScreen, ModelsScreen } from "./src/screens";
import { colors } from "./src/theme";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  const { user, signOut } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.darken[200] },
        headerTintColor: colors.lighten[100],
        contentStyle: { backgroundColor: colors.darken[100] },
      }}
    >
      {!user ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => <Header name={user.name} signOut={signOut} />,
            }}
          />
          <Stack.Screen
            name="Models"
            component={ModelsScreen}
            options={({ route }) => ({
              title: route.params?.brandName,
              headerLeft: () => <BackButton />,
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
