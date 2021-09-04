
const restructureDocumentToRow = (blogAsDocument) => {
    const blogAsRow = {
        mongo_id: blogAsDocument._id,
        title: blogAsDocument.title,
        author: blogAsDocument.author,
        body: blogAsDocument.body,
    };
    return blogAsRow;
}

module.exports = { restructureDocumentToRow }
