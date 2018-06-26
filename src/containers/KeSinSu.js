import { connect } from 'react-redux'
import { keSuTian, tshingSuTian } from '../actions/辭典'
import SinSuForm from '../components/SinSuForm'


const mapDispatchToProps = dispatch => ({
  onKe: (han, lo) => dispatch(keSuTian(han, lo)),
  onTshing: () => dispatch(tshingSuTian()),
})

const KeSinSu = connect(null, mapDispatchToProps)(SinSuForm)

export default KeSinSu
