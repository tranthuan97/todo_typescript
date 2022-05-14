import styled from "styled-components";

type PropsSwitchButton = {
  switchState: string
}

const commonStyle = `
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  -moz-user-select: none !important;
  -webkit-touch-callout: none!important;
  -webkit-user-select: none!important;
  -khtml-user-select: none!important;
  -moz-user-select: none!important;
  -ms-user-select: none!important;
  user-select: none!important;
`

export const DailySwitchButton = styled.div`
${commonStyle}
margin-left: -10px;
background: ${props => props.switchState === 'daily' ? "pink" : ""};
border-radius: ${props => props.switchState === 'daily' ? "30px" : ""};
right: 0;
z-index: ${(props: PropsSwitchButton) => props.switchState === 'daily' ? "1" : "0"};
`;

export const MonthlySwitchButton = styled.div`
${commonStyle}
background: ${(props: PropsSwitchButton) => props.switchState === 'monthly' ? "pink" : ""};
border-radius: ${props => props.switchState === 'monthly' ? "30px" : ""};
left: 0;
z-index: ${props => props.switchState === 'monthly' ? "1" : "0"};
`;
