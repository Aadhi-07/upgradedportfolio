import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import SpringFallFirstTexture from '~/assets/SpringFallFirstTexture.jpg';
import SpringFallSecondTexture from '../../assets/SpringFallSecondTexture.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import CoolestProjectsTexure from '~/assets/CoolestProjectsTexure.png';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import devxoraTexture from '~/assets/devxoraTexture.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';


export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI engineer',
    description: `focused on building intelligent, scalable systems using machine learning and deep learning. Passionate about turning data into real-world solutions.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

     <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AI web scrapping "
        description="An AI-powered web scraping system that automatically extracts, cleans, and structures data from websites, enabling intelligent analysis and insights."
        buttonText="Visit GitHub"
        buttonLink="https://github.com/Aadhi-07/AI-Web-scrapper.git"
        model={{
          type: 'laptop',
          alt: 'AI web scrapping system architecture',
          textures: [
            {
              srcSet: `${devxoraTexture} 1280w, ${devxoraTexture} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Content Research Agent"
        description="An AI agent that searches the web, analyzes sources, and generates concise, relevant research summaries in real time."
        buttonText="Visit Github"
        buttonLink="https://github.com/Aadhi-07/content-researching-agent.git"
        model={{
          type: 'laptop',
          alt: 'Content Research Agent app preview',
          textures: [
            {
              srcSet: `${CoolestProjectsTexure} 800w, ${CoolestProjectsTexure} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Featured cool projects !"
        description="Take cool at my cool projects in my repo..!!"
        buttonText="Visit Github"
        buttonLink="https://github.com/Aadhi-07"
        model={{
          type: 'phone',
          alt: 'Featured repos',
          textures: [
             {
              srcSet: `${SpringFallSecondTexture} 375w, ${SpringFallSecondTexture} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${SpringFallFirstTexture} 375w, ${SpringFallFirstTexture} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
           
          ],
        }}
      />
      
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
