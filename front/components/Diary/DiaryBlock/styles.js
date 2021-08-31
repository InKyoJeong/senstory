import styled from 'styled-components';

export const DiaryBlockWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.DARK_GRAY};
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2);

  overflow: hidden;
  width: 48%;
  margin: 1% auto;

  /* background-color: ${(props) => props.feel === 'Special' && '#e8bdf0'}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === 'Special' && '#76bae8'},
    ${(props) => props.feel === 'Special' && '#e8bdf0'}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === 'Special' && '#76bae8'},
    ${(props) => props.feel === 'Special' && '#e8bdf0'}
  );

  /* background-color: ${(props) => props.feel === 'Good' && '#8ACF71'}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === 'Good' && '#adde9b'},
    ${(props) => props.feel === 'Good' && '#8ACF71'}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === 'Good' && '#adde9b'},
    ${(props) => props.feel === 'Good' && '#8ACF71'}
  );

  /* background-color: ${(props) => props.feel === 'Soso' && '#FFE689'}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === 'Soso' && '#FFE689'},
    ${(props) => props.feel === 'Soso' && '#f7d75e'}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === 'Soso' && '#FFE689'},
    ${(props) => props.feel === 'Soso' && '#f7d75e'}
  );

  /* background-color: ${(props) => props.feel === 'Bad' && '#FF8D95'}; */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.feel === 'Bad' && '#FF8D95'},
    ${(props) => props.feel === 'Bad' && '#ff757f'}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.feel === 'Bad' && '#FF8D95'},
    ${(props) => props.feel === 'Bad' && '#ff757f'}
  );

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    cursor: pointer;
  }

  & svg {
    font-size: 18px;
  }
`;

export const WhiteLabel = styled.div`
  position: relative;

  & div {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(45deg);
    height: 100px;
    width: 45px;
    top: -42px;
    left: -24px;
  }
`;

export const BlockFeelText = styled.div`
  color: ${({ theme }) => theme.color.DARK_GRAY};
  display: flex;
  justify-content: space-between;

  & div {
    z-index: 50;
  }
`;

export const BlockTitleText = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.color.MIDDLE_GRAY};

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80px;
  }
`;

export const BlockDateText = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.7;
  font-style: italic;
  font-size: 12px;
`;
