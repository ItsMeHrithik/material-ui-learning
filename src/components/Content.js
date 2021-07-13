import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import itemsList from "../data";
const Content = () => {
  const itemMakerCard = (itemObj) => {
    // const {imgSrc, subtitle, description, title} = itemObj
    return (
      <Grid item sm={4} xs={12}>
        <Card {...itemObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {/* <Card
          title="₹81,590"
          subtitle="2021 Apple iPad Pro with Apple M1 chip"
          description="(2021 Apple iPad Pro with Apple M1 chip 11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)"
          imgSrc="https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UY218_.jpg"
        /> */}
      {itemsList.map((itemObj) => itemMakerCard(itemObj))}
      {/* <Grid item sm={4} xs={12}>
        <Card />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card />
      </Grid> */}
    </Grid>
  );
};

export default Content;
