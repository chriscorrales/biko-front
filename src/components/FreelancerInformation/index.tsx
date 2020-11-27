import { Space } from 'antd';
import Modal, { ModalProps } from 'antd/lib/modal';
import Linkedin from 'mdi-react/LinkedinIcon';
import Github from 'mdi-react/GithubIcon';
import Whatsapp from 'mdi-react/WhatsappIcon';
import Facebook from 'mdi-react/FacebookIcon';
import If from 'components/shared/If';
import { IFreelancer } from 'interface/People';
import React from 'react';

import {
  Container,
  Description,
  InformationContainer,
  Name,
  SocialMedia,
  UserImage,
} from './styles';

interface IProps extends ModalProps {
  selecteds: IFreelancer[];
}

const FreelancerInformation: React.FC<IProps> = ({
  visible,
  onCancel,
  selecteds,
}) => {
  if (selecteds.length === 0) {
    return null;
  }

  return (
    <Modal
      title="Informações de contato"
      visible={visible}
      onCancel={onCancel}
      destroyOnClose
      footer={null}
    >
      <Space direction="vertical">
        {selecteds.map((selected) => {
          const message = `https://api.whatsapp.com/send?phone=${selected.people.phone}`;

          return (
            <Container>
              <UserImage>
                <img alt="Imagem do usuário" src={selected.people.image} />
              </UserImage>
              <InformationContainer>
                <Name>{selected.people.fullName}</Name>
                <Description>{selected.expText}</Description>
                <SocialMedia>
                  <If condition={!!selected.people.linkedin}>
                    <Linkedin
                      onClick={() => window.open(selected.people.linkedin)}
                    />
                  </If>
                  <If condition={!!selected.people.github}>
                    <Github
                      onClick={() => window.open(selected.people.github)}
                    />
                  </If>
                  <If condition={!!selected.people.phone}>
                    <Whatsapp onClick={() => window.open(message)} />
                  </If>
                  <If condition={!!selected.people.facebook}>
                    <Facebook
                      onClick={() => window.open(selected.people.facebook)}
                    />
                  </If>
                </SocialMedia>
              </InformationContainer>
            </Container>
          );
        })}
      </Space>
    </Modal>
  );
};

export default FreelancerInformation;
