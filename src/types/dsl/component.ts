export namespace YaoComponent {
  export type ViewComponentEnum =
    | "A"
    | "Checkbox"
    | "Color"
    | "Image"
    | "Switch"
    | "Tag"
    | "Text"
    | "Tooltip";

  export type EditComponentEnum =
    | "Cascader"
    | "CheckboxGroup"
    | "CodeEditor"
    | "ColorPicker"
    | "DatePicker"
    | "Grant"
    | "Input"
    | "InputNumber"
    | "List"
    | "Mentions"
    | "Password"
    | "RadioGroup"
    | "RangePicker"
    | "RichText"
    | "Select"
    | "Table"
    | "TextArea"
    | "TimePicker"
    | "Tree"
    | "Upload";

  // DSL the component DSL
  export interface ViewComponentDSL {
    /**绑定字段名称，如不指定使用默认值 */
    bind?: string;
    /**组件名称，可用组件参考文档 https://yaoapps.com/components，public/开关的是远程组件*/
    type?: ViewComponentEnum | "public/xxx";
    /**数据数值计算 */
    compute?: Compute | string;
    /**控件属性，可参考antd控件 */
    props?: PropsDSL & {
      xProps?: {
        // 在字段名称前加 $ 前缀, 指定处理器名称和参数，自动将处理器解析为 API
        $remote?: {
          /**处理器 */
          process: string;
          /**请求参数绑定，可使用{{}}绑定记录结构 */
          query?: { [key: string]: any };
        };
        /**onchange 事件 */
        "$on:change"?: {
          /**处理器 */
          process: string;
          /**请求参数绑定，可使用{{}}绑定记录结构 */
          query?: { [key: string]: any };
        };
      };
    };
  }

  export interface EditComponentDSL {
    /**绑定字段名称，如不指定使用默认值 */
    bind?: string;
    /**组件名称，可用组件参考文档 https://yaoapps.com/components，public/开关的是远程组件*/
    type?: EditComponentEnum | "public/xxx";
    /**数据数值计算*/
    compute?: Compute | string;
    /**控件属性，可参考antd控件 */
    props?: {
      xProps?: {
        /**控件搜索回调api */
        $search?: {
          /**处理器 */
          process: string;
          /**请求参数绑定，可使用{{}}绑定记录结构 */
          query?: { [key: string]: any };
        };
        // 在字段名称前加 $ 前缀, 指定处理器名称和参数，自动将处理器解析为 API
        $remote?: {
          /**处理器 */
          process: string;
          /**请求参数绑定，可使用{{}}绑定记录结构 */
          query?: { [key: string]: any };
        };
        /**onchange 事件 */
        "$on:change"?: {
          /**处理器 */
          process: string;
          /**请求参数绑定，可使用{{}}绑定记录结构 */
          query?: { [key: string]: any };
        };
      };
    } & PropsDSL;
  }

  // Actions the actions
  export type Actions = ActionDSL[];

  // Instances the Instances
  export type LayoutColumns = LayoutColumnDSL[];

  // InstanceDSL the component instance DSL
  export interface LayoutColumnDSL {
    /**字段标称名Label */
    name?: string;
    /**宽度 */
    width?: any;
    /**高度 */
    height?: any;
    /**固定 */
    fixed?: boolean; // for widget table
    /**配置rows */
    rows?: LayoutColumnDSL[];
  }

  // ActionsExport the export actions
  // export interface ActionsExport {
  //   /**类型 */
  //   type?: string;
  //   /**组件xpath */
  //   xpath: string;
  //   /**操作 */
  //   actions?: Actions;
  // }

  export type aliasActionDSL = ActionDSL;

  // ActionDSL the component action DSL
  /**可用自定义操作 */
  export interface ActionDSL {
    /**唯一标识 */
    id?: string;
    /**标题 */
    title?: string;
    /**宽度 */
    width?: number;
    /**图标 */
    icon?: string;
    /**样式 */
    style?: string;
    xpath?: string;
    /**分隔线 */
    divideLine?: boolean;
    /**Syntactic sugar ["add", "edit", "view"]*/
    hide?: string[]; //
    /**增加数据时显示 */
    showWhenAdd?: boolean;
    /**查看数据时显示 */
    showWhenView?: boolean;
    /**编辑时隐藏 */
    hideWhenEdit?: boolean;
    /**属性 */
    props?: PropsDSL;
    /**确认提示 */
    confirm?: ConfirmActionDSL;
    /**用户操作 */
    action?: ActionNodes;
    /**满足条件时禁用 */
    disabled?: DisabledDSL;
  }

  // DisabledDSL the action disabled
  export interface DisabledDSL {
    /**绑定字段 */
    field?: string; //  Syntactic sugar -> bind
    /**绑定字段 */
    bind?: string;
    /**string | array<string>  Syntactic sugar eq -> value */
    eq?: any; //
    /**string | array<string>  Syntactic sugar equal -> value */
    equal?: any;
    /**string | array<string> */
    value?: any;
  }

  export type aliasActionNodes = ActionNode[];

  // ActionNodes the action nodes
  export type ActionNodes = ActionNode[];

  // ActionNode the action node
  export interface ActionNode {
    /**操作名称 */
    name?: string;
    /**操作类型 */
    type?: "Common.closeModal" | "Form.delete" | "Form.submit" | string;
    /**操作携带的信息 */
    payload?: {
      /**关联模型 */
      model?: string;
      /**关联Form */
      Form?: PropsDSL;
    } & PropsDSL;

    //[key: string]: any;
  }

  // ConfirmActionDSL action.confirm
  export interface ConfirmActionDSL {
    /**标题 */
    title?: string;
    /**描述 */
    desc?: string;
  }

  // PropsDSL component props
  export type PropsDSL = {
    [key: string]: any;
  };

  /**
   *
   * 数据数值计算
   * 参数表:
   *   $C(row) 当前行数据,
   *   $C(value) 当前行当前字段数值,
   *   $C(props) 当前组件 props,
   *   $C(type) 当前组件 type,
   *   $C(id) 当前 Widget ID
   *   'hello' 字符串常量
   *   1024 整形常量
   *   0.618 浮点型常量
   */
  export interface Compute {
    /**如果compute类型等于字符串，会自动的转换成处理器名，并给处理器传入4个参数，第一个参数是字段的值。*/
    process: string;
    /**使用表达式，引用传入数据的结构，默认参数表: ["$C(value)", "$C(props)", "$C(type)", "$C(id)"] */
    args?: CArg[] | string[];
  }
  // export type ComputeArgs = CArg[] | string[];
  // computeAlias for JSON UnmarshalJSON
  export type computeAlias = Compute;

  // CArg compute interface{}
  /**自定义compute处理器的参数表 */
  export interface CArg {
    /**是否表达式，如果是表达式，会使用key对结构进行绑定引用*/
    isExp: boolean;
    /**在isExp=true时生效，使用key引用model结构中的字段名*/
    key: string;
    /**在isExp=false时生效，可以是任何对象。如果是字符串，可以使用::作为前缀表示进行格式化输出*/
    value: any;
  }

  // ComputeHanlder computeHanlder
  // export type ComputeHanlder = Function;

  // CloudPropsDSL the cloud props
  export interface CloudPropsDSL {
    xpath?: string;
    /**类型 */
    type?: string;
    /**名称 */
    name?: string;
    /**处理器 */
    process?: string;
    /**处理器参数 */
    query?: { [key: string]: any };
  }
}
export default YaoComponent;
