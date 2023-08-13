import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const fujiWhite = "#DCD7BA";
const oldWhite = "#C8C093";
const sumiInk0 = "#16161D";
const sumiInk1 = "#181820";
const sumiInk2 = "#1A1A22";
const sumiInk3 = "#1F1F28";
const sumiInk4 = "#2A2A37";
const sumiInk5 = "#363646";
const sumiInk6 = "#54546D";
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
const oniViolet1 = "#957FB8";
const oniViolet2 = "#B8B4D0";
const springViolet1 = "#938AA9";
const springViolet2 = "#9CABCA";
const boatYellow1 = "#938056";
const boatYellow2 = "#C0A36E";
const dragonBlue = "#658594";
const fujiGray = "#727169";
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
  sumiInk5,
  sumiInk6,
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
  oniViolet1,
  oniViolet2,
  springViolet1,
  springViolet2,
  boatYellow1,
  boatYellow2,
  dragonBlue,
  fujiGray,
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

export const kanagawaDarkTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: sumiInk3,
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
    ".cm-activeLine": { backgroundColor: sumiInk5 },
    ".cm-selectionMatch": { backgroundColor: sumiInk5 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: sumiInk0,
      outline: `1px solid ${sumiInk6}`,
    },
    ".cm-gutters": {
      backgroundColor: sumiInk3,
      color: sumiInk6,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: surimiOrange,
      backgroundColor: sumiInk3,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: sumiInk4,
      color: oniViolet1,
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
        backgroundColor: sumiInk5,
        color: fujiWhite,
      },
    },
  },
  { dark: true }
);

export const kanagawaDarkHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: fujiGray },
  { tag: tags.lineComment, color: fujiGray },
  { tag: tags.blockComment, color: fujiGray },
  { tag: tags.docComment, color: fujiGray },
  { tag: tags.name, color: fujiWhite },
  { tag: tags.variableName, color: fujiWhite },
  { tag: tags.typeName, color: waveAqua2 },
  { tag: tags.tagName, color: oniViolet1 },
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
  { tag: tags.keyword, color: oniViolet1 },
  { tag: tags.self, color: oniViolet1 },
  { tag: tags.null, color: oniViolet1 },
  { tag: tags.atom, color: oniViolet1 },
  { tag: tags.unit, color: carpYellow },
  { tag: tags.modifier, color: oniViolet1 },
  { tag: tags.operatorKeyword, color: carpYellow },
  { tag: tags.controlKeyword, color: oniViolet1, fontWeight: "bold" },
  { tag: tags.definitionKeyword, color: oniViolet1 },
  { tag: tags.moduleKeyword, color: oniViolet1 },
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
  { tag: tags.meta, color: oniViolet1 },
  { tag: tags.documentMeta, color: oniViolet1 },
  { tag: tags.annotation, color: springViolet2 },
  { tag: tags.processingInstruction, color: oniViolet1 },
  { tag: tags.definition(tags.name), color: carpYellow },
  { tag: tags.constant(tags.name), color: surimiOrange },
  { tag: tags.function(tags.variableName), color: crystalBlue },
  { tag: tags.standard(tags.name), color: fujiWhite },
  { tag: tags.local(tags.name), color: fujiWhite },
  { tag: tags.special(tags.string), color: peachRed },
  { tag: tags.special(tags.variableName), color: waveRed },
]);

export const kanagawaDark: Extension = [
  kanagawaDarkTheme,
  syntaxHighlighting(kanagawaDarkHighlightStyle),
];
