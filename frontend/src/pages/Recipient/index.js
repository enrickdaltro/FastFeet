import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import {
  MdAdd,
  MdSearch,
  MdEdit,
  MdDelete,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import Modal from '../../components/Modal';

import { editRecipientRequest } from '../../store/modules/recipient/actions';

import {
  Container,
  Title,
  PageActions,
  PageContent,
  Pagination,
} from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients', {
        params: {
          name,
          page,
        },
      });

      setRecipients(response.data);
    }

    loadRecipients();
  }, [name, page]);

  async function handleDelete(id) {
    try {
      await api.delete(`/recipients/${id}`);
      toast.success('Destinatário deletado!', 1000);
    } catch (error) {
      toast.error('Erro ao deletar o destinatário!');
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
          <strong>Gerenciando destinatários</strong>
        </Title>

        <PageActions>
          <div>
            <MdSearch size={20} />
            <input
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Buscar destinatário"
            />
          </div>
          <button
            type="button"
            onClick={() => history.push('/destinatarios_cadastro')}>
            <MdAdd color="#fff" size={20} />
            <strong>Cadastrar</strong>
          </button>
        </PageActions>

        <PageContent>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(r => (
              <>
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.name}</td>
                  <td>
                    {r.complement
                      ? `Rua ${r.street}, ${r.number}, ${r.city}, ${r.state}, ${r.complement}.`
                      : `Rua ${r.street}, ${r.number}, ${r.city}, ${r.state}.`}
                  </td>
                  <td className="menu">
                    <Modal>
                      <button
                        type="button"
                        onClick={() => dispatch(editRecipientRequest(r.id))}>
                        <MdEdit color="#4D85EE" size={12} />
                        Editar
                      </button>
                      <button type="button" onClick={() => handleDelete(r.id)}>
                        <MdDelete color="#DE3B3B" size={12} />
                        Excluir
                      </button>
                    </Modal>
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
            disabled={recipients.length <= 1}>
            <MdKeyboardArrowRight size={20} color="#7d40e7" />
          </button>
        </Pagination>
      </Container>
    </>
  );
}
