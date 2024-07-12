'use client'
import articles from '../../articles.json'
import Image from 'next/image'
import styles from './blogid.module.css'
import Header from '../../Header/page'
import { useEffect, useRef } from 'react'

const getArticle = (id: any) => {
	return articles[id]
}

const Article = (params: any) => {
	const result = getArticle(params.params.id)

	console.log('search', result)

	const blogHeroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('.blog_hero h2')
			const sidebarLinks = document.querySelectorAll('.side_bar p')
			let currentIndex = 0

			sections.forEach((section, index) => {
				const rect = section.getBoundingClientRect()
				if (rect.top <= 250) {
					currentIndex = index
				}
			})

			sidebarLinks.forEach((link, index) => {
				if (index === currentIndex) {
					link.classList.add('active')
				} else {
					link.classList.remove('active')
				}
			})
		}

		const detailsLeft = blogHeroRef.current
		detailsLeft?.addEventListener('scroll', handleScroll)

		return () => {
			detailsLeft?.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Header />
			<div className={styles.blog_id_page}>
				<div className={styles.hero_over}>
					<div className={styles.blog_hero} ref={blogHeroRef}>
						<div className={styles.intro}>
							<p>{result?.name}</p>
							<h2 id='section-1'>{result?.title}</h2>
							<p>{result?.brief}</p>
						</div>
						<div>
							<div className={styles.details}>
								<div className={styles.proimage}>
									<Image
										src={result?.proimage}
										alt='profile'
										width={32}
										height={32}
									/>
								</div>
								<div className={styles.pro_details}>
									<h5>{result?.proname}</h5>
									<p>{result?.imagedesc}</p>
								</div>
								<div className={styles.proimage_date}>
									<p>{result?.date}</p>
								</div>
							</div>
							<div className={styles.blog_bodyimage}>
								<Image
									src={result?.image}
									alt='profile'
									width={920}
									height={520}
								/>
							</div>
							<div className={styles.lorem}>
								<p>{result?.lorem}</p>
								<p>{result?.loremtwo}</p>
							</div>
							<div className={styles.history}>
								{result?.year.map((yr, index) => (
									<div key={index} className={styles.sub_history}>
										<h2 id='section-2'>{yr.historyauthor}</h2>
										<p>{yr.summary}</p>
										<p>{yr.summarytwo}</p>
										<Image src={yr.pic} alt='img' width={920} height={280} />
										<div className={styles.pic}>
											<Image
												src={yr.pictwo}
												alt='img'
												width={452}
												height={240}
											/>
											<Image
												src={yr.picthree}
												alt='img'
												width={452}
												height={240}
											/>
										</div>
									</div>
								))}
							</div>
							<div>
								{result?.sections.map((section, index) => (
									<div key={index} className={styles.sections}>
										<h1>{section.headingone}</h1>
										<p>{section.paraone}</p>
										<h3>{section.heading}</h3>
										<p>{section.para}</p>
									</div>
								))}
							</div>
							<div className={styles.number_container}>
								{result?.numcontainer.map((number, index) => (
									<div key={index} className={styles.number_box}>
										<Image
											src={number.image}
											alt='one'
											width={106}
											height={106}
										/>
										<p>{number.para}</p>
									</div>
								))}
							</div>
							<div>
								{result?.conclusion.map((conclu, index) => (
									<div key={index} className={styles.conclusion}>
										<h2 id='section-3'>{conclu.linkhead}</h2>
										<p>{conclu.linkpara}</p>
										<div>
											<ul className={styles.b}>
												<li>{conclu.link}</li>
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className={styles.side_bar}>
						{result?.sidebars.map((sidebar, index) => (
							<div key={index}>
								<p id={`sidebar-${index + 1}`}>{sidebar.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.read_container}>
				<h4 className={styles.read_more_text}>READ NEXT</h4>
				<div className={styles.read_item}>
					{result?.readnext.map((profile, index) => (
						<div key={index} className={styles.read_item_box}>
							<Image src={profile.img} alt='profile' width={404} height={240} />
							<h4 className={styles.insurance}>{profile.title}</h4>
							<h3>{profile.heading}</h3>
							<p>{profile.para}</p>
							<div className={styles.read_prof}>
								<div className={styles.read_prof_sub}>
									<Image
										src={profile.img_two}
										alt='man'
										width={32}
										height={32}
									/>
									<div className={styles.read_prof_details}>
										<h4>{profile.img_name}</h4>
										<p>{profile.img_desc}</p>
									</div>
								</div>
								<p>{profile.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Article
