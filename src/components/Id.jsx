import React from 'react';
import styled from 'styled-components';

const BodyText = styled.div`
  font-size: 14px;
  color: #555;
`;

const Body = ({ data }) => {
  return <BodyText>{data.id}</BodyText>;
};

export default Body;
