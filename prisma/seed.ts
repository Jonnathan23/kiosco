import { categories } from "./data/category";
import { products } from "./data/products";
import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.category.createMany({ data: categories });
        await prisma.product.createMany({ data: products });
        console.log("Seed completed.");
    } catch (error) {
        console.error(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });