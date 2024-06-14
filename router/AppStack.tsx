import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";
import HomePage from "../pages/HomePage";

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#de1414', // Cambia el color del encabezado aquí

          borderWidth: 0,
        },
        headerTitleStyle: {
          fontSize: 30, // Ajusta el tamaño del texto del título del encabezado aquí
          color: '#FFF', // Texto blanco
        },
        headerRight: () => (
          <Button
            title='log out'
            onPress={logout}
            color="#000" // Cambia el color del botón aquí
          />
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
