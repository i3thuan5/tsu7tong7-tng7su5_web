import React from 'react'
import { ButtonStack, CopyButton } from 'demo-ui'


const KhohLiuA = ({漢字, 台羅, POJ}) => (
  <ButtonStack>
   { 漢字 ? <CopyButton 複製內容={漢字} 按鈕名="漢字"/> : null }
   { 台羅 ? <CopyButton 複製內容={台羅} 按鈕名="台羅"/> : null }
   { POJ ? <CopyButton 複製內容={POJ} 按鈕名="POJ"/> : null }
  </ButtonStack>
)

export default KhohLiuA
