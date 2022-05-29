import { keyframes, css } from "styled-components"

const dropKeyFrames = keyframes`
  from {
    top: -80px;
  }

  to {
    top: -20px;
  }
`

export const drop = ({ time = '.5s', type = 'ease' } = {}) => 
  css`animation: ${time} ${dropKeyFrames} ${type}`
