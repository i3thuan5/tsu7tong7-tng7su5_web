import React from 'react';
import {Layout, MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKiatKo from './containers/HianSiKiatKo';
import HianSiTshoNgoo from './containers/HianSiTshoNgoo';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <Tsha/>
          <HianSiTshoNgoo/>
          <HianSiKiatKo/>
        </MainSection>
        <IapKha/>
      </Layout>
    );
  }
}

export default App;
