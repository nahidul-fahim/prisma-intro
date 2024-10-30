import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // get all data from post table
    const result = await prisma.post.findMany();

    // find a data based on fields - findFirst
    const findFirst = await prisma.post.findFirst({
        where: {
            published: false
        }
    });

    // findFirst or throw error
    const findFirstOrError = await prisma.post.findFirstOrThrow({
        where: {
            id: 10
        }
    });

    // findUnique or throw error
    const findUniqueOrError = await prisma.post.findUniqueOrThrow({
        where: {
            id: 9
        }
    });

    console.log({findUniqueOrError})
}

main();