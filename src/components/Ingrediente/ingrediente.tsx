import { useContext, useCallback, useState } from "react";
import { myContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Ingrediente = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchIngrediente, ingrediente } = useContext(myContext);
  const fetchMealsHandler = useCallback(() => {
    fetchIngrediente(searchTerm);
  }, [searchTerm, fetchIngrediente]);

  return (
    <div className="bg-[#feedec] min-h-screen flex flex-col items-center justify-start font-uppercase">
      <div className="py-6">
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Escreva um ingrediente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#feedec]"
          />
          <button
            onClick={fetchMealsHandler}
            className="mt-2 px-4 py-2 rounded-full bg-[#fca5a5] text-[#7f1d1d] hover:bg-[#f87171]"
          >
            Buscar pratos
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {ingrediente ? (
          ingrediente.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-[#fddad8] rounded-lg shadow-md p-4 text-center m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <Link to={`/Receita/${meal.idMeal}`}>
                <img
                  src={meal.strMealThumb}
                  alt="#"
                  className="w-full h-auto rounded-md"
                />
                <h4 className="text-lg text-[#7f1d1d] font-semibold mt-2">
                  {meal.strMeal}
                </h4>
              </Link>
            </div>
          ))
        ) : (
          <h2 className="mt-4">
            Nenhum prato encontrado com este ingrediente.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Ingrediente;
