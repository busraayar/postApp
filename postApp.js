//consol ekranına postlarımızı sıralayalım sonra yeni bir post yapıp onu da sıralayalım

const posts = [
    {gonderi: 'POST1', tarih: '2019'},
    {gonderi: 'POST2', tarih: '2020'},
    {gonderi: 'POST3', tarih: '2022'},
    {gonderi: 'POST4', tarih: '2023'}
];

const addPost = (newPost) => {
    posts.push(newPost);
    return new Promise((resolve, reject) => {
        resolve('Ekleme basarili');
        reject('Ekleme esnasında bir hata oluştu');
    })
};
const listPost = () => {
    posts.map(posts => {
        console.log(posts.gonderi);
    });
};

async function postProccess(){
    
    try {
        const added = await addPost({gonderi : 'POST6', tarih: '2023'});
        console.log(added);
        listPost();
    } catch (error) {
        console.log(error);
    }
}

postProccess();