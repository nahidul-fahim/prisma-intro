import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({ // here 'post' is a database table name and 'create' is a function
        data: {
            title: "This is post title 2",
            content: "This is another post content...",
            authorName: "Nahidul Islam"
        }
    });

    console.log(result)
}

main();