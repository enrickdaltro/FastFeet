import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  MdAdd,
  MdSearch,
  MdEdit,
  MdDelete,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import { toast } from 'react-toastify';

import {
  Container,
  Title,
  PageActions,
  PageContent,
  Pagination,
} from './styles';

import MoreBtn from '../../components/MoreBtn';

import { editDeliverymanRequest } from '../../store/modules/deliveryman/actions';

import api from '../../services/api';
import history from '../../services/history';

export default function Deliverys() {
  const [deliveryman, setDeliveryman] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get('/deliveryman', {
        params: {
          name,
          page,
        },
      });

      setDeliveryman(response.data);
    }

    loadDeliveryman();
  }, [name, page]);

  async function handleDelete(id) {
    try {
      await api.delete(`/deliveryman/${id}`);
      toast.success('Entregador deletado!', 1000);
    } catch (error) {
      toast.error('Erro ao deletar o usuário!');
      console.tron.log(error);
    } finally {
      setTimeout(function() {
        history.go(0);
      }, 3500);
    }
  }

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <>
      <Container>
        <Title>
          <strong>Gerenciando entregadores</strong>
        </Title>

        <PageActions>
          <div>
            <MdSearch size={20} />
            <input
              type="text"
              placeholder="Buscar entregador"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => history.push('/entregadores_cadastro')}>
            <MdAdd color="#fff" size={20} />
            <strong>Cadastrar</strong>
          </button>
        </PageActions>

        <PageContent>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveryman.map(d => (
              <>
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>
                    <img
                      src={
                        d.avatar
                          ? d.avatar.url
                          : 'https://api.adorable.io/avatars/abott@adorable.png'
                      }
                      alt={d.avatar}
                    />
                  </td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                    <MoreBtn className="menu">
                      <button
                        type="button"
                        onClick={() => dispatch(editDeliverymanRequest(d.id))}>
                        <MdEdit color="#4D85EE" size={12} />
                        Editar
                      </button>
                      <button type="button" onClick={() => handleDelete(d.id)}>
                        <MdDelete color="#DE3B3B" size={12} />
                        Excluir
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
            disabled={deliveryman.length <= 1}>
            <MdKeyboardArrowRight size={20} color="#7d40e7" />
          </button>
        </Pagination>
      </Container>
    </>
  );
}
