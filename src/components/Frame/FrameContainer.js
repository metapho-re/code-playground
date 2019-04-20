import { connect } from 'react-redux';
import Frame from './Frame';

const generateMetaTags = () => (
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>'
);


const generateExternalCss = (externalCss = []) => (
    externalCss.map(e => `<link rel="stylesheet" href="${e[1]}">`).toString().replace(/,/g, '')
);

const generateExternalJs = (externalJs = []) => (
    externalJs.map(e => `<script src="${e[1]}"></script>`).toString().replace(/,/g, '')
);

const generatePage = (externalJs, externalCss, cssCode, htmlCode, jsCode) => (
    `<!DOCTYPE html>
    <html>
        <head>
            ${generateMetaTags()}
            ${generateExternalJs(externalJs)}
            ${generateExternalCss(externalCss)}
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
    </html>`
);

const mapStateToProps = state => ({
    page: generatePage(
        state.externalJsArray,
        state.externalCssArray,
        state.cssCode,
        state.htmlCode,
        state.jsCode,
    ),
});

export default connect(mapStateToProps)(Frame);
