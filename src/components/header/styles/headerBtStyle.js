import styled from "@emotion/styled";
import { Button } from "antd";
import { Common } from "../../../styles/common";

export const HeaderBt = styled.button`
  background: none;
  color: ${Common.color.g900};
  padding: 4px 16px;
  width: 70px;
  height: 32px;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  border: 1px solid #1a1a1a;
  :hover {
    background: ${Common.color.g400};
    color: white;
    border: none;
  }
`;
