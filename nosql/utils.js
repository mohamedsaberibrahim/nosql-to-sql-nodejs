const mongoose = require('mongoose');
const BlogAsDocument = require('./schema');

const initConnection = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    await seedBlogs(5000);
};

const closeConnection = async () => {
    await mongoose.disconnect();
};

const seedBlogs = async (nBlogs) => {
    let blogs = [];

    for (let i = 1; i <= nBlogs; i++) {
        const blog = {
            title: `title-${i}`,
            author: `author-${i}`,
            body: `body-${i}`,
        };
        
        blogs.push(blog);
    }

    BlogAsDocument.insertMany(blogs).then(() => { 
        console.log("Seeding data is inserted!");
    }).catch((error) => { 
        console.log(error);
    });
}

const getAllBlogs = async () => {
    const blogs = await BlogAsDocument.find();
    return blogs;
}

module.exports = {
    initConnection, 
    seedBlogs,
    getAllBlogs, 
    closeConnection
};
