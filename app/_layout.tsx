import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{
            drawerIcon: ()=>(<Ionicons name="home" size={18} color="#3A98FF" />),
          }}
        />
        <Drawer.Screen
          name="treinos" 
          options={{
            drawerLabel: 'Treinos',
            title: 'Treinos',
            drawerIcon: ()=>(<Ionicons name="barbell" size={18} color="#3A98FF" />),
          }}
        />
        <Drawer.Screen
          name="Contador" 
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            drawerIcon: ()=>(<Ionicons name="home" size={18} color="#3A98FF" />),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
