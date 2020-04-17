import React, { useState, useEffect } from 'react';
import { format, parseISO, isValid } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdClose, MdInsertPhoto } from 'react-icons/md';

import { Container, Content, Info, Dates, Signature } from './styles';

export default function DeliveryInfo({ data, visible }) {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState({ start_date: data.start_date });
    const [endDate, SetEndDate] = useState({ end_date: data.end_date });

    useEffect(() => {
        async function validDate() {
            if (isValid(parseISO(data.start_date))) {
                setStartDate({
                    ...startDate,
                    start_date: format(
                        parseISO(data.start_date),
                        "d 'de' MMMM",
                        {
                            locale: pt
                        }
                    )
                });
            }

            if (isValid(parseISO(data.end_date))) {
                SetEndDate({
                    ...endDate,
                    end_date: format(parseISO(data.end_date), "d 'de' MMMM", {
                        locale: pt
                    })
                });
            }

            if (data.start_date && data.end_date === 'null') {
                setStartDate('');
                SetEndDate('');
            }
        }

        validDate();
    }, [data, endDate, startDate]);

    function handleClose(e) {
        setShow(!show);
    }
    if (visible === show) {
        return null;
    }

    return (
        <Container {...visible}>
            <Content>
                <Info>
                    <div>
                        <p>Informações da encomenda</p>
                        <button type="button" onClick={e => handleClose(e)}>
                            <MdClose size={20} />
                        </button>
                    </div>
                    <div className="info">
                        <div>
                            <span>Produto: {data.product}</span>
                        </div>

                        <span className="address">
                            {`Rua ${data.recipient.street}, ${data.recipient.number}`}
                            <br />
                            {data.recipient.city} - {data.recipient.state}
                            <br />
                            {data.recipient.zipcode}
                        </span>
                    </div>
                </Info>

                <Dates>
                    <p>Datas</p>
                    <div className="retirada">
                        <h4>Retirada:</h4>
                        <span>
                            {startDate.start_date
                                ? startDate.start_date
                                : 'Nenhuma data de retirada.'}
                        </span>
                    </div>
                    <div>
                        <h4>Entrega:</h4>
                        <span>
                            {endDate.end_date
                                ? endDate.end_date
                                : 'Nenhuma data de entrega.'}
                        </span>
                    </div>
                </Dates>

                <Signature>
                    <p>Assinatura do destinatário</p>
                    <div>
                        <img
                            src={
                                data.signature ? (
                                    data.signature.url
                                ) : (
                                    <MdInsertPhoto size={30} color="#666" />
                                )
                            }
                            alt=""
                        />
                    </div>
                </Signature>
            </Content>
        </Container>
    );
}
