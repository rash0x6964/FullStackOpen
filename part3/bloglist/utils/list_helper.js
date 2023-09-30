const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const blog = blogs.reduce(
    (res, item) => {
      return (res = item.likes >= res.likes ? item : res)
    },
    { likes: -1 }
  )

  return blog.likes === -1 ? {} : blog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
