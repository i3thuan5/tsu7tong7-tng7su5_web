import React from 'react';
import {MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';
import HianSiKaitKo from './containers/HianSiKaitKo';


class App extends React.Component {
  render() {
    return (
      <MainSection>
        <Tsha/>
        <HianSiKaitKo/>
        <IapKha/>
      </MainSection>
    );
  }
}

export default App;
