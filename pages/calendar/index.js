import React, { Fragment } from "react";
import Header2 from "../../components/Header2/Header2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/software-company-components/Footer/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";
import CalButton from "../../components/Calbutton/Calbutton";

const HomePage2 = () => {
  return (
    <Fragment>
      <div>
        <Header2 />
        <main className="page_content">
          <PageTitle
            pageTitle={"Book a 15-Minute Meeting"}
            pagesub={"Connect Now 😍"}
            pageTop={"Book Now"}
          />

            <CalButton />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};

export default HomePage2;
