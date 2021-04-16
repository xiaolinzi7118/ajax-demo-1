//获取css
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
            console.log('拿到css啦')
        }
    }
    request.send()
}

//获取JS
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    }
    request.send()
}

//获取html
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    }
    request.send()
}

//获取xml
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('name')[0].textContent;
            console.log(dom);
            console.log(text.trim());
        }
    }
    request.send()
}


//获取JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const result = JSON.parse(request.response);
            console.log(result)
        }
    }
    request.send()
}

//加载分页
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 & request.status === 200) {
            const xxx = document.querySelector('#xxx');
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        } else if (request.status === 404) {
            alert('没有下一页啦')
        }
    }
    request.send()
}
