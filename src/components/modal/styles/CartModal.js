import styled from "@emotion/styled";
import { Common } from "../../../styles/common";

export const CartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: "auto";
  padding: 30px;
  width: 388px;
  height: 361px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${Common.color.g500};
  background-color: #fff;

  header {
    position: relative;
    padding-bottom: 11px;
    border-bottom: 1px solid ${Common.color.g500};
    font-size: 24px;
    font-weight: bold;
    color: ${Common.color.g900};
  }
  input {
    position: relative;
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    margin: 20px 0;
    font-size: 16px;
    border: 1px solid ${Common.color.g300};
    border-radius: 4px;
  }

  select {
    position: relative;
    width: 100%;
    height: 48px;
    padding: 6px 16px;
    font-size: 16px;
    appearance: none;
    color: ${Common.color.g600};
    border: 1px solid ${Common.color.g300};
    border-radius: 4px;
  }
  option {
    position: relative;
    padding: 11px 16px;
    font-size: 16px;
  }

  // button component로 변경 예정
  button {
    position: relative;
    margin-left: 237px;
    width: 90px;
    height: 34px;
  }
`;
