/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import StarIcon from 'mdi-react/StarIcon';
import BellOutlineIcon from 'mdi-react/BellOutlineIcon';
import BikoLogo from 'components/shared/icons/BikoLogo';
import { Badge } from 'antd';
import { useObservable } from 'react-use-observable';
import { userService } from 'services/userService';
import { Container, Logo, User, UserImage, UserInformation } from './styles';

const Header: React.FC = () => {
  const [user] = useObservable(() => userService.getUser(), []);

  if (!user) {
    return null;
  }

  const name = `${user.fullName.split(' ')[0]} ${user.fullName.split(' ')[1]}`;

  return (
    <Container>
      <Logo>
        <BikoLogo />
        <Badge overflowCount={9} count={7}>
          <BellOutlineIcon size="28" />
        </Badge>
      </Logo>
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
    </Container>
  );
};

export default Header;
