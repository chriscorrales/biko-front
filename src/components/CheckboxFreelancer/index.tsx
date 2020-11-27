import React from 'react';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import { IFreelancer } from 'interface/People';
import AccountBox from 'mdi-react/AccountBoxIcon';
import { Popover } from 'antd';
import { useFormContext } from 'react-hook-form';
import PopoverProfile from '../PopoverProfile/index';
import {
  Button,
  Container,
  Description,
  InformationContainer,
  Name,
  UserImage,
} from './styles';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  keyCb: string;
  candidate: IFreelancer;
}

const CheckboxFreelancer: React.FC<IProps> = (props) => {
  const { keyCb, candidate } = props;
  const { register } = useFormContext();

  return (
    <Container>
      <input
        ref={register}
        value={candidate.id}
        {...props}
        type="checkbox"
        id={keyCb}
      />
      <label htmlFor={keyCb}>
        <div className="selected">
          <CheckCircleIcon />
          <p>Freelancer selecionado</p>
        </div>
        <div className="unselected">
          <UserImage>
            <img alt="Imagem do usuário" src={candidate.people.image} />
          </UserImage>
          <InformationContainer>
            <Name>{candidate.people.fullName}</Name>
            <Description ellipsis={{ rows: 2 }}>
              {candidate.expText}
            </Description>
          </InformationContainer>
        </div>
      </label>
      <Popover
        trigger="click"
        content={<PopoverProfile freelancer={candidate} />}
        title={candidate.people.fullName.split(' ')[0]}
      >
        <Button>
          <AccountBox />
        </Button>
      </Popover>
    </Container>
  );
};
export default CheckboxFreelancer;
