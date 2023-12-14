import styled from "@emotion/styled";

export const BtnStyles = styled.button`
  width: 120px;
  height: 49px;
  border-radius: 24px;
  border: 1px solid;
  position: relative;
  top: 23px;
  margin-right: 15px;
  background-color: #fff;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: #fff;
    background-color: #292929;
  }
`;

export const BtnStylesAdd = styled.button`
  position: absolute;
  width: 90px;
  height: 37px;
  top: -10px;
  right: 10px;
  border: 1px solid;
  background-color: #1d1d1d;
  color: #fff;
  border-radius: 18px;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: #fff;
    background-color: #0056b3;
  }
`;

export const BtnStylesCard = styled.button`
  width: 64px;
  height: 37px;
  border-radius: 18px;
  border: 1px solid;
  position: relative;
  background: #ffffff;
  margin: 12px 0px 0px 16px;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;

  &:hover {
    color: #fff;
    background-color: #292929;
  }
`;
