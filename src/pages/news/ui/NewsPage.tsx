import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAppSelector} from '@/app'
import {NewsDetails} from '@/entities'

import styles from './styles.module.scss'

export const NewsPage: FC = () => {
	const currentNews = useAppSelector(state => state.news?.currentNews)

	if (!currentNews) {
		return (
			<div>
				<h1>Cannot find news</h1>
				<Link to={'/'}>
					<p>Go back</p>
				</Link>
			</div>
		)
	}

	return (
		<main className={styles.news}>
			<h1>{currentNews?.title}</h1>
			<NewsDetails item={currentNews}/>
		</main>
	)
}
