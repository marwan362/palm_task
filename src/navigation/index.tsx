import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WellnessScreen from '../screens/wellness';
import HistoryScreen from '../screens/history';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Wellness" component={WellnessScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabs;
