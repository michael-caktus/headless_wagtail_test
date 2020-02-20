import React from 'react';
import styled from 'styled-components';
import useBlocks from '../../../hooks/useBlocks';

const Blog = ({ content, ...props }) => {
  const [renderBlocks, {}] = useBlocks(content)
  return (
    <BlogStyled>
      {renderBlocks()}
    </BlogStyled>
  );
}

const BlogStyled = styled.div`
  padding: 5rem;
`;

export default Blog;
