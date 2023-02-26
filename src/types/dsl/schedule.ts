export namespace YaoSchedule {
  export interface Schedule {
    name: string;
    process?: string;
    schedule: string;
    task?: string;
    args?: any[];
    // id?: cron.EntryID;
    // enabled?: boolean;
    // cron?: cron.Cron;
  }
}
