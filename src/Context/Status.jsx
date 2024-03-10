import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const StatusContext = createContext();

export default function Status({ Compoment }) {
  const [isLoading, SetIsLoading] = useState(false);
  const [isSideBar, SetIsSideBar] = useState(true);
  const [Account, setAccount] = useState({})

  const Email = window.localStorage.getItem("Email");
  const Password = window.localStorage.getItem("TokenPs");

  useEffect(() => {
    console.log(Email)
    axios
      .post("http://localhost:9000/Account/GetAccount", {
        Email: Email,
        Password: Password,
      })
      .then(rs => {
        if(rs.data.Status !== "Fauld"){
          setAccount(rs.data)
        }
      }).catch(err =>{
        console.log(err)
      })
  },[Email, Password])
  return (
    <StatusContext.Provider value={[isLoading, SetIsLoading, isSideBar, SetIsSideBar, Account, setAccount]}>
      {Compoment}
    </StatusContext.Provider>
  );
}
