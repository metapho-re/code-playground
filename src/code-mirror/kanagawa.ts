import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const fujiWhite = "#DCD7BA";
const oldWhite = "#C8C093";
const sumiInk0 = "#16161D";
const sumiInk1 = "#1F1F28";
const sumiInk2 = "#2A2A37";
const sumiInk3 = "#363646";
const sumiInk4 = "#54546D";
const winterGreen = "#2B3328";
const winterYellow = "#49443C";
const winterRed = "#43242B";
const winterBlue = "#252535";
const autumnGreen = "#76946A";
const autumnYellow = "#DCA561";
const autumnRed = "#C34043";
const samuraiRed = "#E82424";
const roninYellow = "#FF9E3B";
const waveBlue1 = "#223249";
const waveBlue2 = "#2D4F67";
const waveAqua1 = "#6A9589";
const waveAqua2 = "#7AA89F";
const springViolet1 = "#938AA9";
const springViolet2 = "#9CABCA";
const boatYellow1 = "#938056";
const boatYellow2 = "#C0A36E";
const dragonBlue = "#658594";
const fujiGray = "#727169";
const oniViolet = "#957FB8";
const crystalBlue = "#7E9CD8";
const springBlue = "#7FB4CA";
const lightBlue = "#A3D4D5";
const springGreen = "#98BB6C";
const carpYellow = "#E6C384";
const sakuraPink = "#D27E99";
const waveRed = "#E46876";
const peachRed = "#FF5D62";
const surimiOrange = "#FFA066";
const katanaGray = "#717C7C";

export const colors = {
  fujiWhite,
  oldWhite,
  sumiInk0,
  sumiInk1,
  sumiInk2,
  sumiInk3,
  sumiInk4,
  winterGreen,
  winterYellow,
  winterRed,
  winterBlue,
  autumnGreen,
  autumnYellow,
  autumnRed,
  samuraiRed,
  roninYellow,
  waveBlue1,
  waveBlue2,
  waveAqua1,
  waveAqua2,
  springViolet1,
  springViolet2,
  boatYellow1,
  boatYellow2,
  dragonBlue,
  fujiGray,
  oniViolet,
  crystalBlue,
  springBlue,
  lightBlue,
  springGreen,
  carpYellow,
  sakuraPink,
  waveRed,
  peachRed,
  surimiOrange,
  katanaGray,
};

export const kanagawaTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: sumiInk1,
      color: fujiWhite,
    },
    ".cm-content": {
      caretColor: fujiWhite,
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: fujiWhite,
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      {
        backgroundColor: waveBlue1,
      },
    ".cm-panels": {
      backgroundColor: sumiInk0,
      color: fujiWhite,
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid ${sumiInk0}`,
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid ${sumiInk0}`,
    },
    ".cm-searchMatch": {
      backgroundColor: waveBlue2,
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: waveBlue2,
      outline: `1px solid ${roninYellow}`,
    },
    ".cm-activeLine": { backgroundColor: sumiInk3 },
    ".cm-selectionMatch": { backgroundColor: sumiInk3 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: sumiInk0,
      outline: `1px solid ${sumiInk4}`,
    },
    ".cm-gutters": {
      backgroundColor: sumiInk1,
      color: sumiInk4,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: surimiOrange,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: sumiInk2,
      color: oniViolet,
      border: "none",
    },
    ".cm-tooltip": {
      backgroundColor: waveBlue1,
      border: "none",
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: waveBlue1,
      borderBottomColor: waveBlue1,
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: sumiInk3,
        color: fujiWhite,
      },
    },
  },
  { dark: true }
);

