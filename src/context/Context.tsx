import React, {createContext} from 'react';
import {useWindowDimensions} from 'react-native';

export const ThemesContext = createContext();

const ThemesContextProvider = props => {
  const {height, width} = useWindowDimensions();

  return (
    <ThemesContext.Provider value={{height, width}}>
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;
