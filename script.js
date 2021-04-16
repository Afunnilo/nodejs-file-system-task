const http = require('http');
const fs = require('fs');

http.get('http://jsonplaceholder.typicode.com/posts', res =>{
    let body = '';
    res.on('data', data => {
        body += data;
    })

    res.on('end', () => fs.writeFile('./result/posts.txt', body,(err)=>{
        if (err) throw err;
        console.log('file created successfully');
    }));
})
