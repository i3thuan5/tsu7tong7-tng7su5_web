import { connect } from 'react-redux'
import { thaiSuTian } from '../actions/辭典'
import SuTianPio from '../components/SuTianPio'

const mapStateToProps = state => ({
  辭典表: state.辭典.辭典表
})

const mapDispatchToProps = dispatch => ({
  handleRemove: id => {dispatch(thaiSuTian(id))}
})

const HianSiPio = connect(mapStateToProps, mapDispatchToProps)(SuTianPio)

export default HianSiPio
