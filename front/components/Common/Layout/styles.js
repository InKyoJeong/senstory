import styled, { createGlobalStyle } from "styled-components";
import { Input } from "antd";

export const Global = createGlobalStyle`
  body{
     background-color: ${({ theme }) => theme.color.BLACK};
   }
   
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

  .ant-form-item{
      margin-bottom: 0px;
      margin-top: 10px;
  }

  .ant-card-body{
    padding: 20px 20px 10px 20px;  
  }

  // ant-card icon style
  .ant-card-actions{
    border-color: #696666; 
    background-color: #3e3e40;

    & ul{
      color: #404042; 
    }
  }
 
  .ant-card-actions > li {
    border-color: gray !important; 

    & > span > .anticon {
       color: white;
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

  .ant-empty-description{
    color: white;
    opacity: 0.7;
  } 

  // ant-popover
  .ant-popover-inner-content, .ant-popover-arrow-content{
    background-color: #8c8181;
  }

  .ant-empty{
    opacity: 0.4;
  }
`;

export const TagSearchInput = styled(Input.Search)`
  vertical-align: middle;
  background-color: gray;
  color: white;
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px 0px;
`;
