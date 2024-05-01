import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Components/Navigation/StackNavigation";


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StackNavigation/>
    </NavigationContainer>
  );
}