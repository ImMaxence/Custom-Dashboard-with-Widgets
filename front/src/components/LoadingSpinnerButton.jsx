import React from 'react'

const LoadingSpinnerButton = ({ title, loading, onClick }) => {
    return (
        <button onClick={onClick} className='loading_spinner_button' type='submit'>
            {
                loading ? <img src="./img/spinner.gif" alt='spinner_not_load' /> : title + ' '
            }
        </button>
    )
}

export default LoadingSpinnerButton