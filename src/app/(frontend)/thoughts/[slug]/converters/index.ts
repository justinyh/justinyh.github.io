import { JSXConverters, JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { HeadingConverter } from './HeadingConverter';
import { ParagraphConverter } from './ParagraphConverter';

type NodeTypes =
  | DefaultNodeTypes

type DefaultJSXConverters = {
    defaultConverters: JSXConverters<DefaultNodeTypes>;
}

export default function converters({defaultConverters}: DefaultJSXConverters): JSXConverters<NodeTypes> {
    return {
        ...defaultConverters,
        paragraph: ParagraphConverter,
        heading: HeadingConverter
    };
};