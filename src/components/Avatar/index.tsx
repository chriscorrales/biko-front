import { Avatar, Tooltip } from 'antd';
import { IFreelancer } from 'interface/People';
import React from 'react';

interface IProps {
  freelancers: IFreelancer[];
}

const AvatarGroup: React.FC<IProps> = ({ freelancers }) => {
  return (
    <Avatar.Group maxCount={4}>
      {freelancers.map((freelancer) => {
        const { image, fullName } = freelancer.people;

        return (
          <Tooltip title={fullName} placement="top" arrowPointAtCenter>
            <Avatar src={image} />
          </Tooltip>
        );
      })}
    </Avatar.Group>
  );
};

export default AvatarGroup;
