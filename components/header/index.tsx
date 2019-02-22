import * as React from 'react';
import classNames from 'classnames';

import Logo from './logo.svg';

const prefixCls = 'alu-header';

interface HeaderProps {
  logoCls?: string;
  logoStyle?: React.CSSProperties;
  contentCls?: string;
  right?: string | React.ReactNode;
  rightCls?: string;
}

class Header extends React.Component<HeaderProps,{}> {
  constructor(props:HeaderProps) {
    super(props);
  }
  render() {
    const { right, rightCls, logoCls, logoStyle, contentCls } = this.props;
    return (
      <div className={`${prefixCls}`}>
        <div 
          style={logoStyle}
          className={classNames({
            [`${prefixCls}-logo`]: true,
            [`${logoCls}`]: !!logoCls,
          })}
        >
          <img 
            src={Logo}
          />
        </div>
        <div className={classNames({
          [`${prefixCls}-content`]: true,
          [`${contentCls}`]: !!contentCls,
        })}>
          <div className={`${prefixCls}-menu`}>
            <span className={`${prefixCls}-menu-item`}>医生站</span>
            <span className={`${prefixCls}-menu-item`}>收银站</span>
            <span className={`${prefixCls}-menu-item ${prefixCls}-menu-item-active`}>护士站</span>
            <span className={`${prefixCls}-menu-item`}>药房站</span>
            <span className={`${prefixCls}-menu-item`}>诊所站</span>
          </div>
        </div>
        <div className={classNames({
          [`${prefixCls}-right`]: true,
          [`${rightCls}`]: !!rightCls,
        })}>
          {
            right
          }
        </div>
      </div>
    );
  }
}

export default Header;
