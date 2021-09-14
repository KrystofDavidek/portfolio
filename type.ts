import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface IPost {
  id: string;
  date: Date;
  slug: string | null;
  title: string | null;
  extraPostInfo: IExtraInfo | null;
  author: {
    node: {
      firstName: string | null;
      nickname: string | null;
    };
  };
}

export interface IExtraInfo {
  postContent: string;
  previewImage: string | null;
  previewInfo: string | null;
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
