function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = `Title: ${articleData.title}`


    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = `Content: ${articleData.content}`

    const author = document.createElement('div')
    author.classList.add('author-content')
    author.textContent = `Author: ${articleData.author}`



    //after creating all the elements we will append them to the section 

    article.append(title, author, content)
    document.querySelector('#articles').appendChild(article)
}

async function fetchArticles() {
    const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
    articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        content: document.querySelector('#content').value
    }

    const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticles = await response.json
    form.reset()
    renderArticle(savedArticles)

    console.log(savedArticles)

})
