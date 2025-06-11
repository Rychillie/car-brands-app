import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 relative">
      <View
        className="flex-1 absolute inset-x-0 h-24 z-10 bg-gradient from-darken-100 to-darken-100/0"
        style={{ bottom: insets.bottom }}
      >
        <LinearGradient
          colors={[
            "rgba(32, 32, 36, 0)",
            "rgba(32, 32, 36, 0.5)",
            "rgba(32, 32, 36, 1)",
          ]}
          style={{ flex: 1 }}
        />
      </View>

      {children}
    </SafeAreaView>
  );
}
