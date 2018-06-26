import React from 'react';
import {Layout, MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKiatKo from './containers/HianSiKiatKo';
import SuTian from './components/SuTian'
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/table.min.css';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <Tsha/>
          <HianSiKiatKo/>

          <SuTian/>
        </MainSection>
        <IapKha/>
      </Layout>
    )
  }
}

export default App;
