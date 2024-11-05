import { Tabs } from 'expo-router';
import { ButtonTab } from '@/ui';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={ButtonTab}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
