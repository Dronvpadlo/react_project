const baseUrl = 'https://dummyjson.com'

const urls = {
    usersUrl: {
        all: '/users',
        singleUser: (id: number) => '/users/' + id,
        withPosts: (id: number)=> '/users/' + id + '/posts'

    },
    postsUrl:{},
    commentsUrl:{}
}

export {urls, baseUrl}