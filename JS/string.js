const path = "/users/download/index.html"

const isHtml = function(x){
    if (path.slice(path.length-5, path.length) == ".html") {
        return true
    } else {
        return false
    }
}

console.log(isHtml(path))
