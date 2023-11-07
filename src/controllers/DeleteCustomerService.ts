import { DeleteCustomerService } from "../services/DeleteCustomerService";

import { FastifyRequest, FastifyReply } from "fastify";

class DeleteCustomerController {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const deleteCustomerService = new DeleteCustomerService();

    await deleteCustomerService.execute({ id });

    reply.send("Customer deleted successfully");
  }
}

export { DeleteCustomerController };
