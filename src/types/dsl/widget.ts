export namespace YaoCustomWidget {
  // gou/widget/types.go
  export interface Widget {
    // name: string;
    // path: string;
    label?: string;
    description?: string;
    version?: string;
    root?: string;
    extension?: string;
    modules?: string[];
    $schema?: string;
  }
}
