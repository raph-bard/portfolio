"use client";

import SectionTitle from "../../sections/section-title/SectionTitle";

interface AboutProps {
    className?: string
}

const About = ({ className } : AboutProps) => {

    return (
        <div className={className}>
            <SectionTitle>à propos</SectionTitle>
            <p className="mb-4 leading-normal">Fort d’un parcours en intégration web (HTML, CSS, WordPress, Prestashop), j'ai continué mon parcours avec passion dans le développement front-end moderne. Je travaille aujourd’hui avec Next.js, TypeScript, TailwindCSS et Storybook pour construire des interfaces réactives, accessibles, structurées et bien documentées.</p>

            <p className="mb-4 leading-normal">J’accorde beaucoup d’importance aux détails, à la cohérence visuelle et à l’ergonomie avec une grand sensibilité pour le design. Mon objectif : créer des expériences utilisateurs fluides, intuitives et élégantes, sans sacrifier la performance ni l’accessibilité.</p>

            <p className="mb-4 leading-normal">Je m’intéresse également à la mise en place de design systems et à l’industrialisation des composants avec Storybook. J’aime coder de manière claire, maintenable, et participer à des projets où la qualité du front-end est une priorité.</p>
        </div>
    );
}

export default About;