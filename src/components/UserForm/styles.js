import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding: 12px 16px;
`

export const Form = styled.form`
  padding: 16px 16px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`
