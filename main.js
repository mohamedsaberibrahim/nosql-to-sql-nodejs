// require('dotenv').config()
const noSqlUtils = require('./nosql/utils');
const sqlUtils = require('./sql/utils');
const mediator = require('./mediator');

async function main() {
    await noSqlUtils.initConnection();
    await sqlUtils.initConnection();

    const blogs = await noSqlUtils.getAllBlogs();
    await Promise.all(
        blogs.map(async (blogAsDocument) => {
            const blogAsRow = mediator.restructureDocumentToRow(blogAsDocument);
            await sqlUtils.upsertBlogAsRow(blogAsRow);
        })
    );

    await noSqlUtils.closeConnection();
    await sqlUtils.closeConnection();
}

main().then(() => {
    console.log("Finished restructuring blogs data successfully");
}).catch(err => {
    console.log(err);
});
