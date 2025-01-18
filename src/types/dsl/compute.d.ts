export namespace YaoCompute {
  export const View = 0;
  export const Edit = 1;
  export const Filter = 2;

  export interface Computable {
    Computes: Maps;
  }

  export interface Maps {
    Edit: { [key: string]: Unit[] };
    View: { [key: string]: Unit[] };
    Filter: { [key: string]: Unit[] };
  }

  export interface Unit {
    Name: string;
    Kind: number;
  }
}
export default YaoCompute;
