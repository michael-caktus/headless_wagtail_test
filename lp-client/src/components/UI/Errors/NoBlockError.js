import React from 'react';
import styled from 'styled-components';

const NoBlockError = ({ type, ...props }) => {
  return (
    <NoBlockErrorStyled {...props}>
      <p>[Block type "{type}" not implemented or not registered]</p>
    </NoBlockErrorStyled>
  );
}

const NoBlockErrorStyled = styled.div`
  p {

    color: red;
  }
`;

export default NoBlockError;
