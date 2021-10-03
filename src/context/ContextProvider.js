import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const InputDataProvider = (props) => {
  const [data, setData] = useState({
    countryName: false,
    fromDate: false,
    toDate: false,
    isCountryValid: "",
    isToDateValid: "",
    isFromDateValid: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
