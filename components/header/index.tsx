import * as React from 'react';
import Logo from './logo';

const prefixCls = 'alu-header';

class Header extends React.Component {
  render() {
    return (
      <div className={`${prefixCls}`}>
        <Logo />
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-menu`}>
            <span className={`${prefixCls}-menu-item`}>医生站</span>
            <span className={`${prefixCls}-menu-item`}>收银站</span>
            <span className={`${prefixCls}-menu-item ${prefixCls}-menu-item-active`}>护士站</span>
            <span className={`${prefixCls}-menu-item`}>药房站</span>
            <span className={`${prefixCls}-menu-item`}>诊所站</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
