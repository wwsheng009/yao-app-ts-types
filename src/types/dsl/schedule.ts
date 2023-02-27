export namespace YaoSchedule {
  export interface Schedule {
    /**名称 */
    name: string;
    /**处理器，处理器与task二选一*/
    process?: string;
    /**计划定时执行的时间，写法和 Linux 的 crontab 是一样的*/
    schedule: string;
    /**任务名称，使用task.json定义的任务*/
    task?: string;
    /**处理器参数 */
    args?: any[];
    // id?: cron.EntryID;
    // enabled?: boolean;
    // cron?: cron.Cron;
    $schema?: string;
  }
}
