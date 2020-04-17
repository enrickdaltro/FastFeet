import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    MdAdd,
    MdSearch,
    MdRemoveRedEye,
    MdEdit,
    MdDelete,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight
} from 'react-icons/md';

import { toast } from 'react-toastify';

import MoreBtn from '../../components/MoreBtn';
import DeliveryStatus from '../../components/DeliveryStatus';
import DeliveryInfo from '../../components/DeliveryInfo';

import { editDeliveryRequest } from '../../store/modules/delivery/actions';

import {
    Container,
    Title,
    PageActions,
    PageContent,
    Pagination
} from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function Deliverys() {
    const [deliveries, setDeliveries] = useState([]);
    const [product, setProduct] = useState('');
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [item, setItem] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('/delivery', {
                params: {
                    product,
                    page
                }
            });

            setDeliveries(response.data);
        }

        loadDeliveries();
    }, [product, page]);

    async function handleView(id) {
        try {
            const response = await api.get(`/delivery/${id}`);
            setItem(response.data);
            setVisible(!visible);
        } catch ({ response }) {
            toast.error('Erro ao visualizar a entrega.');
            console.tron.log(response.data.error);
        }
    }

    async function handleDelete(id) {
        try {
            await api.delete(`/delivery/${id}`);
            toast.success('Encomenda deletada!', 1000);
        } catch (error) {
            toast.error('Erro ao deletar a entrega.');
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
                    <strong>Gerenciando encomendas</strong>
                </Title>

                <PageActions>
                    <div>
                        <i>
                            <MdSearch size={20} />
                        </i>

                        <input
                            type="text"
                            placeholder="Buscar por encomenda"
                            onChange={e => setProduct(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => history.push('/encomendas_cadastro')}
                    >
                        <MdAdd color="#fff" size={20} />
                        <strong>Cadastrar</strong>
                    </button>
                </PageActions>

                <PageContent>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Destinatário</th>
                            <th>Entregador</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map(delivery => (
                            <>
                                <tr key={delivery.id}>
                                    <td>{delivery.id}</td>
                                    <td>{delivery.recipient.name}</td>
                                    <td>
                                        <main>
                                            <img
                                                src={
                                                    delivery.deliveryman.avatar
                                                        ? delivery.deliveryman
                                                              .avatar.url
                                                        : 'https://api.adorable.io/avatars/abott@adorable.png'
                                                }
                                                alt="delivery.deliveryman.name"
                                            />
                                            <span>
                                                {delivery.deliveryman.name}
                                            </span>
                                        </main>
                                    </td>
                                    <td>{delivery.recipient.city}</td>
                                    <td>{delivery.recipient.state}</td>
                                    <td className="status">
                                        <DeliveryStatus data={delivery} />
                                    </td>
                                    <td>
                                        <MoreBtn>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleView(delivery.id)
                                                }
                                            >
                                                <MdRemoveRedEye
                                                    color="#7D40E7"
                                                    size={12}
                                                />
                                                Visualizar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    dispatch(
                                                        editDeliveryRequest(
                                                            delivery.id
                                                        )
                                                    )
                                                }
                                            >
                                                <MdEdit
                                                    color="#4D85EE"
                                                    size={12}
                                                />
                                                Editar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(delivery.id)
                                                }
                                            >
                                                <MdDelete
                                                    color="#DE3B3B"
                                                    size={12}
                                                />
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
                        disabled={page < 2}
                    >
                        <MdKeyboardArrowLeft size={20} color="#7d40e7" />
                    </button>

                    <span>Página {`${page}`}</span>

                    <button
                        type="button"
                        onClick={() => handlePage('next')}
                        disabled={deliveries.length <= 1}
                    >
                        <MdKeyboardArrowRight size={20} color="#7d40e7" />
                    </button>
                </Pagination>
                <DeliveryInfo visible={visible} data={item} />
            </Container>
        </>
    );
}
