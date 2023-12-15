import styled from "@emotion/styled";

export const About = styled.div`
  position: relative;
  width: 220px;
  height: auto;
  padding: 16px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;

  p {
    position: relative;
    color: #666;
  }
  li {
    position: relative;
    width: 195px;
    height: auto;
    border-radius: 8px;
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
        /* display: block; */
        /* align-items: center; */
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
