var users = [
    { id: '22003405', name: 'Nguyen Van Minh', level: 'DIAMOND' },
    { id: '22001234', name: 'Nguyen Tan Minh', level: 'GOLD' },
    { id: '22002995', name: 'Trinh Tran Phuong Tuan', level: 'BROZEN' },
    { id: '22009999', name: 'Tran The Trung', level: 'PLATINUM' }
]

var comments = [
    { id: '001', content: 'Anh JACK sao chưa ra MV vậy ạ? :((', user_id: '22001234' },
    { id: '002', content: 'Anh mới ra MV DƯỚI TÁN CÂY KHÔ HOA NỞ đó em ,\':)', user_id: '22002995' },
    { id: '003', content: 'MV hay quá anh ơi', user_id: '22001234' },
    { id: '004', content: 'Chắc có mình tui thấy thằng này hát như con c**', user_id: '22003405' },
    { id: '005', content: 'Theo các em, thế nào là hay?', user_id: '22009999' }
]

var getComments = () => {
    return new Promise((resolve, reject) => {
        resolve(comments)
        // reject('get \'comments\' data from database failure, check your internet!') 
    })
}

var getUsersByID = (userID) => {
    return new Promise((resolve, reject) => {
        var result = users.filter((users, index, origin) => {
            return userID.includes(users.id)
        })
        resolve(result)
    })
}

var commentsElement = document.querySelector('.comments-block')
var html = '<h1>Mô phỏng chức năng bình luận</h1>'

getComments()
    .then(commentList => {
        //=============================
        var commentUser = commentList.map((comments, index, origin) => {
            return comments.user_id
        })
        return getUsersByID(commentUser)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(data => {
        console.log(data);
        data.comments.forEach((comment) => {
            var user = data.users.find(user => {
                return user.id === comment.user_id
            })
            html += `<li><h4>(${user.level}) ${user.name}:</h4> Trả lời: ${comment.content}</li>`
        });
    })
    .catch(erorr => {
        html += 'Không có comment nào!'
        console.log(erorr);
    })
    .finally(() => {
        commentsElement.innerHTML = html
        console.log("End Session");
    })