
import React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { ContactCTA } from "../components/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Benefits />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
