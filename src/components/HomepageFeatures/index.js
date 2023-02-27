import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import myImageUrl from '@site/static/img/hello_bear_homepage.svg';

const FeatureList = [
  {
    title: 'Connect',
    imgSrc: myImageUrl,
    Svg: require('@site/static/img/dark_icon.svg').default,
    description: (
      <>
        We strive to foster a nation-wide community of computing students in Canada for 
        sharing resources, hosting events, and all around supporting one another
      </>
    ),
  },
  {
    title: 'Inspire',
    imgSrc: require('@site/static/img/globe_bear_homepage.svg'),
    Svg: require('@site/static/img/globe_bear_homepage.svg').default,
    description: (
      <>
        We hope to spark other passionate individuals to create societies of their own to 
        support their local communities and inspire innovation
      </>
    ),
  },
  {
    title: 'Support',
    imgSrc: require('@site/static/img/love_bear_homepage.svg').default,
    Svg: require('@site/static/img/love_bear_homepage.svg').default,
    description: (
      <>
        This repository of club resources serves to help computing clubs who are just starting out, 
        are looking for ideas, or want to collaborate with others across the country
      </>
    ),
  },
];

function Feature({Svg, imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc}/>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
