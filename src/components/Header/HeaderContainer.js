import { connect } from 'react-redux';
import {
    switchTheme,
    toggleFrame,
    toggleModal,
    selectLayout,
} from '../../redux/actionCreators';
import Header from './Header';

const mapStateToProps = state => ({
    isLightThemeSelected: state.isLightThemeSelected,
    isFullScreen: state.isFullScreen.frame,
});

const mapDispatchToProps = dispatch => ({
    switchTheme: () => dispatch(switchTheme()),
    toggleFrame: () => dispatch(toggleFrame()),
    toggleModal: () => dispatch(toggleModal()),
    selectLayout: layoutId => dispatch(selectLayout(layoutId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
