import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrated chat',
    Svg: require('@site/static/img/undraw_chat-interface_vofq.svg').default,
    description: (
      <>
        With Caesar, you can easily and securely chat with your team. <i>ECHO</i> is end-to-end-encrypted and fast.
      </>
    ),
  },
  {
    title: 'Your smart assistant',
    Svg: require('@site/static/img/undraw_artificial-intelligence_43qa.svg').default,
    description: (
      <>
        Caesar comes with artificial intelligence. It helps you managing your servers and balancing your resources.
      </>
    ),
  },
  {
    title: 'Work together',
    Svg: require('@site/static/img/undraw_group-project_kow1.svg').default,
    description: (
      <>
        With an unlimited amount of user accounts, Caesar is the best solution for small or large teams.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
