import styled from "@emotion/styled";
import { Common } from "../../../styles/common";

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  .top-left {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 25px;
    img {
      width: 68px;
      cursor: pointer;
    }
    h1 {
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
      color: ${Common.color.primary};
    }
  }
  .top-right {
    display: flex;
    margin-right: 16px;
    align-items: center;
    gap: 6px;
    img {
      cursor: pointer;
    }
  }
`;
