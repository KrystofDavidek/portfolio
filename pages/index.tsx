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
        <span className="text-2xl text-red-600">
          This site is still in development, besides the future portfolio it is used to test different technologies, most recently
          the intertwining of Strapi and Wordpress backend. All texts are illustrative for now.
        </span>
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
