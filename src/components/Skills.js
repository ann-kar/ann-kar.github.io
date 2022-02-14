import React from 'react';

import { SkillSet } from '../components';
import { mainSkills, otherSkills } from "../data/skill-data";

const Skills = () => {
    return (
        <section name="skillSection" id="skillSection">
            <SkillSet title={"my main tech stack includes..."} skillset={mainSkills}/>
            <SkillSet title={"but I've also had some experience with..."} skillset={otherSkills}/>
        </section>
         )
}

export default Skills;
