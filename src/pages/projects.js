import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';

function Card({ imgPath, text, projectLink }) {
  const goToProject = () => {
    window.open(projectLink);
  };
  return (
    <div className="project-card" onClick={projectLink ? goToProject : () => { }}>
      <img src={imgPath} />
      <div className="noselect">{text}</div>
    </div>
  );
}

Card.propTypes = {
  imgPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  projectLink: PropTypes.string
};

function Projects() {
  return (
    <Layout title="Projects">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Card
              imgPath="img/theplayground.png"
              text="The Playground"
              projectLink="https://vietduc01100001.tech/theplayground"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
