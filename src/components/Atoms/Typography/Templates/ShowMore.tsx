import React, { useState } from 'react';

import { Typography } from '../../../index';

const { Paragraph } = Typography;

interface ShowMoreProps {
  textArray: [];
  expandTextDisplay?: string;
}

const ShowMore = ({ textArray, expandTextDisplay = 'more' }: ShowMoreProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const expandText = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="cc-show-more">
      {textArray.map((paragraph, i) => {
        if (i === 0) {
          return (
            <Paragraph
              key={i}
              ellipsis={
                textArray.length >= 1
                  ? {
                      rows: 2,
                      expandable: true,
                      symbol: expandTextDisplay,
                      onExpand: expandText,
                    }
                  : false
              }
            >
              {paragraph}
              {textArray.length >= 1 && isCollapsed && (
                <>
                  <span aria-hidden="true">...</span>
                  <a
                    href="#/"
                    className="ant-typography-expand"
                    aria-label="Expand"
                    onClick={expandText}
                  >
                    more
                  </a>
                </>
              )}
            </Paragraph>
          );
        }
        return (
          <Paragraph className={`${isCollapsed && 'hidden'}`} key={i}>
            {paragraph}
          </Paragraph>
        );
      })}
    </div>
  );
};

export default ShowMore;

// textArray.map((paragraph, i) => {
//         // i=== 0(
//         <Paragraph
// ellipsis={
//   true ? { rows: 2, expandable: true, symbol: 'more' } : false
// }
//           >
//             {paragraph}
//           </Paragraph>
//       // ):()}
