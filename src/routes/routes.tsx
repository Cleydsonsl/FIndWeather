import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens';
import {Home} from '../screens';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={(props: any) => <WelcomeScreen {...props}/>} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
