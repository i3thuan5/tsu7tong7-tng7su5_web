import { connect } from 'react-redux';
import SinSit from '../components/SinSit';

const mapStateToProps = state => ({
  訊息: state.查.錯誤
});

const HianSiTshoNgoo = connect(mapStateToProps)(SinSit);

export default HianSiTshoNgoo;
