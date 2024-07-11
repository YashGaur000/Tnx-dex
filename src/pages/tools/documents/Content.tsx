import React, { memo } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

const Content = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.text};
  padding: 4%;
  line-height: 35.88px;

  font-family: ${({ theme }) => theme.fonts.main};

  h1 {
    font-size: 40px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 30px;
  }
  ul,
  p {
    margin: 1rem 0;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  ,
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th,
  td {
    padding: 8px 12px;
    border: 1px solid;
    text-align: left;
  }

  .core-section {
    border: 1px solid #ccc;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    ul {
      padding: 10px;
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
