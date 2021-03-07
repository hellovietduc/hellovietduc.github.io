import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

function About() {
  return (
    <Layout title="About">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.profile}>
              <img
                src="/img/logo400.webp"
                alt="hellovietduc"
                className={styles.circleImage}
              />
              <div>
                The drafts in my mind.
              </div>
            </div>
            <div className={styles.intro}>
              <p>
                Xin chào 👋, mình là <b>Đức Nguyễn</b>. Mình là một back-end developer, tuy nhiên
                mình cũng quan tâm tới nhiều chủ đề khác trong ngành lập trình. Trang web được lập
                ra với mục đích chia sẻ đống <b><i>“drafts in my mind”</i></b>, hi vọng chúng sẽ
                không nhàm chán. 😁
              </p>
              <p>
                Các bạn có thể ghé qua <a href="https://github.com/hellovietduc" target="_blank"
                  rel="noreferrer">GitHub</a> của mình, nơi mà chứa cả drafts và sh*t. 😱💩
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
