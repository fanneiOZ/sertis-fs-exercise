import { injectable } from "tsyringe";
import { AuthorizeUserService } from "../../../cores/authentication/services/authorize-user.service";
import { VerifyUserService } from "../../../cores/authentication/services/verify-user.service";
import { Controller } from "../../../libs/common/controller";
import { ContentType } from "../../../libs/common/decorators/content-type.decorator";
import { DI } from "../../../libs/common/decorators/di-decorator";
import { AuthorizeRequestQuery } from "./request.interfaces";

@DI
@injectable()
export class AuthorizeUserController extends Controller {
  constructor(
    private userAuthorizer: AuthorizeUserService,
    private verifyUser: VerifyUserService,
  ) {
    super()
  }

  @ContentType("application/json")
  protected async handleRequest(
    body: unknown = undefined,
    query?: AuthorizeRequestQuery
  ): Promise<void> {
    const claims = this.userAuthorizer.execute(query.token)

    this.resBody = await this.verifyUser.execute(claims)
  }
}
