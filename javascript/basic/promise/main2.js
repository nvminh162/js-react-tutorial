var users = [
    { id: 1, name: 'Lam Le' },
    { id: 2, name: 'Son Dang' },
    { id: 3, name: 'SOMEBODY' }
];
var comments = [
    { id: 1, user_id: 1, content: 'Anh Son chua ra video' },
    { id: 2, user_id: 2, content: 'Vua ra xong em oi' },
    { id: 3, user_id: 1, content: 'Cam on anh' },
];

var getUsers = new Promise(function (resolve) {
    resolve(users);
});
var getComments = new Promise(function (resolve) {
    resolve(comments);
});
var dataHTML = Promise.all([getUsers, getComments]);
var commentBlock = document.querySelector('#comment-block');
var li = '';
dataHTML
    .then(function ([users, comments]) {
        comments.forEach(function (comment) {
            var userData = users.find(function (user) {
                return user.id === comment.user_id;
            });
            li += `<li>${userData.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = li;
    });