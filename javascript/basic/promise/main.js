var users = [
    {
        id: 1,
        name: 'Thanh Van'
    },
    {
        id: 2,
        name: 'Van Minh'
    },
    {
        id: 3,
        name: 'Jack'
    }
]

var comments = [
    {
        id: 1,
        content: 'Anh Minh chua ra video :(',
        user_id: 1
    },
    {
        id: 2,
        content: 'Vua ra xong em oi ^^',
        user_id: 2
    },
    {
        id: 3,
        content: 'Em cam on anh',
        user_id: 1
    },
    {
        id: 4,
        content: 'Không có chi em ,\':)',
        user_id: 2
    }
]

// 1. Lấy comments

// 2. Từ comments lấy ra userID
//    Từ userID lấy ra User tương ứng

// Fake API
var getComments = () => {
    return new Promise((resolve, reject) => {
        resolve(comments)
    })
}

var getUsersByID = (usersID) => {
    return new Promise((resolve, reject) => {
        var result = users.filter((user, index, array) => {
            return usersID.includes(user.id)
        })
        resolve(result)
    })
}

getComments()
    .then((comments) => {
        var userID = comments.map((user, index, array) => {
            return user.user_id
        })
        return getUsersByID(userID)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        console.log(data)

        var ulElement = document.querySelector('#comment-block')
        var html = ''

        data.comments.forEach((comment) => {
            var user = data.users.find(user => {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        ulElement.innerHTML = html
    })
