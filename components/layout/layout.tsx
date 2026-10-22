import { Fragment } from "react/jsx-runtime";
import MainNavigation from "./main-navigation";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
