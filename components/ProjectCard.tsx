import React, { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { FaBullseye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

const ProjectCard: FC<{ project: IProject }> = ({
  project: { name, image_path, category, deployed_url, description, github_url, key_techs },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="bg-gray-200 dark:bg-dark-200">
      <img onClick={() => setShowDetail(true)} src={image_path} alt={name} className="cursor-pointer" />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />
            <div className="flex items-start py-4 lg:justify-center">
              <a className="flex items-center p-2 px-4 mx-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200" href="{github_url}">
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                className="flex items-center p-2 px-4 mx-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200"
                href="{deployed_url}"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </div>
          <div className="py-2">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 text-sm tracking-wider spac-x-2">
              {key_techs.map((tech) => {
                return (
                  <span key={tech} className="px-2 py-1 m-1 bg-gray-200 rounded-lg dark:text-white dark:bg-dark-200">
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          <button
            className="absolute bg-gray-200 rounded-full top-1.5 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(false)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
