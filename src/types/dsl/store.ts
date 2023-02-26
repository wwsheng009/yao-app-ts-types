export namespace YaoStore {
  // Store the kv-store setting
  export interface Store {
    name: string;
    description?: string;
    connector?: string;
    type?: string; // warning: type is deprecated in the future new version
    option?: { [key: string]: any };
  }
}
