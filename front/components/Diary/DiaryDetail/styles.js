import styled, { css } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ----- Detail Header -----

export const DiaryHeaderWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const DiaryBackBtn = styled.div`
  font-size: 30px;
  padding-left: 10px;

  & span:hover {
    cursor: pointer;
    color: white;
    transition: 0.3s;
  }
`;

export const DiaryHeaderDay = styled.div`
  ${center}
  color: white;
  font-weight: bolder;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const DiaryHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-weight: bolder;
`;

// ----- Diary Contents-----

export const DiaryContentsWrapper = styled.div`
  border-radius: 20px;
  padding: 10px 20px 20px 20px;
  margin-bottom: 20px;

  background: -webkit-linear-gradient(
    135deg,
    ${(props) => props.feel === "Special" && "#76bae8"},
    ${(props) => props.feel === "Special" && "#e8bdf0"}
  );
  background: linear-gradient(
    135deg,
    ${(props) => props.feel === "Special" && "#76bae8"},
    ${(props) => props.feel === "Special" && "#e8bdf0"}
  );

  background: -webkit-linear-gradient(
    135deg,
    ${(props) => props.feel === "Good" && "#adde9b"},
    ${(props) => props.feel === "Good" && "#8ACF71"}
  );
  background: linear-gradient(
    135deg,
    ${(props) => props.feel === "Good" && "#adde9b"},
    ${(props) => props.feel === "Good" && "#8ACF71"}
  );

  background: -webkit-linear-gradient(
    135deg,
    ${(props) => props.feel === "Soso" && "#ffe78f"},
    ${(props) => props.feel === "Soso" && "#f2bf05"}
  );
  background: linear-gradient(
    135deg,
    ${(props) => props.feel === "Soso" && "#ffe78f"},
    ${(props) => props.feel === "Soso" && "#f2bf05"}
  );

  background: -webkit-linear-gradient(
    135deg,
    ${(props) => props.feel === "Bad" && "#ffa1a7"},
    ${(props) => props.feel === "Bad" && "#ff757f"}
  );
  background: linear-gradient(
    135deg,
    ${(props) => props.feel === "Bad" && "#ffa1a7"},
    ${(props) => props.feel === "Bad" && "#ff757f"}
  );
`;

export const DiaryContentsTop = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const DiaryTempWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.BLACK};
  padding: 3px 6px;
  border-radius: 100px;

  & span:first-child {
    color: rgb(151, 205, 252);
  }
  & span:nth-child(2) {
    color: gray;
    margin: 5px;
  }
  & span:last-child {
    color: rgb(247, 161, 231);
  }
`;

export const DiaryContents = styled.div`
  ${center}
  flex-direction: column;
`;

export const DiaryTitleText = styled.div`
  color: black;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  margin-bottom: 40px;
  font-weight: bolder;
`;

export const DiaryContentText = styled.div`
  color: black;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  white-space: pre-wrap;
  margin-top: 30px;
`;

// ----- Diary Image -----

export const DiaryImgWrapper = styled.div`
  position: relative;
  ${center}
`;

export const DiaryImgClip = styled.div`
  position: absolute;
  top: -50px;
`;

export const DiaryImgFrame = styled.div`
  background-color: #f0f0f0;
  padding: 15px 15px 30px 15px;
  width: 75%;
  height: 75%;
  box-shadow: 0 10px 10px -4px rgba(0, 0, 0, 0.2),
    0 5px 5px -5px rgba(0, 0, 0, 0.04);

  & img {
    width: 100%;
    height: 100%;
  }
`;
