import styled from "@emotion/styled";

export const Shopping = styled.div`
  position: relative;
  width: 220px;
  height: auto;
  padding: 16px;
  p {
    position: relative;
    color: #666;
  }
  li {
    position: relative;
    cursor: pointer;
    &:hover {
      .hoverbox {
        position: absolute;
        width: 195px;
        height: 32px;
        border-radius: 8px;
        left: -16px;
        background-color: #a8a8a8;
        opacity: 35%;
      }
      span {
        position: relative;
        z-index: 1;
      }
      img {
        z-index: 1;
        opacity: 100%;
      }
    }
    img {
      width: 20px;
      height: 20px;
      opacity: 35%;
    }
  }
`;
