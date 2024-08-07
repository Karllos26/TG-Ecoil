import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#028960', headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <Ionicons size={size} name="home" color={color} />
            } else {
              return <Ionicons size={size} name="home-outline" color={color} />
            }
          }


        }}
      />
      <Tabs.Screen
        name="agendamento"
        options={{
          title: 'Agendamentos',
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <Ionicons size={size} name="calendar-sharp" color={color} />
            } else {
              return <Ionicons size={size} name="calendar-outline" color={color} />
            }
          },
        }}
      />
      <Tabs.Screen
        name="pontos"
        options={{
          title: 'Pontos',
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <Ionicons size={size} name="location-sharp" color={color} />
            } else {
              return <Ionicons size={size} name="location-outline" color={color} />
            }
          }
        }}
      />
      <Tabs.Screen
        name="recipientes"
        options={{
          title: 'Recipientes',
          tabBarIcon: ({ color, focused, size }) =>
            <MaterialIcons size={size} name="oil-barrel" color={color} />

        }}
      />
    </Tabs>
  );
}
