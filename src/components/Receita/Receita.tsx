import { useState, useEffect } from "react";

const API_RECEITA = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const listagemReceitaComponent = (name: string, type: string, meal: any) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {[...Array(20)].map((_e, i) => {
          return (
            <li key={i}>
              {meal["str" + type + i] ? meal["str" + type + i] : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function Receita() {
  const [meal, setMeal] = useState<unknown>({});
  console.log(window.location.href);
  const id = window.location.href.split("/")[4];
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_RECEITA + id);
        const data = await response.json();
        console.log(data);
        setMeal(data.meals[0] || {});
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
    // @ts-ignore
      key={meal.idMeal}
      className="bg-[#fddad8] rounded-lg shadow-md p-4 text-center"
    >
      <a href=""></a>
      <h2 className="text-lg text-[#7f1d1d] font-semibold mb-2">
        {// @ts-ignore
        meal.strMeal}
      </h2>
      <img
      // @ts-ignore
        src={meal.strMealThumb}
        alt={"#"}
        className="w-1/2 h-auto mx-auto my-4 rounded-md"
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h2 className="text-lg text-[#7f1d1d] font-semibold mb-2">
            Ingredientes
          </h2>
          {listagemReceitaComponent("Ingredientes", "Ingredient", meal)}
        </div>
        <div>
          <h2 className="text-lg text-[#7f1d1d] font-semibold mb-2">
            Quantidades
          </h2>
          {listagemReceitaComponent("Quantidades", "Measure", meal)}
        </div>
      </div>
    </div>
  );
}

export default Receita;
