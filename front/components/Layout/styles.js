import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child{
    padding-left: 0 !important;
  }

  .ant-col:last-child{
    padding-right: 0 !important;
  }

  // ant-card icon style
  .ant-card-actions{
    border-color: gray; 
    background-color: #bfbfbf; 
  }
  
  .ant-card-actions > li {
    border-color: gray !important; 

    & > span > .anticon {
      color: #191A1A;
    }
  }

  // ant-input style
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    background: none;
    
    & .ant-input-search-button:not(.ant-btn-primary) {   
      background-color: gray;
      border-radius: 100px;
      border-color: black;
      border-width: 1.5px;
      color: black;
      left: -3px;
    }
  }

  .ant-input-group > .ant-input:first-child {
    color: white;
  }
`;
