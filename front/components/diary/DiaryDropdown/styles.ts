import styled from 'styled-components';

import { Button } from 'antd';

export const DiaryDropdownButton = styled(Button)`
  background-color: #e6acac;
  color: black;
  border-width: 2px;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #e89b9b;
    border-color: #d6c7c7;
    color: red;
  }
`;
