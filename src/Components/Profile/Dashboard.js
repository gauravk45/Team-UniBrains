import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "@react-spring/web";

function Dashboard() {
  const { number } = useSpring({
    number: 1200,
    from: { number: 0 },
    config: { tension: 200, friction: 11 },
  });

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} sx={{ borderRadius: "15px" }}>
          <Card>
            <CardContent>
              <Typography variant="h6">WishList</Typography>
              <Typography variant="h5">Items</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Orders</Typography>
              <Typography variant="h5">Orders</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Visitors</Typography>
              <Typography variant="h4">
                <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={() => alert("View More Statistics")}
      >
        View More
      </Button>
    </Box>
  );
}

export default Dashboard;
