import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'CSS'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Flutter'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Kotlin'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Web Design'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'36%'} width={'36%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web FullStack développment'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Mobile FullStack Developpement'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'IT Project Management'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
