import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>

            <section className="home-section">
                <CompanionCard
                    id='123'
                    name="Neura the Brainy Explorer"
                    topic="Neural Network of the Brain"
                    subject="science"
                    duration={45}
                    color="#E5D0FF"
                />
                <CompanionCard
                    id='456'
                    name="Countsy the Number Wizard"
                    topic="Derivatives & Integrals"
                    subject="maths"
                    duration={30}
                    color="#ffda6e"
                />
                <CompanionCard
                    id='789'
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="language"
                    duration={30}
                    color="#BDE7FF"
                />
            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently Completed Sessions"
                    companions={recentSessions}
                    classNames="w-2/3 max-lf:w-full"
                />
                <CTA/>
            </section>
        </main>
    )
}

export default Page