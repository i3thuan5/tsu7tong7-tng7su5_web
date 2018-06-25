import React from 'react';
import {Layout, MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKiatKo from './containers/HianSiKiatKo';
import KeSinSu from './containers/KeSinSu'
import HianSiSuTian from './containers/HianSiSuTian'
import 'semantic-ui-css/components/message.min.css';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <Tsha/>
          <HianSiKiatKo/>

          <KeSinSu/>
          <HianSiSuTian/>
        </MainSection>
        <IapKha/>
      </Layout>
    )
  }
}

export default App;
