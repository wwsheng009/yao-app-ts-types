namespace YaoComponent {
  // DSL the component DSL
  export interface ComponentDSL {
    bind?: string;
    type?: string;
    compute?: Compute;
    props?: PropsDSL;
  }

  // Actions the actions
  export type Actions = ActionDSL[];

  // Instances the Instances
  export type Instances = InstanceDSL[];

  // InstanceDSL the component instance DSL
  export interface InstanceDSL {
    name?: string;
    width?: any;
    height?: any;
    fixed?: boolean; // for widget table
    rows?: InstanceDSL[];
  }

  // ActionsExport the export actions
  export interface ActionsExport {
    type?: string;
    xpath: string;
    actions?: Actions;
  }

  export type aliasActionDSL = ActionDSL;

  // ActionDSL the component action DSL
  export interface ActionDSL {
    id?: string;
    title?: string;
    width?: number;
    icon?: string;
    style?: string;
    xpath?: string;
    divideLine?: boolean;
    hide?: string[]; // Syntactic sugar ["add", "edit", "view"]
    showWhenAdd?: boolean;
    showWhenView?: boolean;
    hideWhenEdit?: boolean;
    props?: PropsDSL;
    confirm?: ConfirmActionDSL;
    action?: ActionNodes;
    disabled?: DisabledDSL;
  }

  // DisabledDSL the action disabled
  export interface DisabledDSL {
    field?: string; //  Syntactic sugar -> bind
    bind?: string;
    eq?: any; // string | array<string>  Syntactic sugar eq -> value
    equal?: any; // string | array<string>  Syntactic sugar equal -> value
    value?: any; // string | array<string>
  }

  export type aliasActionNodes = ActionNode[];

  // ActionNodes the action nodes
  export type ActionNodes = ActionNode[];

  // ActionNode the action node
  export interface ActionNode {
    [key: string]: any;
  }

  // ConfirmActionDSL action.confirm
  export interface ConfirmActionDSL {
    title?: string;
    desc?: string;
  }

  // PropsDSL component props
  export type PropsDSL = { [key: string]: any };

  // Compute process
  export interface Compute {
    process: string;
    args?: CArg[];
  }

  // computeAlias for JSON UnmarshalJSON
  export type computeAlias = Compute;

  // CArg compute interface{}
  export interface CArg {
    isExp: boolean;
    key: string;
    value: any;
  }

  // ComputeHanlder computeHanlder
  export type ComputeHanlder = Function;

  // CloudPropsDSL the cloud props
  export interface CloudPropsDSL {
    xpath?: string;
    type?: string;
    name?: string;
    process?: string;
    query?: { [key: string]: any };
  }
}
export default YaoComponent;
