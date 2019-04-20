import { createStore, combineReducers } from 'redux';
import {
    isLightThemeSelected,
    selectedLayout,
    isFullScreen,
    isModalOpen,
    activeTabId,
    htmlCode,
    cssCode,
    jsCode,
    cssStylesheetInput,
    externalCssArray,
    externalCssArrayIndex,
    jsSLibraryInput,
    externalJsArray,
    externalJsArrayIndex,
} from './reducers';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            isLightThemeSelected,
            selectedLayout,
            isFullScreen,
            isModalOpen,
            activeTabId,
            htmlCode,
            cssCode,
            jsCode,
            cssStylesheetInput,
            externalCssArray,
            externalCssArrayIndex,
            jsSLibraryInput,
            externalJsArray,
            externalJsArrayIndex,
        }),
    );
    return store;
};

export default configureStore;
