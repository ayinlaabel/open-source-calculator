import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  background: rgba(0, 0, 0, 0.2);
  width: 450px;
  border-radius: 4px;
  padding: 10px;
`;

export const DisplayScreen = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 150px;
  background: #fff;
  border-radius: 4px;
  padding: 0;
`;

export const DisplayText = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
  margin-right: 10px;
  padding: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 420px;
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 62%;
`;

export const SignsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const ButtonLayer = styled.div`
  margin-top: 10px;
  width: 300px;
`;
