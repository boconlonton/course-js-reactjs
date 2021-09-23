// What is Promise ? A promise is an object that give us either a resolve or failure of a asynchronous operation

// Creation of Promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('got the user');
//         // resolve( {user: 'ed'} );
//         reject( new Error('User not logged in'));
//     }, 2000);
// });

// Usage
// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err));

console.log('Start');

function loginuser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data');
            resolve({userEmail: email});
        }, 2000);
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        });
    })
}

loginuser('ed', 12312312)
.then(user => getUserVideos(user.userEmail)
.then(videos => videoDetails(videos[0])
.then(detail => console.log(detail))));

console.log('End');
