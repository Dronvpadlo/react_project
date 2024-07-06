const baseUrl = 'https://dummyjson.com'

const urls = {
    usersUrl: {
        all: '/users',
        withPosts: (id: number)=> '/users/' + id + '/posts'

    },
    postsUrl:{},
    commentsUrl:{}
}

export {urls, baseUrl}