import React from 'react';
import {MainSection} from 'demo-ui';
import IapKha from './components/IapKha';
import Tsha from './containers/Tsha';

class App extends React.Component {
  render() {
    return (
      <MainSection>
        <Tsha/>
        <IapKha/>
      </MainSection>
    );
  }
}

export default App;
