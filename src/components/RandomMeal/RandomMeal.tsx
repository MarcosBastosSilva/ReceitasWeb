import { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import { Link } from "react-router-dom";

const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    
    <div className="bg-[#feedec] min-h-screen flex flex-col items-center justify-start font-uppercase">
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="bg-[#fddad8] rounded-lg shadow-md p-4 text-center m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <div>
          <Link to={`/Receita/${meal.idMeal}`}>
            <img
              src={meal.strMealThumb}
              alt="#"
              className="w-48 h-auto rounded-md mx-auto"
            />
            </Link>
            <button
              onClick={fetchRandomMeal}
              className="mt-2 px-4 py-2 rounded-full bg-[#fca5a5] text-[#7f1d1d] hover:bg-[#f87171] block mx-auto"
            >
              Gerar outra refeição
            </button>
          </div>
          <div className="mt-4">
            <h4 className="text-lg text-[#7f1d1d] font-semibold">Instruções</h4>
            <p className="text-uppercase text-justify">{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomMeal;
