import React from 'react';
import {Layout, MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKaitKo from './containers/HianSiKaitKo';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <Tsha/>
          <HianSiKaitKo/>
        </MainSection>
        <IapKha/>
      </Layout>
    );
  }
}

export default App;
