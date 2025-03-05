import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
};

export default App;
