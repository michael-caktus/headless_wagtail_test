import React from 'react';
import styled from 'styled-components';
import BlockRouter from '../BlockRouter';

const BodyStreamFieldBlock = ({ value }) => {
  return (
    <BodyStreamFieldBlockStyled>
      {value.map(block => {
        const { type, value } = block;
        const blockRouter = new BlockRouter(type)
        const Block = blockRouter.getComponent(value)
        return Block
      })}
    </BodyStreamFieldBlockStyled>
  );
}

const BodyStreamFieldBlockStyled = styled.div`
  border: 3px solid darksalmon;
  border-radius: 2px;
  padding: 3rem;
`;

export default BodyStreamFieldBlock;
