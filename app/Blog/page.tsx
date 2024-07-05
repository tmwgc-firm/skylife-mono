import Image from "next/image";
import Link from "next/link";
import Data from "../data.json";
import styles from "./blog.module.css";
import Header from "../Header/page";

export default function page() {
  const blogs = Data.blogs;
  const blogheads = Data.bloghead;
  const blogpages = Data.blogpagenation;
  const blogtables = Data.latest;

  return (
    <>
      <Header />
      <div className={styles.over_blog}>
        <div className={styles.blog}>
          <div className={styles.border_line}>
            <p>Featured</p>
          </div>
          <div className={styles.blog_one}>
            {blogheads.map((bloghead, index) => (
              <Link href={`/Blog/${index}`}>
                <div key={index} className={styles.blog_one_sub}>
                  <div className={styles.leader_image}>
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
                    <div className={styles.profile_one}>
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
              </Link>
            ))}
          </div>
          <div className={styles.blog_two}>
            <div className={styles.pagination_overall}>
              {blogpages.map((blogpage, index) => (
                <div key={index} className={styles.pagination_left_buttons}>
                  <button>{blogpage.name}</button>
                </div>
              ))}
            </div>
            <div className={styles.one_two_three}>
              <Image
                src="/Icons/left-chevron.svg"
                alt="chevron"
                className={styles.left_chevron}
                width={32}
                height={32}
              />
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <Image
                src="/Icons/right-chevron.svg"
                alt="chevron"
                className={styles.left_chevron}
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className={styles.blog_three}>
            {blogs.map((blog, index) => (
              <div key={index} className={styles.img_con}>
                <Image src={blog.image} alt="image" width={380} height={240} />

                <div className={styles.header_right}>
                  <p>{blog.heading}</p>
                  <h4>{blog.title}</h4>
                  <p>{blog.para}</p>
                  <div className={styles.profile}>
                    <Image
                      src={blog.imagetwo}
                      alt="image-profile"
                      width={32}
                      height={32}
                    />
                    <div className={styles.name_desc}>
                      <h5>{blog.imagename}</h5>
                      <p>{blog.imagedesc}</p>
                    </div>
                    <p>{blog.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.blog_four}>
            <p className={styles.lat}>Latest</p>
            <div className={styles.over_table}>
              {blogtables.map((blogtable, index) => (
                <div key={index}>
                  <div className={styles.table_column}>
                    <div>
                      <h5>{blogtable.content}</h5>
                    </div>
                    <div className={styles.str}>
                      <p>{blogtable.strategy}</p>
                    </div>
                    <div className={styles.con}>
                      <p>{blogtable.contentdate}</p>
                    </div>
                    <div className={styles.profile_details}>
                      <div className={styles.table_name}>
                        <h6>{blogtable.imagename}</h6>
                        <p>{blogtable.imagedesc}</p>
                      </div>
                      <div>
                        <Image
                          src={blogtable.imagetwo}
                          alt="image-profile"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                    <div className={styles.table_mobile}>
                      <p>{blogtable.strategy}</p>
                      <p>{blogtable.contentdate}</p>
                      <Image
                        src={blogtable.imagetwo}
                        alt="image-profile"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
