import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Models: {
    brandId: string;
    brandName: string;
  };
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type ModelsScreenProps = NativeStackScreenProps<RootStackParamList, "Models">;