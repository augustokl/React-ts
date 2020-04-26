import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="http://">
          <img
            src="https://avatars3.githubusercontent.com/u/46767670?s=460&u=7a599d14e0a17fcd6b565f523a4be3b252dfbdd1&v=4"
            alt="Augusto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms!
              https://unform.dev
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://">
          <img
            src="https://avatars3.githubusercontent.com/u/46767670?s=460&u=7a599d14e0a17fcd6b565f523a4be3b252dfbdd1&v=4"
            alt="Augusto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms!
              https://unform.dev
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://">
          <img
            src="https://avatars3.githubusercontent.com/u/46767670?s=460&u=7a599d14e0a17fcd6b565f523a4be3b252dfbdd1&v=4"
            alt="Augusto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms!
              https://unform.dev
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
