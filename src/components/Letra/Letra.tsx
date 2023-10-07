import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_LETRA = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

function Letra() {
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMealsByLetter = async (letter: string) => {
    setLoading(true);
    try {
      const response = await fetch(API_LETRA + letter);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealsByLetter("a");
  }, []);

  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(97 + index)
  );

  return (
    <div className="App bg-[#feedec] min-h-screen flex flex-col items-center justify-start font-uppercase">
      <h1 className="text-3xl font-bold mt-6 mb-4 text-[#f56960]">
        Receitas com a primeira letra
      </h1>
      <div className="letters flex space-x-2 mb-4">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => fetchMealsByLetter(letter)}
            className="px-4 py-2 rounded-full bg-[##fbc9c5] text-[#dc2626] hover:bg-[#fbc9c5] hover:text-[#991b1b]"
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      {loading && <p className="mt-4">Carregando...</p>}
      <div className="bg-[#feedec] w-full py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-[#fddad8] rounded-lg shadow-md p-4 text-center"
            >
              <Link to={`/Receita/${meal.idMeal}`}>
                <h2 className="text-lg text-[#7f1d1d] font-semibold mb-2">
                  {meal.strMeal}
                </h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-auto rounded-md"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Letra;
