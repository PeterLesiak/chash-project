import { styleTags, tags as t } from '@lezer/highlight';

export const csharpHighlight = styleTags({
    ['Keyword']: t.keyword,
    ['NamespaceName']: t.namespace,
    ['ClassName']: t.className,
    ['ExtendsName']: t.className,
    ['String']: t.string,
    ['Number']: t.number,
    ['Punctuation']: t.operator,
    ['Comment']: t.comment,
});
