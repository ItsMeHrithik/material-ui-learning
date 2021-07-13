import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from './components/Content'
const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <h1>Items on sale</h1>
      </Grid>
      <Grid item container>
        <Grid item sm={2} xs={0} />
        <Grid item sm={8} xs={12}>
         <Content/>
        </Grid>
        <Grid item sm={2} xs={0} />
      </Grid>
    </Grid>
  );
};

export default App;
