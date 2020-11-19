import { IFreelancer } from 'interface/People';
import React from 'react';
import Linkedin from 'mdi-react/LinkedinIcon';
import Github from 'mdi-react/GithubIcon';
import Whatsapp from 'mdi-react/WhatsappIcon';
import Facebook from 'mdi-react/FacebookIcon';
import If from 'components/shared/If';
import { Container, SocialMedia } from './styles';

interface IProps {
  freelancer: IFreelancer;
}

const PopoverProfile: React.FC<IProps> = ({ freelancer }) => {
  const message = `https://api.whatsapp.com/send?phone=${freelancer.people.phone}`;

  return (
    <Container>
      <p>{freelancer.expText}</p>
      <SocialMedia>
        <If condition={!!freelancer.people.linkedin}>
          <Linkedin onClick={() => window.open(freelancer.people.linkedin)} />
        </If>
        <If condition={!!freelancer.people.github}>
          <Github onClick={() => window.open(freelancer.people.github)} />
        </If>
        <If condition={!!freelancer.people.phone}>
          <Whatsapp onClick={() => window.open(message)} />
        </If>
        <If condition={!!freelancer.people.facebook}>
          <Facebook onClick={() => window.open(freelancer.people.facebook)} />
        </If>
      </SocialMedia>
    </Container>
  );
};

export default React.memo(PopoverProfile);
