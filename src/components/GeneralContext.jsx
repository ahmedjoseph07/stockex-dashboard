import React from "react";

const GeneralContext = React.createContext();

export const GeneralContextProvider = (props) => {

  return (
    <GeneralContext.Provider>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;