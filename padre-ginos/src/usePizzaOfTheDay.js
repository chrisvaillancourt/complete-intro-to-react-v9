import { useState, useEffect } from "react";

function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
}

export { usePizzaOfTheDay };