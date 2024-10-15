import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigations/MainNavigation";
import CategoryList from "./src/Components/CategoryList";
import CategoryCard from "./src/Components/CategoryCard";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
        {/* <CategoryList /> */}
        {/* <CategoryCard /> */}
      </QueryClientProvider>
    </NavigationContainer>
  );
}
