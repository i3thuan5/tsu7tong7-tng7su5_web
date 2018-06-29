import { connect } from 'react-redux'
import KhohLiuA from '../components/KhohLiuA'


export const 串語句 = 查詢結果 => {
  let temp = 查詢結果.reduce((acc, item) => ({
      漢字: acc.漢字 + ' ' + item.漢字,
      台羅: acc.台羅 + ' ' + item.臺羅斷詞,
      POJ: acc.POJ + ' ' + item.白話字
  }), {
    漢字: '',
    台羅: '',
    POJ: ''
  })

  return {
    漢字: temp.漢字.trim(),
    台羅: temp.台羅.trim(),
    POJ: temp.POJ.trim()
  }
}

const mapStateToProps = state => 串語句(state.查.查詢結果)

export default connect(mapStateToProps)(KhohLiuA)
