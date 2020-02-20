import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Spinner = props => {
  return (
    <LoaderStyled
      type="CradleLoader"
      color={'#000'}
      height={75}
      width={75}
      {...props}
    />
  );
}

const LoaderStyled = styled(Loader)`

`;

export default Spinner;
