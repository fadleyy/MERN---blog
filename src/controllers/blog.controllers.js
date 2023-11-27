exports.createBlog = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image
    const body = req.body.body;

    const result = {
        message: "create blog Succsesfully",
        data: {
            uid: 1,
            title: title,
            image: "image.png",
            body: body
        }
    }
    res.status(201).json(result);
    next()
}