import React from 'react';
import styled from 'styled-components';

const BodyText = styled.div`
  font-size: 18px;
`;

const Body = ({ data }) => {
  return <BodyText>{data.body}</BodyText>;
};

export default Body;
