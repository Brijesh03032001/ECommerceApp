import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import { dressPage1 } from "../../../Data/dress/page1";
import { sareePage1 } from "../../../Data/Saree/page1";
import { mensPantsPage1 } from "../../../Data/pants/men_page1";
import { mensShoesPage1 } from "../../../Data/shoes";

const Homepage = () => {
  return (
    <>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} section_name={"Men's Kurta"} />
        <HomeSectionCarosel data={mensPantsPage1} section_name={"Men's Pant"} />
        <HomeSectionCarosel data={dressPage1} section_name={"Women's Dress"} />
        <HomeSectionCarosel data={sareePage1} section_name={"Women's Saree"} />
        <HomeSectionCarosel
          data={mensShoesPage1}
          section_name={"Men's Shoes"}
        />
      </div>
    </>
  );
};

export default Homepage;
