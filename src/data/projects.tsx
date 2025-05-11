import { ProjectData } from "@/types/project";

export const projects: ProjectData[] = [
    {
      title: "Lucien Georgelin",
      imgSrc: "/img/lucien-georgelin.jpg",
      description: "Développement d’un site e-commerce complet sous Prestashop pour de la vente d'agroalimentaire, en collaboration avec l’agence Definima.",
      link: "https://www.lucien-georgelin.com/fr/",
      tools: ["Prestashop"]
    },
    {
      title: "Portfolio",
      imgSrc: "/img/portfolio.jpg",
      description: "Création de mon portfolio en Next.js pour présenter mes projets et progresser sur l’écosystème React moderne avec Tailwind CSS et TypeScript.",
      link: "https://github.com/",
      tools: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Nowi Beta",
      imgSrc: "/img/nowi.jpg",
      description: "Application web Angular & Java Spring dédiée aux créateurs de contenu, avec un système de gestion de compte, de projets et d'abonnement. Projet en collaboration dans le cadre d’une formation.",
      link: "",
      tools: ["Angular", "Java Spring", "TypeScript"]
    },
    {
      title: "Street Art Hunters",
      imgSrc: "/img/streetarthunters.jpg",
      description: "Prototype d’un jeu mobile interactif permettant de découvrir le street-art à Bordeaux. Développement front avec React et backend Express/Node.",
      link: "",
      tools: ["React", "Express Node"]
    }
  ];
  