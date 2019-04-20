import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({ isLightThemeSelected: state.isLightThemeSelected });

export default connect(mapStateToProps)(Main);
