import styled from "@emotion/styled";
import { Common } from "../../../styles/common";

export const ContentCard = styled.div`
  position: relative;
  display: flex;
  /* height: 575px; */
  flex-direction: column;
  justify-content: space-between;
  ul {
    position: relative;
    display: flex;
    width: 328px;
    height: auto;
    border: 2px solid ${Common.color.g600};
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
    li {
      position: relative;

      img {
        position: relative;
        width: 328px;
        height: 184px;
        object-fit: cover;
      }
    }
  }
  p {
    position: relative;
    font-size: 20px;
  }
  span {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
  }
`;