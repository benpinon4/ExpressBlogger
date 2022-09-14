const validateBlogData = (blogData) => {


if(blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length >= 40){
    return {
        isValid: false,
        message: "Title is required and must be a string and no longer than 40 characters"
    }
}

if(blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length >= 40){
    return {
        isValid: false,
        message: "Author is required and must be a string and no longer than 40 characters"
    }
}

if(blogData.text === undefined || typeof(blogData.text) !== "string"){
    return {
        isValid: false,
        message: "The text field is required and must be a string"
    }
}

return {
    isValid: true
}
}

module.exports = {
    validateBlogData,
}