import styled from "@emotion/styled";

export const Common = {
  // 숫자가 높을수록 어두운 색
  color: {
    primary: "#3FB139",
    p100: "#5BC855",
    p200: "#80D57B",
    p300: "#A5E1A2",
    p400: "#CAEDC9",
    p500: "#318A2D",
    p600: "#246420",
    p700: "#163D14",
    p800: "#081707",

    g100: "#F5F5F5",
    g200: "#DBDBDB",
    g300: "#C2C2C2",
    g400: "#A8A8A8",
    g500: "#8F8F8F",
    g600: "#757575",
    g700: "#5C5C5C",
    g800: "#424242",
    g900: "#424242",
  },
};

export const PageLayoutStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 28px 66px;
  margin-left: 40px;
  border-left: 1px solid ${Common.color.g600};
`;

export const TitleStyle = styled.div`
  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 7px;
  }
  span {
    display: block;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: ${Common.color.g600};
    margin-bottom: 23px;
  }
`;
