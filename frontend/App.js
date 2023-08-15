import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from "./hooks/geceModuAc";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", geceModu);
  }, [geceModu]);

  /*KENDİME NOTLAR
Burada, useEffect kullanarak geceModu değeri değiştiğinde document.body.classList.toggle("dark-mode", geceModu) kodunu çalıştırıyoruz. 
Böylece, dark-mode class'ı geceModu'na göre eklenip çıkarılacak ve uygulama gece modunda çalışabilecek.
  */

  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={toggleDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;