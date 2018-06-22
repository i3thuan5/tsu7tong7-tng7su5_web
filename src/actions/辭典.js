export const KE_SUTIAN = 'ke'
export const THAI_SUTIAN = 'thai'
export const TSHING_SUTIAN = 'tshing'

export const keSuTian = (漢字, 羅馬字) => ({
    type: KE_SUTIAN,
    漢字,
    羅馬字
  })

export const thaiSuTian = (id) => ({
  type: THAI_SUTIAN,
  id
})

export const tshingSuTian = () => ({
  type: TSHING_SUTIAN
})
