import React from "react"

export default function Post({ post }) {
  const { body, timeToRead, updatedDate } = post
  const {
    title,
    description,
    relativeDate,
    isoDate,
    category,
  } = post.frontmatter
  return (
    <article role="article" class="post single-post">
      <div class="lede relative">
        <header class="post-header">
          <div class="post-label">
            <div class="post-label__wrapper">
              <div class="post-label__item">
                <span>{category}</span>
              </div>
            </div>
          </div>
          <div class="post-heading">
            <div class="post-heading__wrapper">
              <div class="post-title__wrapper">
                <h1 class="post-title">{title}</h1>
                <strong>{description}</strong>
              </div>
            </div>
          </div>
        </header>
        <div class="post-meta">
          <div class="post-date">
            <div class="post-date__field">
              <span class="post-date__label">Published:</span>
              <time datetime={isoDate}>{relativeDate}</time>
            </div>
            {/* {updatedDate && <div class="post-date__field"><span class="post-date__labal">Updated</span><time datetime={updatedDate}>{updatedDate}</time></div>} */}
          </div>
        </div>
      </div>
      <div class="post-content">
        <aside class="sidebar post-sidebar post-sidebar__left type__ancillary">
          <div class="reading-time sidebar__section">
            <h4 class="sidebar-section__title">Reading time</h4>
            <span>{timeToRead}</span>
          </div>
          <div class="bookmark sidebar__section">
            <h4 class="sidebar-section__title">Read it later</h4>
            <div class="sidebar-section__row">
              <div>
                <span>Pocket</span>
              </div>
              <div>
                <span>Instapaper</span>
              </div>
            </div>
          </div>
        </aside>
        <section class="post-body">{body}</section>
        <aside class="sidebar post-sidebar post-sidebar__right"></aside>
      </div>
    </article>
  )
}