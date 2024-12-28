import express from 'express';
const app = express ();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

app.get('/' , (req ,res ) => {
    res.send ('Hello World');
})

async function insertData(email: string) {
    const res = await prisma.user.create({
        data : {
            email: email
        }
    })
    console.log(res);
}

insertData("notcodesid@gmail.com")

app.listen(8080 , () => {
    console.log('Server is running on port 8080');
})
