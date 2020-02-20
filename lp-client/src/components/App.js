import React, { useState, useEffect } from 'react';

// Styles
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import defaultTheme from '../styles/defaultTheme';

// Axios
import { getPage } from '../services/requests';

// Constants
import { ALERT_TIMEOUT } from '../constants/applicationConstants';

// Deps
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

// Components
import Alert from './Widgets/Alert';
import PageRouter from './Pages/PageRouter';
import Spinner from './UI/Loaders/Spinner';
import GlobalHeader from './UI/GlobalHeader/GlobalHeader';


const THEME = defaultTheme;

const App = () => {
  const [pageMetaDetails, setPageMetaDetails] = useState();
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const { pathname } = window.location;
    let path = pathname;
    
    if (pathname !== "/") path += "/"
    getPage(path)
      .then(response => {
        const { id, meta, ...pageContent } = response.data;
        console.log('This Page: ', response.data);
        setPageMetaDetails({ id, meta });
        setPageContent({ ...pageContent });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data.error);
        }
      });
  }, [window.location])

  const getComponentFromPageType = () => {
    if (!pageMetaDetails) return <Spinner />
    const { _id, meta } = pageMetaDetails;
    const pageRouter = new PageRouter(meta);
    return pageRouter.getComponent(pageContent);
  }

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
        <AlertProvider template={Alert} alertOptions={alertOptions}>
            <AppStyled>
              <GlobalHeader />
              {getComponentFromPageType()}
            </AppStyled>
        </AlertProvider>
    </ThemeProvider>
  );
};

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.theme.colorPrimary};
`;
const alertOptions = {
  timeout: ALERT_TIMEOUT,
  position: positions.TOP_CENTER,
  transitions: transitions.FADE,
  containerStyle: { top: '7rem' }
};

export default App;
