import React from "react";
import Header from "../Components/dashboard/header";
import HomePage from "../Components/dashboard/HomePage";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children ? children : <HomePage />}
      </main>
    {/* add a footer here  */}
    </div>
  );
}


