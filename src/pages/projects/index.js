import React from 'react';
import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';
import clsx from 'clsx';
import styles from './projects.module.css';
import { projects } from '../../data';

function Projects() {
  return (
    <Layout title="Projects">
      <main className="container margin-vert--lg">
        <div className="row">
          {projects.map(project => (
            <div key={project.name} className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.project)}>
                <div className="card__image">
                  <Image img={project.preview} alt={project.name} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{project.name}</h4>
                      <small className="avatar__subtitle">
                        {project.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(project.website || project.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {project.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={project.website}
                          target="_blank"
                          rel="noreferrer noopener">
                          Website
                        </a>
                      )}
                      {project.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={project.source}
                          target="_blank"
                          rel="noreferrer noopener">
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Projects;
