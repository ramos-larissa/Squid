import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardDialog from "../cardDialog";

export default function CardImage(response) {
  const data = response.response.data;

  console.log(data, "TESTE DO DATA ----");

  return (
    <>
      {console.log(data, "dentro do return")}
      {data?.map((item, index) => {
        console.log(item);
        return (
          <Card sx={{ width: 400 }} className="container" key={index}>
            <CardContent className="card-content">
              <a href={item.link} target="_blank">
                <img src={item.imagens.resolucaoPadrao.url} />
              </a>
              <div className="btn-more">
                <CardDialog data={item} key={index} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
