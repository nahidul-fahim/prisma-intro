import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({
        data: {
            title: "This is post title 2",
            content: "This is another post content...",
            authorName: "Nahidul Islam"
        }
    });

    console.log(result)

    // get all data from post table
    // const result = await prisma.post.findMany();
    // console.log(result);
}

main();