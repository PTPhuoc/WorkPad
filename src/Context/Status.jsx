import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export default function Status({ Compoment }) {
  const [isLoading, SetIsLoading] = useState(false);
  return (
    <StatusContext.Provider value={[isLoading, SetIsLoading]}>
      {Compoment}
    </StatusContext.Provider>
  );
}
