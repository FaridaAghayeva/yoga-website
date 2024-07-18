import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    const testimonials = [
      {
        id: 1,
        img: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3bf7955009bd_062f.jpg",
        job: "TRAINER",
        name: "Suzanna Rice",
        text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
      },
      {
        id: 2,
        img: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6eb85009ba_046m.jpg",
        job: "TRAINER",
        name: "Norbu Phoebus",
        text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
      },
      {
        id: 3,
        img: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6e1f5009b6_053f.jpg",
        job: "TRAINER",
        name: "Sierra Valentine",
        text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
      },
      {
        id: 4,
        img: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b17555009bb_092m.jpg",
        job: "TRAINER",
        name: "Sachin Iacobus",
        text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
      },
    ];
    setTest(testimonials);
  }, []);

  return (
    <TestContext.Provider value={{ test, setTest }}>
      {children}
    </TestContext.Provider>
  );
};
