import * as actionTypes from './actionTypes';
import INITIALSTATE from './initialState';

function findIndex(array, index) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i][0] === index) return i;
    }
    return 0;
}

export const isLightThemeSelected = (state = INITIALSTATE.isLightThemeSelected, action) => {
    switch (action.type) {
    case actionTypes.SWITCH_THEME:
        return !state;
    default:
        return state;
    }
};

export const selectedLayout = (state = INITIALSTATE.selectedLayout, action) => {
    switch (action.type) {
    case actionTypes.SELECT_LAYOUT:
        return action.payload;
    default:
        return state;
    }
};

export const isFullScreen = (state = {
    htmlEditor: false,
    cssEditor: false,
    jsEditor: false,
    frame: false,
}, action) => {
    switch (action.type) {
    case actionTypes.TOGGLE_HTML_EDITOR:
        return { ...state, htmlEditor: !state.htmlEditor };
    case actionTypes.TOGGLE_CSS_EDITOR:
        return { ...state, cssEditor: !state.cssEditor };
    case actionTypes.TOGGLE_JS_EDITOR:
        return { ...state, jsEditor: !state.jsEditor };
    case actionTypes.TOGGLE_FRAME:
        return {
            ...state,
            frame: !state.frame && !state.htmlEditor && !state.cssEditor && !state.jsEditor,
        };
    default:
        return state;
    }
};

export const isModalOpen = (state = false, action) => {
    switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
        return !state;
    default:
        return state;
    }
};

export const activeTabId = (state = '0', action) => {
    switch (action.type) {
    case actionTypes.TOGGLE_TABS:
        return action.payload;
    default:
        return state;
    }
};

export const htmlCode = (state = INITIALSTATE.htmlCode, action) => {
    switch (action.type) {
    case actionTypes.UPDATE_HTML_INPUT:
        return action.payload;
    default:
        return state;
    }
};

export const cssCode = (state = INITIALSTATE.cssCode, action) => {
    switch (action.type) {
    case actionTypes.UPDATE_CSS_INPUT:
        return action.payload;
    default:
        return state;
    }
};

export const jsCode = (state = INITIALSTATE.jsCode, action) => {
    switch (action.type) {
    case actionTypes.UPDATE_JS_INPUT:
        return action.payload;
    default:
        return state;
    }
};

export const cssStylesheetInput = (state = '', action) => {
    switch (action.type) {
    case actionTypes.UPDATE_CSS_STYLESHEET_INPUT:
        return action.payload;
    case actionTypes.ADD_CSS_STYLESHEET:
        return '';
    default:
        return state;
    }
};

export const externalCssArrayIndex = (state = INITIALSTATE.externalCssArrayIndex, action) => {
    switch (action.type) {
    case actionTypes.ADD_CSS_STYLESHEET:
        return state + 1;
    default:
        return state;
    }
};

export const externalCssArray = (state = INITIALSTATE.externalCssArray, action) => {
    switch (action.type) {
    case actionTypes.ADD_CSS_STYLESHEET:
        if (action.payload.file.length !== 0) {
            return [...state, [action.payload.fileIndex, action.payload.file]];
        }
        return state;
    case actionTypes.REMOVE_CSS_STYLESHEET:
        return [
            ...state.slice(0, findIndex(state, action.payload)),
            ...state.slice(findIndex(state, action.payload) + 1),
        ];
    default:
        return state;
    }
};

export const jsSLibraryInput = (state = '', action) => {
    switch (action.type) {
    case actionTypes.UPDATE_JS_LIBRARY_INPUT:
        return action.payload;
    case actionTypes.ADD_JS_LIBRARY:
        return '';
    default:
        return state;
    }
};

export const externalJsArrayIndex = (state = INITIALSTATE.externalJsArrayIndex, action) => {
    switch (action.type) {
    case actionTypes.ADD_JS_LIBRARY:
        return state + 1;
    default:
        return state;
    }
};

export const externalJsArray = (state = INITIALSTATE.externalJsArray, action) => {
    switch (action.type) {
    case actionTypes.ADD_JS_LIBRARY:
        if (action.payload.file.length !== 0) {
            return [...state, [action.payload.fileIndex, action.payload.file]];
        }
        return state;
    case actionTypes.REMOVE_JS_LIBRARY:
        return [
            ...state.slice(0, findIndex(state, action.payload)),
            ...state.slice(findIndex(state, action.payload) + 1),
        ];
    default:
        return state;
    }
};
