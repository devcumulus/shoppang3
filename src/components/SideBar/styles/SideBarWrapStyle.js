import styled from "@emotion/styled";

export const SideBarWrap = styled.div`
  position: fixed;
  width: 220px;
  height: 100%;
  margin-left: 25px;
  font-size: 14px;

  ul {
    position: relative;
    li {
      position: relative;
      display: flex;
      /* padding-top: 10px; */
      height: 32px;
      align-items: center;
      margin-top: 16px;
      img {
        margin-right: 16px;
      }
    }
  }
`;
