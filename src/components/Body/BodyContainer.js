import { connect } from 'react-redux';
import Body from './Body';

const mapStateToProps = state => ({
    selectedLayout: state.selectedLayout,
    isHtmlFullScreen: state.isFullScreen.htmlEditor,
    isCssFullScreen: state.isFullScreen.cssEditor,
    isJsFullScreen: state.isFullScreen.jsEditor,
    isFrameFullScreen: state.isFullScreen.frame,
});

export default connect(mapStateToProps)(Body);
