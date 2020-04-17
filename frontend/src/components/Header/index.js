import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

import logoHeader from '../../assests/Logo2.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoHeader} alt="FastFeet" />
          <ul>
            <li>
              <Link to="/encomendas">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/entregadores">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/destinatarios">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/problemas">PROBLEMAS</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <p>admin@fastfeet.com</p>
            </div>
            <button type="button" onClick={handleLogOut}>
              <MdExitToApp color="#fff" size={20} />
              <strong>Sair</strong>
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
