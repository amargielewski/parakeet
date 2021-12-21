import { TextareaHTMLAttributes } from 'react';
import { StyledTextarea } from './Textarea.styled';

export type TextareaProps = {
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ placeholder }: TextareaProps) => {
  return <StyledTextarea placeholder={placeholder} />;
};
