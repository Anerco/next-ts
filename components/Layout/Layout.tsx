import React from "react";
import Header from "../Header";
import "./Layout.css";

interface ILayoutProps {}

const Layout = ({ children }: React.PropsWithChildren<ILayoutProps>) => (
  <div className="app-layout">
    <Header />
    {children}
  </div>
);

export default Layout;
