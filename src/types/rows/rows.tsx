export type Row = {
    level: number;
    id: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    type: "row" | "level";
    editable: boolean;
    parentId:number|null
};

export type Rows = {
    id: number;
    overheads: number;
    rowName: string;
    mimExploitation: number;
    estimatedProfit: number;
    equipmentCosts: number;
    salary: number;
    mainCosts: number;
    total: number;
    supportCosts: number;
    machineOperatorSalary: number;
    materials: number;
    child: (
        | {
              overheads: number;
              rowName: string;
              mimExploitation: number;
              estimatedProfit: number;
              equipmentCosts: number;
              salary: number;
              mainCosts: number;
              total: number;
              supportCosts: number;
              machineOperatorSalary: number;
              materials: number;
              id: number;
              child: {
                  overheads: number;
                  rowName: string;
                  mimExploitation: number;
                  estimatedProfit: number;
                  equipmentCosts: number;
                  salary: number;
                  mainCosts: number;
                  total: number;
                  supportCosts: number;
                  machineOperatorSalary: number;
                  materials: number;
                  id: number;
                  child: any[];
              }[];
          }
        | {
              overheads: number;
              rowName: string;
              mimExploitation: number;
              estimatedProfit: number;
              equipmentCosts: number;
              salary: number;
              mainCosts: number;
              total: number;
              supportCosts: number;
              machineOperatorSalary: number;
              materials: number;
              id: number;
              child: any[];
          }
    )[];
};
