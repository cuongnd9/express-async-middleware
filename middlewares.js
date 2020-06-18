const { giin } = require('giin')

const deplay = () => Promise.resolve('🐛');

const throwError = async (req, res, next) => {
    // ---------------solution 1: next---------------
    // next(new Error('This is an error'))

    // ---------------solution 2: trycatch + next---------------
    // try {
    //     throw new Error('This is an error')
    // } catch (error) {
    //     next(error)
    // }

    try {
        const result = await deplay()
        console.log(result)
        throw new Error('This is an error')
    } catch (error) {
        next(error)
    }
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