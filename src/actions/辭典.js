

export const ACTION_SUTIAN = 'SUTAIN'

export const keSu = (漢字, 羅馬字) => ({
    type: ACTION_SUTIAN,
    狀態: 'KE',
    漢字,
    羅馬字
  })

export const thaiSu = (id) => ({
  type: ACTION_SUTIAN,
  狀態: 'THAI',
  id
})

export const tshingSuTian = () => ({
  type: ACTION_SUTIAN,
  狀態: 'TSHING'
})
