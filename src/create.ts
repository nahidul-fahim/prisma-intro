import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // create single data
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@ph.com",
    //         role: UserRole.user
    //     }
    // });

    // create profile
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "This is my unique bio",
    //         userId: 1
    //     }
    // });

    // create category
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "App development"
    //     }
    // })


    // create post
    const createPost = await prisma.post.create({
        data: {
            title: "This is first post title",
            content: "First post content is here. And this is world-class content",
            authorId: 1,
            postCategory: {
                create: {
                    category: {
                        connect: {
                            id: 1
                        }
                    }
                }
            }
        }
    })

    console.log({ createPost });

}

main();