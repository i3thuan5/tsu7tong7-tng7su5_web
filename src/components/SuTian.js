import React from 'react'
import { Block } from 'demo-ui'
import { KeSinSu } from '../containers/KeSinSu'
import { SuTianSinSit } from '../containers/SuTianSinSit'
import { HianSiSuTian } from '../containers/HianSiSuTian'


const SuTian = () => (
  <Block>
    <KeSinSu/>
    <SuTianSinSit/>
    <HianSiSuTian/>
  </Block>
)

export default SuTian
