import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";

export async function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world", stateCode: 200 };
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );
}
