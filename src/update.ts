import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {

    // single update
    const singleUpdate = await prisma.post.update({
        where: {
            id: 7
        },
        data: {
            title: "Title 5",
        }
    });


    // update many
    const updateMany = await prisma.post.updateMany({
        where: {
            title: "Title 2"
        },
        data: {
            published: true
        }
    })

    // console.log(updateMany)
};

updates();