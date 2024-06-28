function initGitalk(url, repo, title, id) {
    // 动态生成链接的 <p> 元素
    var linkContainer = document.getElementById('link-container');
    if (linkContainer) {
        var p = document.createElement('p');
        p.innerHTML = '链接: <a href="' + url + '">' + url + '</a>';
        linkContainer.appendChild(p);
    }

    // 初始化 Gitalk
    var gitalk = new Gitalk({
        clientID: 'Ov23li7HVFbJsJb77h7I',
        clientSecret: '1af16438cc4d2e47699693557b8c625114782bb2',
        repo: repo,
        owner: 'ptw-cwl',
        admin: ['ptw-cwl'],
        title: title,
        id: id,
        distractionFreeMode: false
    });

    // 确保评论容器存在
    var commentContainer = document.getElementById('gitalk-container');
    if (commentContainer) {
        gitalk.render('gitalk-container');
    } else {
        console.error('评论容器找不到');
    }
}
