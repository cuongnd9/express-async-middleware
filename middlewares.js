const { giin } = require('giin')

const throwError = (req, res, next) => {
    throw new Error('This is an error')
}

const fetchData = async (req, res) => {
    const data = await giin({
        option: {
          url: 'https://graphqlzero.almansi.me/api'
        },
        query: `
          query {
            post(id: $id) {
              id
              title
              body
            }
          }
        `,
        variables: {
          id: 1
        }
      })
      const { post } = data
      res.json({
          post
      })
}

module.exports = {
    throwError,
    fetchData,
}