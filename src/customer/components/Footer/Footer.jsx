import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Section from "./Section";
const sections = [
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Insights"],
  },
  {
    title: "Support",
    items: ["Contact", "Help Center", "FAQs", "Privacy Policy"],
  },
  {
    title: "Resources",
    items: ["Documentation", "Tutorials", "Community", "API Reference"],
  },
];
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {sections.map((section, index) => (
          <Section key={index} title={section.title} items={section.items} />
        ))}
      </Grid>
    </div>
  );
};

export default Footer;
