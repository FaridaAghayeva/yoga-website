import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TestProvider } from "./shared/ContextAPIs/TestContextApi.jsx";
import { BenefitsProvider } from "./shared/ContextAPIs/BenefitsContextApi.jsx";
import { PricingProvider } from "./shared/ContextAPIs/PricingContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PricingProvider>
    <BenefitsProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </BenefitsProvider>
  </PricingProvider>
);
