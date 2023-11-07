import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

export async function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world", stateCode: 200 };
  });
}
