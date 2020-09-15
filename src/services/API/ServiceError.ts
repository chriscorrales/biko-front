class ServiceError<T extends any> extends Error {
  public readonly ignoreLog: boolean;

  public readonly metadata: T;

  public readonly code: string;

  public readonly error: string;

  public isServiceError = true;

  constructor(message: string, metadata: T, ignoreLog: boolean = true) {
    super(message);
    this.message = message;
    this.error = message;
    this.metadata = metadata;

    this.code = (this.metadata as any)?.response?.data?.code;
    this.ignoreLog = ignoreLog;
  }
}

export default ServiceError;
