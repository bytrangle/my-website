import React from "react"
import Img from "gatsby-image"
import styles from "./Hero.module.scss"

export default function Hero({ title, image, publishedAt, topic }) {
  const { path: imgPath, credit } = image
  const { isoDate } = publishedAt
  return (
    <div className={styles.articleHero}>
      <div className={styles.articleHero__container}>
        {/* lg-col-6 and mb1 define the width of the media at different break points */}
        <div className={`${styles.articleHero__media} lg-col-6 mb1`}>
          {imgPath !== null && (
            <>
              <Img
                fluid={imgPath.childImageSharp.fluid}
                className="width-full lg-mrn3"
                style={{
                  height: "460px",
                  marginBottom: "1rem",
                }}
                placeholderStyle={{ paddingBottom: "0" }}
              />
              {credit && (
                <div
                  className={`small link_external ${styles.image__credit}`}
                  dangerouslySetInnerHTML={{ __html: credit }}
                />
              )}
            </>
          )}
        </div>
        <div className={styles.articleHero__text}>
          {topic && (
            <p className={`${styles.articleHero__topic} medium`}>{topic}</p>
          )}
          <h1
            className={`${styles.articleHero__title} display line-height-1 strong`}
          >
            {title}
          </h1>
          {isoDate && (
            <span
              className={`${styles.articleHero__date} line-height-5 medium`}
            >
              Published on <time dateTime={isoDate}>{isoDate}</time>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
