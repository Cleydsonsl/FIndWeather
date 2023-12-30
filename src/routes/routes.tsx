import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
