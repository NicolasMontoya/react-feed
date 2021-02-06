import React from 'react'
import { FaFileUpload, FaCheckCircle, FaTimesCircle, FaRegArrowAltCircleLeft } from 'react-icons/fa'
import styled, { css } from 'styled-components';


/**
 * Estructura de botón generada mediante Styled Componentes
 */
export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${(props) => props.color || 'white'};
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 5px 10px;
  background: ${(props) => props.overBackground || '#6c9a06'};
  & svg {
    margin: 4px;
  }
  & :hover {
    background: ${(props) => props.overBackground || '#6c9a06'};
    color: ${(props) => props.colorOver || 'white'};
  }
  ${(props) => {
    !props.canDisplay &&
      css`
        display: none;
      `;
  }}
`;

/**
 * Estructura de botón circular generada mediante Styled Componentes
 */
export const CircleButton = styled.button`
  align-items: center;
  width: ${(props) => props.radius || '40px'};
  height: ${(props) => props.radius || '40px'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '20px'};
  cursor: pointer;
  border: none;
  border-radius: 100px;
  font-weight: 700;
  padding: 5px;
  background: ${(props) => props.overBackground || '#6c9a06'};
  & svg {
    margin: 4px;
  }
  & :hover {
    background: ${(props) => props.overBackground || '#6c9a06'};
    color: ${(props) => props.colorOver || 'white'};
  }
  ${(props) => {
  !props.canDisplay &&
  css`
        display: none;
      `;
}}
`;


/* *****************************************************************************
 * **************          Custom buttons             **************************
 * *****************************************************************************
 */

export const LoadingButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  background = '#6c9a06',
  size = '20px',
  text,
  className
}) => (
  <Button
    onClick={() => onClick()}
    canDisplay={canDisplay}
    background={background}
    className={className}
  >
    <FaFileUpload size={size} color={color} />
    {text}
  </Button>
)

export const ConfirmButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  colorOver = '#fff',
  background = '#6c9a06',
  overBackground = '#6c9a06',
  size = '20px',
  text,
  className
}) => (
  <Button
    onClick={() => onClick()}
    canDisplay={canDisplay}
    background={background}
    className={className}
    colorOver={colorOver}
    color={color}
    overBackground={overBackground}
  >
    <FaCheckCircle size={size} color={color} />
    {text}
  </Button>
)

export const CancelButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  colorOver = '#fff',
  background = '#6c9a06',
  overBackground = '#6c9a06',
  size = '20px',
  text,
  className
}) =>
  (
    <Button
      onClick={() => onClick()}
      canDisplay={canDisplay}
      background={background}
      className={className}
      colorOver={colorOver}
      color={color}
      overBackground={overBackground}
    >
      <FaTimesCircle size={size} color={color} />
      {text}
    </Button>
  )

export const BackButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  colorOver = '#fff',
  background = '#6c9a06',
  overBackground = '#6c9a06',
  size = '20px',
  text,
  className
}) =>
  (
    <Button
      onClick={() => onClick()}
      canDisplay={canDisplay}
      background={background}
      className={className}
      colorOver={colorOver}
      color={color}
      overBackground={overBackground}
    >
      <FaRegArrowAltCircleLeft size={size} color={color} />
      {text}
    </Button>
  )

export const CircularButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  colorOver = '#fff',
  background = '#6c9a06',
  overBackground = '#6c9a06',
  size = '20px',
  radius = '40px',
  icon: Icon,
  className
}) =>
  (
    <CircleButton
      onClick={() => onClick()}
      canDisplay={canDisplay}
      radius={radius}
      background={background}
      className={className}
      colorOver={colorOver}
      color={color}
      overBackground={overBackground}
    >
      <Icon size={size} color={color} />
    </CircleButton>
  )
