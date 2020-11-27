import React from 'react';

import { Button, Modal, Space } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { IJob } from 'interface/Job';
import { Container, Description, Subtitle, Title, UserImage } from './styles';

interface IProps extends ModalProps {
  job: IJob;
}

const JobInformation: React.FC<IProps> = ({
  visible = false,
  onCancel,
  job,
}) => {
  const { vacancies } = job;

  return (
    <Modal
      title="Informações sobre o serviço"
      visible={visible}
      onCancel={onCancel}
      destroyOnClose
      footer={[<Button onClick={onCancel}>Fechar</Button>]}
    >
      <Space direction="vertical">
        <Title>{job.title}</Title>
        <Description>{job.description}</Description>
        {!!job.address && (
          <div>
            <Subtitle style={{ marginLeft: 0 }}>Endereço</Subtitle>
            <Description>{`${job.address?.street}, ${job.address?.residenceNumber}, ${job.address?.postalCode}, ${job.address?.city}-${job.address?.district}`}</Description>
          </div>
        )}
        <Container>
          <UserImage>
            <img alt="Imagem do usuário" src={job.requestor?.people.image} />
          </UserImage>
          <Subtitle>{job.requestor?.people.fullName}</Subtitle>
        </Container>
      </Space>
    </Modal>
  );
};

export default React.memo(JobInformation);
