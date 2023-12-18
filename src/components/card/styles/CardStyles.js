import styled from "@emotion/styled";
import { Common } from "../../../styles/common";

export const CardBox = styled.div`
  position: relative;
  width: 328px;
  height: 180px;
  margin: 32px 40px 0px 0;
  border: 1px solid ${Common.color.g600};
  border-radius: 8px;
  cursor: pointer;
`;

export const CardEnd = styled.div`
  position: relative;
  height: 115px;

  background: #a8a8a8;
  opacity: 0.4;

  border-radius: 8px 8px 0px 0px;
`;

export const DateText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 42px;
  font-weight: 700;
  line-height: 50px;
  color: #fff;
`;
export const Heading = styled.h2`
  height: 24px;
  padding: 16px 0px 0px 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const Category = styled.p`
  height: 17px;
  padding: 20px 0px 16px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #757575;
`;

export const Memo = styled.p`
  padding: 10px 16px 0px 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  color: #757575;
`;

export const CardFormBtn = styled.div`
  display: flex;
  gap: 12px;

  padding: 12px 0px 0px 16px;
`;
export const CardCompleteBtn = styled.div`
  padding: 12px 0px 0px 16px;
`;
