import {FC} from 'react'

import styles from './Image.module.scss'

type Props = {
	image?: string
}

export const Image: FC<Props> = ({image}) => {
	return (
		<div className={styles.wrapper}>
			{image && <img src={image} alt={'news'} className={styles.image}/>}
		</div>
	)
}
