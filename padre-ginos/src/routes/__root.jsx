import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        {/* only need to wrap contexts that should have access to the context */}
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            {/* outlet is the part of the page that's swapped out */}
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
