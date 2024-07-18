import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BenefitsContext = createContext();

export const BenefitsProvider = ({ children }) => {
  const [benefit, setBenefit] = useState([]);
  useEffect(() => {
    const benefits = [
      {
        id: 1,
        title: "Kundalini",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Sierra Valentine",
      },
      {
        id: 2,
        title: "Hatha",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Norbu Phoebus",
      },
      {
        id: 3,
        title: "Ashtanga",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Suzanna Rice",
      },
      {
        id: 4,
        title: "Bikram",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Sachin Iacobus",
      },
      {
        id: 5,
        title: "Vinyasa",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Sierra Valentine",
      },
      {
        id: 6,
        title: "Iyengar",
        text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
        author: "Suzanna Rice",
      },
    ];
    setBenefit(benefits);
  }, []);

  return (
    <BenefitsContext.Provider value={{ benefit, setBenefit }}>
      {children}
    </BenefitsContext.Provider>
  );
};
