import prismaClient from "../prisma";

interface DeleteProps {
  id: string;
}

class DeleteCustomerService {
  execute({ id }: DeleteProps) {
    if (!id) {
      throw new Error("ID is required");
    }

    const customer = prismaClient.customer.delete({
      where: { id },
    });

    return customer;
  }
}

export { DeleteCustomerService };
