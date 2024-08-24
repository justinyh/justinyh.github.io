import Footer from "@/components/Footer";
import NavBar from "@/components/navigation/NavBar";
import { Fragment } from "react";
import Layout from "../about/layout";

export default function HeaderFooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
        <div className="">
          {children}
        </div>
        <Footer />
    </Fragment>
  );
}
