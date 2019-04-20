import { connect } from 'react-redux';
import { toggleCssEditor, updateCssInput } from '../../redux/actionCreators';
import CssEditor from './CssEditor';

const mapStateToProps = state => ({
    isLightThemeSelected: state.isLightThemeSelected,
    isFullScreen: state.isFullScreen.cssEditor,
    code: state.cssCode,
});

const mapDispatchToProps = dispatch => ({
    toggleEditor: () => dispatch(toggleCssEditor()),
    updateInput: value => dispatch(updateCssInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CssEditor);
