import React from 'react'


const SuTianPio = ({辭典表, handleThai}) => (
  <table className="ui celled small compact stackable very basic table">
    <thead>
      <tr>
        <th className="seven wide"/>
        <th className="seven wide"/>
        <th className="two wide"/>
      </tr>
    </thead>
    <tbody>
    {
      辭典表.map((一詞,id) => {

        let 漢字 = 一詞[0]
        let 羅馬字 = 一詞[1] ? 一詞[1] : null

        return (
          <tr key={漢字 + 羅馬字}>
            <td>{漢字}</td>
            <td>{羅馬字}</td>
            <td><button className="ui circular grey icon button"
                onClick={(e)=>{
                e.preventDefault()
                handleThai(id)
            }}><i className="minus icon"/></button></td>
          </tr>
      )})
    }
    </tbody>
  </table>
)

export default SuTianPio
