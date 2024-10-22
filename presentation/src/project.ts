import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { makeProject } from '@motion-canvas/core';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

import { parser } from './grammar/parser';

import Introduction from './scenes/Introduction?scene';
import Public from './scenes/Public?scene';
import Protected from './scenes/Protected?scene';
import Private from './scenes/Private?scene';
import Properties from './scenes/Properties?scene';
import Ending from './scenes/Ending?scene';

const theme = HighlightStyle.define([
    { tag: [tags.keyword, tags.operator], color: '#ff7b72' },
    { tag: [tags.namespace, tags.className], color: '#ffa657' },
    { tag: tags.string, color: '#a5d6ff' },
    { tag: tags.number, color: '#79c0ff' },
    { tag: tags.comment, color: '#9198a1' },
]);

Code.defaultHighlighter = new LezerHighlighter(parser, theme);

export default makeProject({
    scenes: [Introduction, Public, Protected, Private, Properties, Ending],
    experimentalFeatures: true,
});
