import Button from 'antd/lib/button';
import styled from 'styled-components';

export const WordSearchFormStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 60px;

  .searchInputWrap,
  .searchTermWrap {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .searchInputWrap {
    .ant-select {
      width: 140px;
    }
    .ant-select-selector {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .ant-input {
      width: 340px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .searchTermWrap {
    gap: 0.5rem;
    .ant-input {
      width: 100px;
    }
  }

  .submitButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 160px;
    font-size: 1.05rem;
  }

  .ant-input,
  .ant-select,
  .ant-select .ant-select-selector,
  .ant-select .ant-select-selector .ant-select-selection-search-input,
  .submitButton {
    height: 100%;
  }
  .ant-select .ant-select-selector .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;
