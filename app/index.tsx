import { Redirect } from 'expo-router';

export default function Index() {
  // Later you can add auth check logic here
  // const isAuthenticated = useAuth();
  // if (isAuthenticated) return <Redirect href="/admin" />;
  
  return <Redirect href="/(auth)/login" />;
}
