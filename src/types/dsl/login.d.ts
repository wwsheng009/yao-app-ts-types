export namespace YaoLogin {
  // {
  //   "name": "::Admin Login",
  //   "action": {
  //     "process": "yao.login.Admin",
  //     "args": [":payload"]
  //   },
  //   "layout": {
  //     "entry": "/x/Chart/dashboard",
  //     "captcha": "yao.utils.Captcha",
  //     "cover": "/assets/images/login/cover.svg",
  //     "slogan": "::Make Your Dream With Yao App Engine",
  //     "site": "https://yaoapps.com"
  //   }
  // }

  export interface LoginDSL {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**唯一标识 */
    // id?: string;
    /**登录界面名称, 支持多语言 */
    name?: string;
    /**自定义用户登录逻辑处理器，默认是yao.login.Admin */
    action?: ActionDSL;
    /**页面布局定义。设置登录界面封面、登录后跳转路由地址等 */
    layout?: LayoutDSL;
    /**第三方登录 */
    thirdPartyLogin?: ThirdPartyLoginDSL[];
    $schema?: string;
  }

  export interface ActionDSL {
    /**用户登录处理逻辑 */
    process?: string;
    /**登录处理器参数，参考http 接口的传参数，可使用:payload引用传入参数*/
    args?: any[];
  }

  export interface LayoutDSL {
    /**成功登录后，转向此地址。**注意: 不含管理后台路由前缀** */
    entry?: string;
    /**自定义动态认证码生成处理器，默认是yao.utils.Captcha*/
    captcha?: string;
    /**登录界面封面图片, 图片相对地址。可将图片放到应用公开目录 `public` ，例如: `/data/app/public/images/cover.png`, 填写的地址为 `/images/cover.png` */
    cover?: string;
    /**登录界面广告语，支持多语言 */
    slogan?: string;
    /**登录界面封面图片下方链接地址 */
    site?: string;
  }

  export interface ThirdPartyLoginDSL {
    /**按钮标题 */
    title?: string;
    /**第三方登录跳转地址 */
    href?: string;
    /**按钮前缀图标 */
    icon?: string;
    /**是否在浏览器打开新标签 */
    blank?: boolean;
  }
}
export default YaoLogin;
