import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerService } from "./services/ListCustomerService";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";
export async function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerService().execute();
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.put("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateCustomerController().execute(request, reply);
  });
}
