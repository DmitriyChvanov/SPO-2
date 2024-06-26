import React, { useContext } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import { useState } from "react";
import "./qrcode.css";
import { Context } from "../..";

const QRGenerator = () => {

  const {ticket} = useContext(Context) 

  const [name, setName] = useState("");
  const getTheName = () => {
    axios
      // contacts vmesto ticket
      .get("http://localhost:5000/api/ticket")
      .then((res) => {
        console.log(res.data);
        console.log(res.data[res.data.length - 1].price);
        setName(res.data[res.data.length - 1].price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let path = "http://localhost:5000/api/ticket";

  getTheName();
  return (
    <div>
      <div className="white">
        <QRCode value={ticket._orderID}/>
      </div>
    </div>
  );
};

export default QRGenerator;
