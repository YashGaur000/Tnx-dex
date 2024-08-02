import React, { memo } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const Content = styled.div<{ theme: DefaultTheme }>`
  height: 550px;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.text};
  padding: 4%;
  line-height: 35.88px;
  font-size: 34px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  font-family: ${({ theme }) => theme.fonts.main};

  h1 {
    font-size: 36px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-bottom: 30px;
  }

  span {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    margin: 1rem 0;
    font-size: 18px;
    padding-left: 10px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  ul,
  ol {
    margin: 1rem 0;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    padding-left: 40px;
  }
  ,
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th {
    padding: 8px 12px;
    border: 1px solid;
    text-align: center;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  td {
    padding: 8px 12px;
    border: 1px solid;
    text-align: left;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .formula {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    font-size: 26px;
    padding: 10px;
  }

  .core-section {
    border: 1px solid #ccc;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    ul {
      padding: 10px;
    }

    math {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      text-align: center;
      font-size: 26px;
    }
  }

  .highlight {
    color: rgb(211, 61, 61);
  }

  .note {
    border: 1px solid #ffffff21;
    background-color: #ffffff21;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;

    p {
      font-size: 15px;
    }
  }

  .info-box {
    display: flex;
    align-items: center;
    background-color: #e6f7ff2b;
    border-left: 4px solid #3dacf7;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .info-icon {
    font-size: 24px;
    margin-right: 10px;
  }
`;

interface ContentDataProps {
  title: string;
  content: string;
}

// eslint-disable-next-line react/prop-types
const ContentData: React.FC<ContentDataProps> = memo(({ title, content }) => {
  return (
    <Content id="content">
      <h1 id="title">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Content>
  );
});

// Set the display name for the memo-wrapped component
ContentData.displayName = 'ContentData';

export default ContentData;
