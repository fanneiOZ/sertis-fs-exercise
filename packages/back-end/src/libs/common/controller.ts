import { NextFunction, Request, Response } from "express";
import {container} from "tsyringe";
import {AuthorizeUserService} from "../../cores/authentication/services/authorize-user.service";
import { HttpException } from "./http-exception";

export abstract class Controller {
  protected resBody: unknown;

  protected params: Map<string, string>;

  private incomingHeaders: Map<string, unknown>;

  private additionalResponseHeaders: Map<string, string>;

  private status: number;

  private guard: boolean = false

  protected context: Readonly<string | object> | undefined

  protected setHeader(key: string, value: string): void {
    if (this.additionalResponseHeaders === undefined) {
      this.additionalResponseHeaders = new Map();
    }

    this.additionalResponseHeaders.set(key, value);
  }

  protected getHeader(key: string): unknown {
    return this.incomingHeaders.get(key)
  }

  async handle<T extends Request, K extends Response>(
    req: T,
    res: K,
    next?: NextFunction
  ): Promise<void> {
    this.incomingHeaders = new Map()

    Object.entries(req.headers).map(([key, value]) => {
      this.incomingHeaders.set(key, value)
    })

    this.params = new Map<string, string>();
    Object.entries(req.params).forEach(([key, value]) => {
      this.params.set(key, value);
    });

    try {
      await this.handleRequest(req.body, req.query);

      for (const [key, value] of this.additionalResponseHeaders.entries()) {
        res.setHeader(key, value);
      }
      res.status(this.status ?? 200);
    } catch (e) {
      const exception =
        e instanceof HttpException
          ? e
          : new HttpException(500, e.name, e.message).withCause(e);

      res.status(exception.errorCode);
      this.resBody = { error: exception.name, msg: e.message };
    } finally {
      res.send(this.resBody ?? undefined);
    }
  }

  protected setStatus(status: number): void {
    this.status = status;
  }

  protected enableGuard(): void {
    this.guard = true
  }

  protected abstract async handleRequest(
    body?: unknown,
    query?: unknown
  ): Promise<void>;
}
