import prismaClient from "../prisma";

interface updateCustomerProps {
  id: string;
  name?: string;
  email?: string;
}

class UpdateCustomerService {
  async execute({ id, name, email }: updateCustomerProps) {
    if (!id) {
      throw new Error("ID is required");
    }

    const customer = await prismaClient.customer.update({
      where: { id },
      data: { name, email },
    });

    return customer;
  }
}

export { UpdateCustomerService };
