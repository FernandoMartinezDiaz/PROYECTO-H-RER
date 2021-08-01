import React from "react";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/components/providers/AuthContext";
import theme from "./src/components/theme";
import LongTimers from "./src/components/utils/LongTimer"
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  LongTimers();

  return (
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </AuthProvider>
  );
}

