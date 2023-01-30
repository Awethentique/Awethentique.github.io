import React from 'react';
import { Icon, Typography, message } from '../../index';
import './IconButtonStrip.less';

export type ButtonData = {
  buttonIcon: string;
  buttonTitle: string;
  buttonUrl: string;
  popOverContent: string;
  copyContent: string;
};

interface IconButtonStripProps {
  data?: ButtonData[];
}

const { Link } = Typography;

const IconButtonStrip = ({ data }: IconButtonStripProps) => {
  return (
    <div className="cc-icon-button-strip">
      {data &&
        data.map((item, i) => (
          <Icon
            key={i}
            fontIcon={item.buttonIcon}
            popOverTitle={item.buttonTitle}
            popOverContent={
              <>
                <Link
                  href={item.buttonUrl}
                  target="_blank"
                  copyable={{ text: item.copyContent }}
                >
                  {item.popOverContent}
                </Link>
              </>
            }
          />
        ))}
    </div>
  );
};

export default IconButtonStrip;
