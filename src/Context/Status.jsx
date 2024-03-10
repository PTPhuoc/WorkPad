import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export default function Status({ Compoment }) {
  const [isLoading, SetIsLoading] = useState(false);
  const [isSideBar, SetIsSideBar] = useState(true)
  return (
    <StatusContext.Provider value={[isLoading, SetIsLoading, isSideBar, SetIsSideBar]}>
      {Compoment}
    </StatusContext.Provider>
  );
}
