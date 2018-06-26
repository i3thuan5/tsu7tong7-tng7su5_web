import React from 'react'


const SuTianPio = ({辭典表}) => (
  <table className="ui celled table">
    <tbody>
    {
      辭典表.map(一詞 => {

        let 漢字 = 一詞[0]
        let 羅馬字 = 一詞[1] ? 一詞[1] : null

        return (
          <tr key={漢字 + 羅馬字}>
            <td>{漢字}</td>
            <td>{羅馬字}</td>
          </tr>
      )})
    }
    </tbody>
  </table>
)

export default SuTianPio
