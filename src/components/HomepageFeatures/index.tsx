import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gitops Emphasis',
    Svg: require('@site/static/img/code-branch.svg').default,
    description: (
      <>
        Modmon aims to be the glue holding your git repository and deployments together while maintaining simplicity.
        This also means it is configured and managed flat-file (via YAML files in your master repo)
      </>
    ),
  },
  {
    title: 'Environmental Sync',
    Svg: require('@site/static/img/arrows-rotate.svg').default,
    description: (
      <>
        Maintaining multiple complex environments, including local, can be tricky. Modmon simplifies that
        by keeping all environments identical - from local to staging to production.
      </>
    ),
  },
  {
    title: 'Sever Management / Monitoring',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Modmon will set up, maintain, and monitor your servers and deployments, so you can focus on what matters:
        your code and application.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
