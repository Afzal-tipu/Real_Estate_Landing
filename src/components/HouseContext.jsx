

import React, {useState, useEffect, createContext} from 'react';

// import data
import { housesData } from "../data";

// create Context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState(['Property type (any)']);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');
  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
   

    // remove duplicates
     const uniqueProperties = ["Property Type (any)", ...new Set(allProperties)];

    // set properties state
    setProperties(uniqueProperties);
    
  }, []);

  const handleClick = ()=> {
    //set loading
    setLoading(true)
    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      
     str = String(str);
    
      return str.split(' ').includes('(any)');
    };
    
    

    // get first value of price which is the minimum price and parse it to number

    const minPrice = parseInt(price.split(" ")[0]);
    // get second value of price which is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return housePrice;
        }
      }

      // if country & property are not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country &&
               house.type === property;
        ;
      }

      // if country & price are not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if property & price are not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
         }
      }
    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 500);
    
       

  };

  useEffect(() => {
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  },[theme]);

  const handleThemeSwitch = () => {
      setTheme(theme==='dark' ? 'light' : 'dark' );
  };
 


  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
        theme,
        setTheme,
        handleThemeSwitch
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export default HouseContextProvider;