import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


// Aquí se esta configurando el contenido de la sección de características de la página principal. Cada objeto en el array representa una característica, con un título, una imagen SVG y una descripción. Luego, se define un componente Feature que renderiza cada característica individualmente, y finalmente, el componente HomepageFeatures que renderiza todas las características en una sección de la página principal.
const FeatureList = [
  {
    title: 'Sencillo de usar',
    Svg: require('@site/static/img/logo-ccv1.svg').default,
    description: (
      <>
        Esta página está diseñada para ser sencilla de usar, con una interfaz intuitiva y una navegación clara. 
        Puedes encontrar toda la documentación que necesitas de manera rápida.
      </>
    ),
  },
  {
    title: 'Enfocate en lo que importa',
    Svg: require('@site/static/img/logo-ccv2.svg').default,
    description: (
      <>
        Árbol de conocimiento te permite enfocarte en los documentos, 
        y nosotros nos encargamos de las tareas. Adelante, 
        mueve tus documentos al directorio <code>docs</code>.
      </>
    ),
  },
/*  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }, */
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
