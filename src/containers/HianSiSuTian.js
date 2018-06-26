import { connect } from 'react-redux'
import { thaiSuTian } from '../actions/辭典'
import SuTian from '../components/SuTian'

const mapStateToProps = state => ({
  辭典表: state.辭典.辭典表,
  錯誤訊息: state.辭典.錯誤訊息
})

const HianSiSuTian = connect(mapStateToProps)(SuTian)

export default HianSiSuTian
