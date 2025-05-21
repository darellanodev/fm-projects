class BlogCard extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <link rel="stylesheet" href="./css/style.css">
      <article class="blog-card">
        <div class="blog-card__content">
          <img class="blog-card__image" src="${this.getAttribute('image') || ''}" alt="Article illustration" title="${this.getAttribute('title') || ''}">
          <p class="blog-card__challenge">
            ${this.getAttribute('challenge') || ''}
          </p>
          <a class="blog-card__title" href="${this.getAttribute('href') || '#'}">${this.getAttribute('title') || ''}</a>
          <div class="blog-card__description">
            ${this.getAttribute('description') || ''}
          </div>
          <div class="blog-card__author">
            <img src="${this.getAttribute('author-image') || ''}" alt="${this.getAttribute('author') || ''}" class="blog-card__author-image" title="${
      this.getAttribute('author') || ''
    }">
            <a class="blog-card__author-name" href="${this.getAttribute('author-href') || '#'}" title="${this.getAttribute('author') || ''}">${
      this.getAttribute('author') || ''
    }</a>
          </div>
        </div>
      </article>
    `
  }
}
customElements.define('blog-card', BlogCard)
