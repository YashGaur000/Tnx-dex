import React, { memo } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const Content = styled.div<{ theme: DefaultTheme }>`
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

  ul {
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
`;

interface ContentDataProps {
  title: string;
  content: string;
}

// eslint-disable-next-line react/prop-types
const ContentData: React.FC<ContentDataProps> = memo(({ title, content }) => {
  return (
    <Content>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Content>
  );
});

// Set the display name for the memo-wrapped component
ContentData.displayName = 'ContentData';

export default ContentData;
