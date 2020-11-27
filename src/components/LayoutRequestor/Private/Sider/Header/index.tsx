/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import StarIcon from 'mdi-react/StarIcon';
import BellOutlineIcon from 'mdi-react/BellOutlineIcon';
import BikoLogo from 'components/shared/icons/BikoLogo';
import { Badge } from 'antd';
import { useObservable } from 'react-use-observable';
import { userService } from 'services/userService';
import JobModal from 'components/JobModal';
import {
  ButtonNewService,
  Container,
  ContainerNewService,
  Logo,
  User,
  UserImage,
  UserInformation,
} from './styles';

const Header: React.FC = () => {
  const [user] = useObservable(() => userService.getUser(), []);
  const [openModal, setOpenModal] = useState(false);

  if (!user) {
    return null;
  }

  const name = `${user.fullName.split(' ')[0]} ${user.fullName.split(' ')[1]}`;

  return (
    <Container>
      <User>
        <UserImage>
          <img src={user.image} />
        </UserImage>
        <UserInformation>
          <p>{name}</p>
          <span>
            <StarIcon />
            4,8
          </span>
        </UserInformation>
      </User>
      <ContainerNewService>
        <ButtonNewService onClick={() => setOpenModal(true)}>
          Novo serviço
        </ButtonNewService>
      </ContainerNewService>
      <JobModal
        onCancel={() => setOpenModal(false)}
        cancel={() => setOpenModal(false)}
        type="create"
        visible={openModal}
      />
    </Container>
  );
};

export default Header;
