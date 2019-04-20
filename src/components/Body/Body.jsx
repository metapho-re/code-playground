import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-simple-animate';
import EditorPlatform from '../Editor/EditorPlatformContainer';
import HtmlEditor from '../Editor/HtmlEditorContainer';
import CssEditor from '../Editor/CssEditorContainer';
import JsEditor from '../Editor/JsEditorContainer';
import Frame from '../Frame/FrameContainer';
import './Body.scss';

const TwoAndTwoLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="twoAndTwo">
            <EditorPlatform />
            <Frame />
        </div>
    </Animate>
);

const ThreeAndOneVerticalLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="threeAndOneVertical">
            <EditorPlatform />
            <Frame />
        </div>
    </Animate>
);

const ThreeAndOneHorizontalLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="threeAndOneHorizontal">
            <EditorPlatform />
            <Frame />
        </div>
    </Animate>
);

const HtmlLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="fullScreen">
            <HtmlEditor />
        </div>
    </Animate>
);

const CssLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="fullScreen">
            <CssEditor />
        </div>
    </Animate>
);

const JsLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="fullScreen">
            <JsEditor />
        </div>
    </Animate>
);

const FrameLayout = () => (
    <Animate
        play
        startStyle={{ opacity: 0 }}
        endStyle={{ opacity: 1 }}
        durationSeconds={0.75}
    >
        <div id="body" className="fullScreen">
            <Frame />
        </div>
    </Animate>
);

function Body({
    isHtmlFullScreen,
    isCssFullScreen,
    isJsFullScreen,
    isFrameFullScreen,
    selectedLayout,
}) {
    if (isHtmlFullScreen) return <HtmlLayout />;
    if (isCssFullScreen) return <CssLayout />;
    if (isJsFullScreen) return <JsLayout />;
    if (isFrameFullScreen) return <FrameLayout />;
    if (selectedLayout === 'twoAndTwo') return <TwoAndTwoLayout />;
    if (selectedLayout === 'threeAndOneVertical') return <ThreeAndOneVerticalLayout />;
    if (selectedLayout === 'threeAndOneHorizontal') return <ThreeAndOneHorizontalLayout />;
    return <TwoAndTwoLayout />;
}
Body.propTypes = {
    isHtmlFullScreen: PropTypes.bool.isRequired,
    isCssFullScreen: PropTypes.bool.isRequired,
    isJsFullScreen: PropTypes.bool.isRequired,
    isFrameFullScreen: PropTypes.bool.isRequired,
    selectedLayout: PropTypes.string.isRequired,
};

export default Body;
