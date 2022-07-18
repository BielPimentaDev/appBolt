import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";

const {height, width} = Dimensions.get("window");

export const TabBarArea = styled.View`
  height: 55px;
  height: ${Platform.OS === "ios" && height > 800 ? "65px" : "55px"};
  ${Platform.OS === "ios" && height > 800 && "padding-bottom: 10px"};
  background-color: #04E3C3;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const TabBarItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
`;

export const TabBarItemIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const TabBarAlertItem = styled.TouchableOpacity`
  width: 73px;
  height: 73px;
  align-items: center;
  justify-content: center;
  ${props => (props.expanded && "margin-top: -55px")}
  border-radius: 50px;
`;

export const TabBarAlertItemIcon = styled.Image`
  height: 200%;
  width: 200%;
  resize-mode: contain;
`;
