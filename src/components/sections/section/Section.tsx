"use client";

interface SectionProps {
    id: string
    children: React.ReactNode
}

const Section = ({id, children} : SectionProps) => {
    
    return (
        <section id={id} className="scroll-mt-28 pb-20">
            {children}
        </section>
    );
}

export default Section;
