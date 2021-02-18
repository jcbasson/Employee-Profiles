import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  width: 40%;
  height: 530px;
  border: 1px solid #000000;
  z-index: 20;
  background-color: white;
  cursor: default;
  @media (max-width: 838px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    height: 400px;
  }
`;

export const ModalCloseButton = styled.span`
  background-color: transparent;
  font-size: 30px;
  position: relative;
  top: -37px;
  right: 0;
  float: right;
  cursor: pointer;
`;
