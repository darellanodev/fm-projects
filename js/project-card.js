class Card extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <link rel="stylesheet" href="./css/style.css">
      <article class="card">
        <div class="card__content">
          <a class="card__image-link" href="${this.getAttribute('href') || '#'}" title="${this.getAttribute('title') || ''}">
            <img class="card__image" src="${this.getAttribute('image') || ''}" alt="Article illustration" title="${this.getAttribute('title') || ''}">
          </a>
          <p class="card__challenge">
            ${this.getAttribute('challenge') || ''}
          </p>
          <a class="card__title" href="${this.getAttribute('href') || '#'}">${this.getAttribute('title') || ''}</a>
          <div class="card__description">
            ${this.getAttribute('description') || ''}
          </div>
          <a class="card__author" href="${this.getAttribute('author-href') || '#'}" title="${this.getAttribute('author') || ''}">
            <img src="${this.getAttribute('author-image') || ''}" alt="${this.getAttribute('author') || ''}" class="card__author-image">
            <span class="card__author-name">${this.getAttribute('author') || ''}</span>
          </a>
        </div>
      </article>
    `
  }
}
customElements.define('project-card', Card)
