import React from "react";
import Logo from "../../components/UI/Logo/Logo";

const Main: React.FC = ({ children }) => {
  return (
    <main>
      <Logo />
      {children}
    </main>
  );
};

export default Main;
