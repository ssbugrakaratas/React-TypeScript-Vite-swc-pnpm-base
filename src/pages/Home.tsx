import { Button, Card, CardActions, CardContent } from "@mui/material";

const Home = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h1>Welcome to My App 🚀</h1>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Home;
