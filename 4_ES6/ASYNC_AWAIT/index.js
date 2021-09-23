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

async function displayUser(){
    try {
        const loggedUser = await loginuser('cdsacdas', 32132131);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch(err) {
        console.log('we couldnt the video');
    }
}
    

displayUser();

console.log('End');