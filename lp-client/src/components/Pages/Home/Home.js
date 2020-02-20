import React from 'react';
import styled from 'styled-components';

const Home = ({ content, ...props}) => {
  return (
    <HomeStyled>
      {content.title && <h1>{content.title}</h1>}
      {content.body && (
        <p
          dangerouslySetInnerHTML={{
            __html: content.body
          }}
        >
        </p>
      )}
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  
`;

export default Home;
