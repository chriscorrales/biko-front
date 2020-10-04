/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import StarIcon from 'mdi-react/StarIcon';
import BellOutlineIcon from 'mdi-react/BellOutlineIcon';
import BikoLogo from 'components/shared/icons/BikoLogo';
import { Badge } from 'antd';
import { Container, Logo, User, UserImage, UserInformation } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <BikoLogo />
        <Badge overflowCount={99} count={127}>
          <BellOutlineIcon size="35" />
        </Badge>
      </Logo>
      <User>
        <UserImage>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-gratis%2Fhacker-de-homem-indiano-usando-computadores-para-roubar-dados-na-mesa_231208-3619.jpg%3Fsize%3D626%26ext%3Djpg&f=1&nofb=1" />
        </UserImage>
        <UserInformation>
          <p>ijsiwqdwqdjias wiqduwhuwfhuq</p>
          <span>
            <StarIcon />
            4,8
          </span>
        </UserInformation>
      </User>
    </Container>
  );
};

export default Header;
