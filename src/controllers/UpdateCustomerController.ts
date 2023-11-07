import { UpdateCustomerService } from "../services/UpdateCustomerService";

import { FastifyRequest, FastifyReply } from "fastify";

class UpdateCustomerController {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { name, email } = request.body as { name: string; email: string };

    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({ id, name, email });

    reply.send(customer);
  }
}

export { UpdateCustomerController };
