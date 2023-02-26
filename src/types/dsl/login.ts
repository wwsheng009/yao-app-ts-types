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
    id?: string;
    name?: string;
    action?: ActionDSL;
    layout?: LayoutDSL;
    thirdPartyLogin?: ThirdPartyLoginDSL[];
    $schema?: string;
  }

  export interface ActionDSL {
    process?: string;
    args?: string[];
  }

  export interface LayoutDSL {
    entry?: string;
    captcha?: string;
    cover?: string;
    slogan?: string;
    site?: string;
  }

  export interface ThirdPartyLoginDSL {
    title?: string;
    href?: string;
    icon?: string;
    blank?: boolean;
  }
}
export default YaoLogin;
