import * as React from 'react';
import classNames from 'classnames';

import Logo from './logo.svg';

const prefixCls = 'alu-header';

interface Env {
  name: string,
  dev: string,
  test: string,
  prod: string,
  [key: string]: string; 
}

interface HeaderProps {
  logoCls?: string;
  logoStyle?: React.CSSProperties;
  logoUrl?: string;
  contentCls?: string;
  right?: string | React.ReactNode;
  rightCls?: string;
  env: string; // 环境变量，用于区分每个站不同环境的跳转链接
  menus: Array<Env>
}

class Header extends React.Component<HeaderProps,{}> {
  static defaultProps = {
    env: 'dev',
    logoUrl: Logo,
    menus: [
      {
        name: '医生站',
        dev: '//dev.ys.alu120.com',
        test: '//test.ys.alu120.com',
        prod: '//ys.alu120.com',
      },
      {
        name: '收银站',
        dev: '//dev.sy.alu120.com',
        test: '//test.sy.alu120.com',
        prod: '//sy.alu120.com',
      },
      {
        name: '护士站',
        dev: '//dev.hs.alu120.com',
        test: '//test.hs.alu120.com',
        prod: '//hs.alu120.com',
      },
      {
        name: '药房站',
        dev: '//dev.yf.alu120.com',
        test: '//test.yf.alu120.com',
        prod: '//yf.alu120.com',
      },
      {
        name: '诊所站',
        dev: '//dev.zs.alu120.com',
        test: '//test.zs.alu120.com',
        prod: '//zs.alu120.com',
      }
    ]
  }
  render() {
    const { right, rightCls, logoCls, logoStyle, logoUrl, contentCls, env, menus } = this.props;

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
            src={logoUrl}
          />
        </div>
        <div className={classNames({
          [`${prefixCls}-content`]: true,
          [`${contentCls}`]: !!contentCls,
        })}>
          <div className={`${prefixCls}-menu`}>
            {
              menus.map(item => (
                <span 
                  key={item.name}
                  className={classNames({
                    [`${prefixCls}-menu-item`]: true,
                    [`${prefixCls}-menu-item-active`]: false,
                  })}
                >
                  <a
                  target="_blank"
                  rel="noopener noreferrer" 
                  href={item[`${env}`]}
                  >
                    {item.name}
                  </a>
                </span>
              ))
            }
          </div>
        </div>
        {!!right && (
          <div className={classNames({
            [`${prefixCls}-right`]: true,
            [`${rightCls}`]: !!rightCls,
          })}>
            {
              right
            }
          </div>
        )}
      </div>
    );
  }
}

export default Header;
