import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // create single data
    const result = await prisma.post.create({ // here 'post' is a database table name and 'create' is a function
        data: {
            title: "This is post title 2",
            content: "This is another post content...",
            authorName: "Nahidul Islam"
        }
    });

    // create many data
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "This is post title 4",
                content: "This is another post content...",
                authorName: "Nahidul Islam"
            },
            {
                title: "This is post title 5",
                content: "This is another post content...",
                authorName: "Nahidul Islam"
            },
            {
                title: "This is post title 6",
                content: "This is another post content...",
                authorName: "Nahidul Islam"
            }
        ]
    });

    console.log(createMany)
}

main();