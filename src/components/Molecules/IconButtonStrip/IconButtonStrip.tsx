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
  const [messageApi, contextHolder] = message.useMessage();
  const clickAction = (item: ButtonData) => {
    const content4copy = item.copyContent;

    navigator.clipboard.writeText(content4copy);
    messageApi.open({
      type: 'success',
      content: `${content4copy} copied to your clipboard!`,
      duration: 20,
    });
  };
  return (
    <div className="cc-icon-button-strip">
      {contextHolder}
      {data &&
        data.map((item, i) => (
          <Icon
            key={i}
            fontIcon={item.buttonIcon}
            popOverTitle={item.buttonTitle}
            popOverContent={
              <>
                <Link href={item.buttonUrl} target="_blank">
                  {item.popOverContent}
                </Link>
                <p> Click to copy!</p>
              </>
            }
            onClick={() => {
              clickAction(item);
            }}
          />
        ))}
    </div>
  );
};

export default IconButtonStrip;
