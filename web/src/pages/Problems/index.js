import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import {
  MdRemoveRedEye,
  MdDelete,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import ScreenModel from '../../components/ScreenModal';

import MoreBtn from '../../components/MoreBtn';

import api from '../../services/api';

import { Container, Title, PageContent, Pagination } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('/problems', {
        params: {
          page,
        },
      });

      setProblems(response.data);
    }

    loadProblems();
  }, [page]);

  function showModal(text) {
    setDescription(text);
    setVisible(!visible);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/problems/${id}`);
      toast.success('Encomenda cancelada com sucesso.');
    } catch ({ response }) {
      console.tron.log(response.data.error);
    }
  }

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <>
      <Container>
        <Title>
          <strong>Problemas na entrega</strong>
        </Title>

        <PageContent>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th className="right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <>
                <tr key={problem.id}>
                  <td className="left">{problem.id}</td>
                  <td>{problem.description}</td>
                  <td className="right">
                    <MoreBtn className="menu">
                      <button
                        type="button"
                        onClick={() => showModal(problem.description)}>
                        <MdRemoveRedEye color="#4D85EE" size={12} />
                        Visualizar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(problem.id)}>
                        <MdDelete color="#DE3B3B" size={12} />
                        Cancelar
                      </button>
                    </MoreBtn>
                  </td>
                </tr>
                <br />
              </>
            ))}
          </tbody>
        </PageContent>
        <Pagination>
          <button
            type="button"
            onClick={() => handlePage('back')}
            disabled={page < 2}>
            <MdKeyboardArrowLeft size={20} color="#7d40e7" />
          </button>

          <span>Página {`${page}`}</span>

          <button
            type="button"
            onClick={() => handlePage('next')}
            disabled={problems.length <= 1}>
            <MdKeyboardArrowRight size={20} color="#7d40e7" />
          </button>
        </Pagination>
        <ScreenModel title="VISUALIZAR PROBLEMA" visible={visible}>
          {description}
        </ScreenModel>
      </Container>
    </>
  );
}
