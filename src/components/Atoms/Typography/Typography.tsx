import React from 'react';
import { Typography as AntTypography } from 'antd';
import type { TypographyProps as AntTypographyProps } from 'antd';
import './Typography.less';

interface TypographyProps extends AntTypographyProps {
  className?:
    | 'text-size-body'
    | 'text-size-small'
    | 'text-size-xsmall'
    | string;
}

const { Text, Title, Paragraph, Link } = AntTypography;

const Typography = ({ className, ...props }: TypographyProps) => {
  return <AntTypography className={`${className}`} {...props} />;
};

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = Link;

export default Typography;