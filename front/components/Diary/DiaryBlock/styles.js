import styled from "styled-components";

export const DiaryBlockWrapper = styled.div`
  border-radius: 5px;
  padding: 5px;
  color: ${(props) => props.theme.DARK_GRAY};
  box-shadow: 2px 2px 1px rgba(255, 255, 255, 0.2);

  /* background-color: ${(props) => props.feel === "Special" && "#e8bdf0"}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === "Special" && "#76bae8"},
    ${(props) => props.feel === "Special" && "#e8bdf0"}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === "Special" && "#76bae8"},
    ${(props) => props.feel === "Special" && "#e8bdf0"}
  );

  /* background-color: ${(props) => props.feel === "Good" && "#8ACF71"}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === "Good" && "#adde9b"},
    ${(props) => props.feel === "Good" && "#8ACF71"}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === "Good" && "#adde9b"},
    ${(props) => props.feel === "Good" && "#8ACF71"}
  );

  /* background-color: ${(props) => props.feel === "Soso" && "#FFE689"}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === "Soso" && "#FFE689"},
    ${(props) => props.feel === "Soso" && "#f7d75e"}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === "Soso" && "#FFE689"},
    ${(props) => props.feel === "Soso" && "#f7d75e"}
  );

  /* background-color: ${(props) => props.feel === "Bad" && "#FF8D95"}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === "Bad" && "#FF8D95"},
    ${(props) => props.feel === "Bad" && "#ff757f"}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === "Bad" && "#FF8D95"},
    ${(props) => props.feel === "Bad" && "#ff757f"}
  );

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    cursor: pointer;
  }
`;
