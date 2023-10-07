import React, { createContext, ReactNode, useCallback, useState } from "react";
import axios from "axios";
type Test = {
  children: ReactNode;
};

interface Mealsprop {
  Meals: string;
}
interface Letraprop {
  Meals: string;
}
interface Ingredienteprop {
  Meals: string;
}
interface Randomprop {
  Meals: string;
}
interface SearchId {
  Meals: string;
}

export const myContext = createContext({});

export const AppContext: React.FC<Test> = ({ children }) => {
  const [meals, setMeals] = useState<Mealsprop[]>([]);
  const [letra, setLetra] = useState<Letraprop[]>([]);
  const [ingrediente, setIngrediente] = useState<Ingredienteprop[]>([]);
  const [randomMeal, setRandomMeal] = useState<Randomprop[]>([]);
  const [SearchId, setSearchId] = useState<SearchId[]>([]);

  const fetchNomePageMeals = useCallback((searchTerm: Mealsprop) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchLetra = useCallback((searchLetter: Letraprop) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
      )
      .then((res) => {
        setLetra(res.data.meals);
      });
  }, []);

  const fetchIngrediente = useCallback((searchIngrediente: Ingredienteprop) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchIngrediente}`
      )
      .then((res) => {
        setIngrediente(res.data.meals);
      });
  }, []);

  const fetchRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setRandomMeal(res.data.meals);
      });
  }, []);

  const fetchSearchId = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${SearchId}`)
      .then((res) => {
        setSearchId(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        randomMeal,
        fetchRandomMeal,
        fetchNomePageMeals,
        meals,
        fetchLetra,
        letra,
        fetchIngrediente,
        ingrediente,
        SearchId,
        fetchSearchId,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
