export namespace YaoTask {
  // TaskOption the task option
  /**并发任务*/
  export interface Task {
    /**任务名称*/
    name: string;
    /**该task绑定的处理器，必须配置*/
    process: string;
    /**作业对列大小，默认1024*/
    size?: number;
    /**指定进程数,默认是1*/
    worker_nums?: number;
    /**重试间隔*/
    attempt_after?: number;
    /**失败重试次数*/
    attempts?: number;
    /**超时时间，秒钟，默认300*/
    timeout?: number;
    event: {
      /**生成任务唯一 id的处理器*/
      next?: string;
      /**添加任务时触发的处理器*/
      add?: string;
      /**添加任务时触发的处理器*/
      success?: string;
      /**任务失败后触发处理器*/
      error?: string;
      /**任务处理中调用处理器*/
      progress?: string;
    };
  }
}
