import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import styles from '../css/projects.module.css';

const projectList = [{
  name: 'The Playground',
  img: 'img/theplayground.png',
  link: 'https://vietduc01100001.tech/theplayground'
}];

function Card({ name, img, link }) {
  const goToProject = () => {
    window.open(link);
  };
  return (
    <div className={styles.projectCard} onClick={link ? goToProject : () => { }}>
      <img src={img} />
      <div className={styles.noselect}>{name}</div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string
};

function Projects() {
  return (
    <Layout title="Projects">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {projectList.map((project, i) => (
              <Card
                key={i}
                name={project.name}
                img={project.img}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
