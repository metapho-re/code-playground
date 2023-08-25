import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const lotusInk1 = "#545464";
const lotusInk2 = "#43436C";
const lotusWhite0 = "#D5CEA3";
const lotusWhite1 = "#DCD5AC";
const lotusWhite2 = "#E5DDB0";
const lotusWhite3 = "#F2ECBC";
const lotusWhite4 = "#E7DBA0";
const lotusWhite5 = "#E4D794";
const lotusGray1 = "#DCD7BA";
const lotusGray2 = "#716E61";
const lotusGray3 = "#8A8980";
const lotusViolet1 = "#A09CAC";
const lotusViolet2 = "#766B90";
const lotusViolet3 = "#C9CBD1";
const lotusViolet4 = "#624C83";
const lotusBlue1 = "#C7D7E0";
const lotusBlue2 = "#B5CBD2";
const lotusBlue3 = "#9FB5C9";
const lotusBlue4 = "#4D699B";
const lotusBlue5 = "#5D57A3";
const lotusGreen1 = "#6F894E";
const lotusGreen2 = "#6E915F";
const lotusGreen3 = "#B7D0AE";
const lotusOrange1 = "#CC6D00";
const lotusOrange2 = "#E98A00";
const lotusYellow1 = "#77713F";
const lotusYellow2 = "#836F4A";
const lotusYellow3 = "#DE9800";
const lotusYellow4 = "#F9D791";
const lotusRed1 = "#C84053";
const lotusRed2 = "#D7474B";
const lotusRed3 = "#E82424";
const lotusRed4 = "#D9A594";
const lotusAqua1 = "#597B75";
const lotusAqua2 = "#5E857A";
const lotusTeal1 = "#4E8CA2";
const lotusTeal2 = "#6693BF";
const lotusTeal3 = "#5A7785";
const lotusPink = "#B35B79";
const lotusCyan = "#D7E3D8";

export const colors = {
  lotusInk1,
  lotusInk2,
  lotusWhite0,
  lotusWhite1,
  lotusWhite2,
  lotusWhite3,
  lotusWhite4,
  lotusWhite5,
  lotusGray1,
  lotusGray2,
  lotusGray3,
  lotusViolet1,
  lotusViolet2,
  lotusViolet3,
  lotusViolet4,
  lotusBlue1,
  lotusBlue2,
  lotusBlue3,
  lotusBlue4,
  lotusBlue5,
  lotusGreen1,
  lotusGreen2,
  lotusGreen3,
  lotusOrange1,
  lotusOrange2,
  lotusYellow1,
  lotusYellow2,
  lotusYellow3,
  lotusYellow4,
  lotusRed1,
  lotusRed2,
  lotusRed3,
  lotusRed4,
  lotusAqua1,
  lotusAqua2,
  lotusTeal1,
  lotusTeal2,
  lotusTeal3,
  lotusPink,
  lotusCyan,
};

export const kanagawaLightTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: lotusWhite2,
      color: lotusInk1,
    },
    ".cm-content": {
      caretColor: lotusInk1,
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: lotusInk1,
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      {
        backgroundColor: lotusGray1,
      },
    ".cm-panels": {
      backgroundColor: lotusWhite0,
      color: lotusInk1,
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid ${lotusWhite0}`,
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid ${lotusWhite0}`,
    },
    ".cm-searchMatch": {
      backgroundColor: lotusBlue2,
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: lotusBlue2,
      outline: `1px solid ${lotusOrange2}`,
    },
    ".cm-activeLine": { backgroundColor: lotusWhite4 },
    ".cm-selectionMatch": { backgroundColor: lotusWhite4 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: lotusWhite0,
      outline: `1px solid ${lotusWhite5}`,
    },
    ".cm-gutters": {
      backgroundColor: lotusWhite2,
      color: lotusViolet1,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: lotusOrange1,
      backgroundColor: lotusWhite2,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: lotusWhite3,
      color: lotusViolet4,
      border: "none",
    },
    ".cm-tooltip": {
      backgroundColor: lotusGray1,
      border: "none",
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: lotusGray1,
      borderBottomColor: lotusGray1,
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: lotusWhite4,
        color: lotusInk1,
      },
    },
  },
  { dark: false }
);

