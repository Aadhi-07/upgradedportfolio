import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import notfoundImg from '~/assets/notfound.jpg'
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    {/* <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
      </div> */}
    <Heading className={styles.title} data-visible={visible} level={2} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Aadhithiya, an AI Engineer passionate about building intelligent, data-driven systems. I create smart applications that combine machine learning, clean code, and practical problem-solving.
    </Text>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Education" start={visible} delay={500} />
    </Heading>
    <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
      <DecoderText text="Bachelor of Computer Science" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Annamalai University -- 2023-2027<br></br>
    CGPA: 8.5/10<br></br>
    Focused on Artificial Intelligence, Machine Learning, CyberSecurity, and Software Development
    </Text>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="My Certifications" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      1. <a href="https://www.credly.com/badges/afda80eb-487d-471e-b761-16b9977f4931/linked_in_profile" target="_blank">AI Fundamentals - IBM.</a><br></br>
      2. <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL25CS116S55440028110319179" target="_blank">CyberSecurity - NPTEL(IIT Madras)</a><br></br>
      3. <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL25CS11S94330865904227439" target="_blank">Cloud Computing - NPTEL(IIT Kharagpur)</a><br></br>
      4. <a href="https://www.udemy.com/certificate/UC-e26bbf7a-cafb-435c-8d32-5d987fbc3119/" target="_blank">Python - Udemy</a><br></br>
    </Text>
              
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact Me ! 
              </Button>
            </div>
            <div className={styles.column}>
              {/* <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div> */}
              <br></br>
              <br></br>
              <br></br>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={notfoundImg}
                  srcSet={`${notfoundImg} 480w, ${notfoundImg} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
