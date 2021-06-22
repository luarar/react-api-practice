
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const HeroContext = createContext();

export const HeroProvider = (props) => {
  const [hero, setHero] = useState();

  const heroRequest = async () => {
    try {
      const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
      console.log(response.data)
      setHero(response.data);
    } catch (e) {
      console.log('error');
    }
  };

	useEffect(() => {
		heroRequest(setHero);
	}, []);

	return (
		<HeroContext.Provider value={[hero, setHero]}>
			{props.children}
		</HeroContext.Provider>
	);
};