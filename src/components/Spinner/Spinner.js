import React from 'react'

import styles from './Spinner.module.css';

const Spinner = () => {
	return (
		<div className={styles.loader}>
			Wait for a moment...
		</div>
	)
}

export default Spinner