export const kanagawaLightHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: lotusGray3 },
  { tag: tags.lineComment, color: lotusGray3 },
  { tag: tags.blockComment, color: lotusGray3 },
  { tag: tags.docComment, color: lotusGray3 },
  { tag: tags.name, color: lotusInk1 },
  { tag: tags.variableName, color: lotusInk1 },
  { tag: tags.typeName, color: lotusAqua1 },
  { tag: tags.tagName, color: lotusViolet4 },
  { tag: tags.propertyName, color: lotusYellow1 },
  { tag: tags.attributeName, color: lotusYellow1 },
  { tag: tags.className, color: lotusAqua1 },
  { tag: tags.labelName, color: lotusBlue4 },
  { tag: tags.namespace, color: lotusYellow1 },
  { tag: tags.macroName, color: lotusRed1 },
  { tag: tags.literal, color: lotusGreen1 },
  { tag: tags.string, color: lotusGreen1 },
  { tag: tags.docString, color: lotusGreen1 },
  { tag: tags.character, color: lotusOrange1 },
  { tag: tags.attributeValue, color: lotusGreen1 },
  { tag: tags.number, color: lotusPink },
  { tag: tags.integer, color: lotusPink },
  { tag: tags.float, color: lotusPink },
  { tag: tags.bool, color: lotusOrange1 },
  { tag: tags.regexp, color: lotusYellow2 },
  { tag: tags.escape, color: lotusTeal2 },
  { tag: tags.color, color: lotusOrange1 },
  { tag: tags.url, color: lotusGreen1, textDecoration: "underline" },
  { tag: tags.keyword, color: lotusViolet4 },
  { tag: tags.self, color: lotusViolet4 },
  { tag: tags.null, color: lotusViolet4 },
  { tag: tags.atom, color: lotusViolet4 },
  { tag: tags.unit, color: lotusYellow1 },
  { tag: tags.modifier, color: lotusViolet4 },
  { tag: tags.operatorKeyword, color: lotusYellow1 },
  { tag: tags.controlKeyword, color: lotusViolet4, fontWeight: "bold" },
  { tag: tags.definitionKeyword, color: lotusViolet4 },
  { tag: tags.moduleKeyword, color: lotusViolet4 },
  { tag: tags.operator, color: lotusYellow1 },
  { tag: tags.derefOperator, color: lotusYellow1 },
  { tag: tags.arithmeticOperator, color: lotusYellow1 },
  { tag: tags.logicOperator, color: lotusYellow1 },
  { tag: tags.bitwiseOperator, color: lotusYellow1 },
  { tag: tags.compareOperator, color: lotusYellow1 },
  { tag: tags.updateOperator, color: lotusYellow1 },
  { tag: tags.definitionOperator, color: lotusYellow1 },
  { tag: tags.typeOperator, color: lotusYellow1 },
  { tag: tags.controlOperator, color: lotusYellow1 },
  { tag: tags.punctuation, color: lotusTeal1 },
  { tag: tags.separator, color: lotusTeal1 },
  { tag: tags.bracket, color: lotusTeal1 },
  { tag: tags.angleBracket, color: lotusTeal1 },
  { tag: tags.squareBracket, color: lotusTeal1 },
  { tag: tags.paren, color: lotusTeal1 },
  { tag: tags.brace, color: lotusTeal1 },
  { tag: tags.content, color: lotusInk1 },
  { tag: tags.heading, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading1, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading2, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading3, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading4, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading5, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.heading6, color: lotusGreen1, fontWeight: "bold" },
  { tag: tags.contentSeparator, color: lotusTeal1 },
  { tag: tags.list, color: lotusInk1 },
  { tag: tags.quote, color: lotusRed1, fontStyle: "italic" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.link, color: lotusGreen1, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.inserted, color: lotusGreen2 },
  { tag: tags.deleted, color: lotusRed2 },
  { tag: tags.changed, color: lotusYellow3 },
  { tag: tags.invalid, color: lotusRed3 },
  { tag: tags.meta, color: lotusViolet4 },
  { tag: tags.documentMeta, color: lotusViolet4 },
  { tag: tags.annotation, color: lotusTeal1 },
  { tag: tags.processingInstruction, color: lotusViolet4 },
  { tag: tags.definition(tags.name), color: lotusYellow1 },
  { tag: tags.constant(tags.name), color: lotusOrange1 },
  { tag: tags.function(tags.variableName), color: lotusBlue4 },
  { tag: tags.standard(tags.name), color: lotusInk1 },
  { tag: tags.local(tags.name), color: lotusInk1 },
  { tag: tags.special(tags.string), color: lotusRed1 },
  { tag: tags.special(tags.variableName), color: lotusRed1 },
]);

export const kanagawaLight: Extension = [
  kanagawaLightTheme,
  syntaxHighlighting(kanagawaLightHighlightStyle),
];
