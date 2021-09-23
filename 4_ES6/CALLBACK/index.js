// Synchronous

function otherFunct() {
    console.log("we are in another func");
    console.log("do some stuff");
}

console.log('start');

otherFunct();

console.log('end');

// Asynchronous

console.log('start');

// This block is running asynchronously
setTimeout(() => {
    console.log('We are in the timeout');
}, 1500);

console.log('end');

// This is called the callback function
// () => {}

// Callback can be synchronous
const items = [1, 2, 3, 4, 5];
items.forEach(item => {
    console.log(item);
});

// Synchronous problem
// console.log('Start');

// function loginUser(email, password){
//     setTimeout(() => {
//         return {userEmail: email};
//     }, 1500)
// }

// const user = loginUser('decdasc@dcfds', 21321321);
// console.log(user)

// console.log('Finish');


// Using callback function for asynchronous
// console.log('Start');

// function loginUser(email, password, callback){
//     setTimeout(() => {
//         console.log('now we have the data');
//         callback({userEmail: email});
//     }, 1500)
// }

// const user = loginUser('decdasc@dcfds', 21321321, user => {
//     console.log(user);
// });

// console.log('Finish');

// Callback Hell
console.log('Start');

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log('now we have the data');
        callback({userEmail: email});
    }, 3000);
};

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000);
};

function videoDetails(video, callback) {
    setTimeout( () => {
        callback('title of the video');
    }, 2000);
};

const user = loginUser('decdasc@dcfds', 21321321, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        });
    });
});

console.log('Finish');


