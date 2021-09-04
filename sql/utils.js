
const {Sequelize} = require('sequelize');
const BlogAsRow = require('./model');


const sequelize = new Sequelize(process.env.MYSQL_CONNECTION_STRING);

const initConnection = async () => {
    await defineBlogModel(sequelize);
    await sequelize.authenticate();
    await sequelize.sync();
}

const defineBlogModel = (sequelize) => {
    return sequelize.define('Blog', BlogAsRow);
}

const upsertBlogAsRow = async (blogAsRow) => {
    return sequelize.models.Blog.upsert(blogAsRow);
}

const closeConnection = async () => {
    await sequelize.close();
};

module.exports = {
    initConnection,
    upsertBlogAsRow,
    closeConnection,
}
