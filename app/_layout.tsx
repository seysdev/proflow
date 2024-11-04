import { Stack } from 'expo-router';
import { makeServer } from '@/mocks';

if (__DEV__) {
  makeServer({ environment: 'development' });
}

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}
