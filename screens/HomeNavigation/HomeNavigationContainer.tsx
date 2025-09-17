import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlexboxDemo } from "../FlexboxDemo/FlexboxDemo";
import { HomePage } from "../HomePage/HomePage";
import { DetailPage } from "../List/Detail/DetailPage";
import { FlatListPage } from "../List/FlatList/FlatListPage";
import { ListPage } from "../List/ListPage";

const Stack = createNativeStackNavigator();

export const HomeNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="FlexboxDemo"
          component={FlexboxDemo}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="FlatListPage"
          component={FlatListPage}
          options={{ presentation: "card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
