import './Message.style.less';

import { message as AntMessage } from 'antd';
import { MessageArgsProps as AntMessageProps } from 'antd';

export interface MessageContentWithUndoProps {
  message: React.ReactNode;
  callback: (e: React.MouseEvent<HTMLDivElement>) => void;
  buttonLabel?: string;
}
interface MessageProps extends AntMessageProps {
  className?: string;
}

const { success, error, info, warning, loading, useMessage } = AntMessage;

const message = ({ className = '', ...props }: MessageProps) => {
  const options = {
    className: `gf-message ${className}`,
    ...props,
  };

  return AntMessage.config(options);
};

message.success = success;
message.error = error;
message.info = info;
message.warning = warning;
message.loading = loading;
message.useMessage = useMessage;
export default message;
