import React from 'react';
import {Layout, MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKiatKo from './containers/HianSiKiatKo';
import SuTian from './components/SuTian'
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/table.min.css';
import 'semantic-ui-css/components/divider.min.css';
import 'semantic-ui-css/components/icon.min.css';
import './App.css'


class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <Tsha/>
          <HianSiKiatKo/>

          <div className="ui divider"/>

          <SuTian/>
        </MainSection>
        <IapKha/>
      </Layout>
    )
  }
}

export default App;
