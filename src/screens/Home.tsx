import Box from "src/components/Box";

const Home = () => {
  return (
    <Box
      backgroundColor="white"
      display="flex"
      style={{
        flexDirection: "column",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        margin: "12px",
        padding: "5px",
      }}
    >
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </Box>
  );
};

export default Home;
