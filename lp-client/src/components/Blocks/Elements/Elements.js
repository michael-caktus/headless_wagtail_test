import React from 'react';
import styled from 'styled-components';

// Deps
import { format } from 'date-fns';

export const Title = ({ value, ...props }) => {
  return (
    <TitleStyled>
      <h2>{value}</h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
`;
  

export const Heading = ({ value, ...props }) => {
  return (
    <HeadingStyled>
      <h3>{value}</h3>
    </HeadingStyled>
  );
}

const HeadingStyled = styled.div`
  
`;

export const PublishedDate = ({ value, ...props }) => {
  return (
    <PublishedDateStyled>
      <p>{format(new Date(value), 'MMMM do, yyyy')}</p>
    </PublishedDateStyled>
  );
}

const PublishedDateStyled = styled.div`
  p {
    font-style: italic;
  }
`;

export const Paragrah = ({ value, ...props }) => {
  return (
    <ParagrahStyled>
      <p
        dangerouslySetInnerHTML={{
          __html: value
        }}
      >
      </p>
    </ParagrahStyled>
  );
}

const ParagrahStyled = styled.div`
  
`;