import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 320px;
  margin-bottom: 30px;
`;

export const FilterInput = styled.input`
  outline: none;
  border: 1px solid #000000;
  border-radius: 3px;

  &:hover,
  &:focus {
    border: 1px solid #7b68ee;
    box-shadow: 0px 0px 3px 0.7px #7b68ee;
  }
`;
