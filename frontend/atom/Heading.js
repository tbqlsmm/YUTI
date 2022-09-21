import React from 'react';
import styled from '@emotion/styled';
import { MAIN_COLOR } from '../const';

const Text = styled.div`
  color: black;
  strong {
    color: ${MAIN_COLOR};
  }
`;
export default function Heading({
  text,
  color = 'black',
  fontSize = 30,
  textAlign = 'left',
  fontWeight = 'bold',
}) {
  return <Text style={{ color, fontSize, textAlign, fontWeight }}>{text}</Text>;
}