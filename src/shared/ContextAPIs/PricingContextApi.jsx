import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    const prices = [
      {
        id: 1,
        type: "Basic",
        price: "$ 25.00 USD",
        cred1: "Nunc a turpis blandit",
        cred2: "Sed eleifend risus nec",
        cred3: "-",
        cred4: "-",
        cred5: "-",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est pulvinar, commodo eros vitae.",
        btn: "Add To Cart",
      },
      {
        id: 2,
        type: "Standard",
        price: "$ 50.00 USD",
        cred1: "Nunc a turpis blandit",
        cred2: "Sed eleifend risus nec",
        cred3: "Praesent non turpis",
        cred4: "-",
        cred5: "-",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est pulvinar, commodo eros vitae.",
        btn: "Add To Cart",
      },
      ,
      {
        id: 3,
        type: "Premium",
        price: "$ 75.00 USD",
        cred1: "Nunc a turpis blandit",
        cred2: "Sed eleifend risus nec",
        cred3: "Praesent non turpis",
        cred4: "Donec facilisis dui",
        cred5: "-",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est pulvinar, commodo eros vitae.",
        btn: "Add To Cart",
      },
    ];
    setPricing(prices);
  }, []);

  return (
    <PricingContext.Provider value={{ pricing, setPricing }}>
      {children}
    </PricingContext.Provider>
  );
};
