import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const resume = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-4 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
            <p className="font-semibold">Academy of Technology...</p>
            <p className="my-3">Bla, bla bla</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">SW engineer</h5>
            <p className="font-semibold">Academy of Technology...</p>
            <p className="my-3">Bla, bla bla</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my02">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my02">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default resume;
