import { connect } from 'react-redux';
import KiatKo from '../components/KiatKo';


const mapStateToProps = state => ({
  查詢結果: state.查.查詢結果,
  錯誤訊息: state.查.錯誤
})

const HianSiKiatKo = connect(mapStateToProps)(KiatKo);

export default HianSiKiatKo;
