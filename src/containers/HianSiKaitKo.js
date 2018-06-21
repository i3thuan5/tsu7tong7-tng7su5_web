import { connect } from 'react-redux';
import KiatKo from '../components/KiatKo';

const mapStateToProps = state => ({
  查詢結果: state.查.查詢結果
})

const HianSiKaitKo = connect(mapStateToProps)(KiatKo);

export default HianSiKaitKo;
