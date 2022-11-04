import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: inline-block;
  margin: 0 auto;
`;

export const ContactItem = styled.li`
  line-height: 1.5;
  height: 100%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ContactDelete = styled.button`
  width: 120px;
  margin-left: 50px;
  padding: 5px;
  float: right;

  background-color: #00008b;
  color: #ffffff;
  border-radius: 5px;
  border: transparent;

  &:hover {
    background-color: #7b68ee;
  }
`;
