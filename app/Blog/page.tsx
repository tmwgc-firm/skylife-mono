import Image from "next/image";
import Link from "next/link";
import Data from "../data.json";
import styles from "./blog.module.css";

export default function page() {
  const blogs = Data.blogs;
  const blogheads = Data.bloghead;
  const blogpages = Data.blogpagenation;

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.blog_one}>
          {blogheads.map((bloghead, index) => (
            <div key={index} className={styles.blog_one_sub}>
              <div>
                <Image
                  src={bloghead.image}
                  alt="image"
                  width={740}
                  height={360}
                />
              </div>
              <div className={styles.header_right}>
                <p>{bloghead.heading}</p>
                <h4>{bloghead.title}</h4>
                <p>{bloghead.para}</p>
                <div className={styles.profile}>
                  <Image
                    src={bloghead.imagetwo}
                    alt="image-profile"
                    width={32}
                    height={32}
                  />
                  <div className={styles.name_desc}>
                    <h5>{bloghead.imagename}</h5>
                    <p>{bloghead.imagedesc}</p>
                  </div>
                  <p>{bloghead.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.blog_two}>
          <div>
            {blogpages.map((blogpage, index) => (
              <div key={index}>
                <button>{blogpage.name}</button>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/Icons/left-chevron.svg"
              alt="chevron"
              width={32}
              height={32}
            />
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <Image
              src="/Icons/right-chevron.svg"
              alt="chevron"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className={styles.blog_three}>
          {blogs.map((blog, index) => (
            <div key={index}>
              <div>
                <Image src={blog.image} alt="image" width={404} height={240} />
              </div>
              <div>
                <p>{blog.heading}</p>
                <h4>{blog.title}</h4>
                <p>{blog.para}</p>
                <div>
                  <Image
                    src={blog.imagetwo}
                    alt="image-profile"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5>{blog.imagename}</h5>
                    <p>{blog.imagedesc}</p>
                  </div>
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
