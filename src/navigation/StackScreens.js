import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Page2 from "../screens/Page2";


const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  );
};

export default StackScreens;
