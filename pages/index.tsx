import { motion } from "framer-motion";
import React from "react";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title></title>
      </Head>
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy of Technology. I have 3+
        years of experience in Web Development and I have a Youtube Channel where I teach Full Stack Web Development
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100" style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map((service) => (
            <motion.div variants={fadeInUp} key={service.title} className="bg-gray-300 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
