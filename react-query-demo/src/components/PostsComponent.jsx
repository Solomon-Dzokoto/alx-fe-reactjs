import { useQuery } from "@tanstack/react-query";

// const fetchPosts = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     return response.json();
//   } catch (err) {
//     console.error(err);
//   }
// };
const PostsComponent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
      cacheTime: 1000 * 60 * 60 * 5, 
      staleTime: 1000 * 60 * 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    
  
  });

  if (!data) <p>No post fetch</p>;
  if (isLoading) <p>Loading...</p>;

  return (
    <div>
      <h1 style={{ alignItems: "center" }}>React Query</h1>
      <button onClick={() => console.log(data)}>Refetch</button>
      {data?.slice(0, 9).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
      {isError && <p>Error: {isError.message}</p>}
    </div>
  );
};

export default PostsComponent;