export const kanagawaHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: fujiGray },
  { tag: tags.lineComment, color: fujiGray },
  { tag: tags.blockComment, color: fujiGray },
  { tag: tags.docComment, color: fujiGray },
  { tag: tags.name, color: fujiWhite },
  { tag: tags.variableName, color: fujiWhite },
  { tag: tags.typeName, color: waveAqua2 },
  { tag: tags.tagName, color: oniViolet },
  { tag: tags.propertyName, color: carpYellow },
  { tag: tags.attributeName, color: carpYellow },
  { tag: tags.className, color: waveAqua2 },
  { tag: tags.labelName, color: crystalBlue },
  { tag: tags.namespace, color: carpYellow },
  { tag: tags.macroName, color: waveRed },
  { tag: tags.literal, color: springGreen },
  { tag: tags.string, color: springGreen },
  { tag: tags.docString, color: springGreen },
  { tag: tags.character, color: surimiOrange },
  { tag: tags.attributeValue, color: springGreen },
  { tag: tags.number, color: sakuraPink },
  { tag: tags.integer, color: sakuraPink },
  { tag: tags.float, color: sakuraPink },
  { tag: tags.bool, color: surimiOrange },
  { tag: tags.regexp, color: boatYellow2 },
  { tag: tags.escape, color: springBlue },
  { tag: tags.color, color: surimiOrange },
  { tag: tags.url, color: springGreen, textDecoration: "underline" },
  { tag: tags.keyword, color: oniViolet },
  { tag: tags.self, color: oniViolet },
  { tag: tags.null, color: oniViolet },
  { tag: tags.atom, color: oniViolet },
  { tag: tags.unit, color: carpYellow },
  { tag: tags.modifier, color: oniViolet },
  { tag: tags.operatorKeyword, color: carpYellow },
  { tag: tags.controlKeyword, color: oniViolet, fontWeight: "bold" },
  { tag: tags.definitionKeyword, color: oniViolet },
  { tag: tags.moduleKeyword, color: oniViolet },
  { tag: tags.operator, color: carpYellow },
  { tag: tags.derefOperator, color: carpYellow },
  { tag: tags.arithmeticOperator, color: carpYellow },
  { tag: tags.logicOperator, color: carpYellow },
  { tag: tags.bitwiseOperator, color: carpYellow },
  { tag: tags.compareOperator, color: carpYellow },
  { tag: tags.updateOperator, color: carpYellow },
  { tag: tags.definitionOperator, color: carpYellow },
  { tag: tags.typeOperator, color: carpYellow },
  { tag: tags.controlOperator, color: carpYellow },
  { tag: tags.punctuation, color: springViolet2 },
  { tag: tags.separator, color: springViolet2 },
  { tag: tags.bracket, color: springViolet2 },
  { tag: tags.angleBracket, color: springViolet2 },
  { tag: tags.squareBracket, color: springViolet2 },
  { tag: tags.paren, color: springViolet2 },
  { tag: tags.brace, color: springViolet2 },
  { tag: tags.content, color: fujiWhite },
  { tag: tags.heading, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading1, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading2, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading3, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading4, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading5, color: springGreen, fontWeight: "bold" },
  { tag: tags.heading6, color: springGreen, fontWeight: "bold" },
  { tag: tags.contentSeparator, color: springViolet2 },
  { tag: tags.list, color: fujiWhite },
  { tag: tags.quote, color: waveRed, fontStyle: "italic" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.link, color: springGreen, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.inserted, color: autumnGreen },
  { tag: tags.deleted, color: autumnRed },
  { tag: tags.changed, color: autumnYellow },
  { tag: tags.invalid, color: samuraiRed },
  { tag: tags.meta, color: oniViolet },
  { tag: tags.documentMeta, color: oniViolet },
  { tag: tags.annotation, color: springViolet2 },
  { tag: tags.processingInstruction, color: oniViolet },
  { tag: tags.definition(tags.name), color: carpYellow },
  { tag: tags.constant(tags.name), color: surimiOrange },
  { tag: tags.function(tags.variableName), color: crystalBlue },
  { tag: tags.standard(tags.name), color: fujiWhite },
  { tag: tags.local(tags.name), color: fujiWhite },
  { tag: tags.special(tags.string), color: peachRed },
  { tag: tags.special(tags.variableName), color: waveRed },
]);

export const kanagawa: Extension = [
  kanagawaTheme,
  syntaxHighlighting(kanagawaHighlightStyle),
];
