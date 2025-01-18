import type { XgenComponent as Component } from "@/types/xgen";

export declare namespace Remote {
  interface XProps {
    remote?: Component.Request;
    search?: Component.Request & { key: string };
  }

  interface IProps extends Component.PropsEditComponent {
    xProps: XProps;
  }
}
