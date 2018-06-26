import { connect } from 'react-redux'
import SinSit from '../components/SinSit'

const mapStateToProps = state => ({
  訊息: state.辭典.錯誤訊息
})

export default connect(mapStateToProps)(SinSit)
