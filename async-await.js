const user = { id: 10, isim: `busra` };
const friends = [{ id: 11, isim: `ceyda` }, { id: 12, isim: `esra` }];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
            reject('Kullanıcı bilgileri alınamadı.');
        }, 500);

    })
};

const getFriends = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
            reject('Arkadas bilgileri alınamadı.');
        }, 1000);
    })
};

async function proccess() {
    try {
        const userInfo = await getUser();
        console.log(user);
        const friendsInfo = await getFriends();
        console.log(friends);
    } catch (error) {
        console.log(error);
    }
}


proccess();