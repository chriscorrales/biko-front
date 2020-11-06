import StarIcon from 'mdi-react/StarIcon';
import React from 'react';
import { useObservable } from 'react-use-observable';
import { userService } from 'services/userService';

import { User, UserInformation, UserImage } from './styles';

const UserInfo: React.FC = () => {
  const [user] = useObservable(() => userService.getUser(), []);

  if (!user) {
    return null;
  }

  const name = `${user.fullName.split(' ')[0]} ${user.fullName.split(' ')[1]}`;

  return (
    <User>
      <UserImage>
        <img alt="Imagem do usuário" src={user.image} />
      </UserImage>
      <UserInformation>
        <p>{name}</p>
        <span>
          <StarIcon />
          4,8
        </span>
      </UserInformation>
    </User>
  );
};

export default UserInfo;
