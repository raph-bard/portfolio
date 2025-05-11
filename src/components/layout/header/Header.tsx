"use client";

import Headline from "../../ui/headline/Headline";

const Header = () => {

    return (
        <div id="header">
            <Headline as="h1" size="five" className="text-slate-200 mb-3 tracking-tight">Raphaël Bard</Headline>
            <Headline size="one" className="text-slate-200 font-medium mb-3 tracking-tight">Développeur Web</Headline>
            <p className="max-w-xs">
                Spécialiste Front‑end & Design System, j’allie accessibilité, rapidité et modularité pour sublimer chaque projet.
            </p>
        </div>
    )
}

export default Header;