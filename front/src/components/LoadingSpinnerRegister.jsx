import React from 'react';

const LoadingSpinnerRegister = ({ loading, onClick }) => {
    return (
        <button onClick={onClick} className='loading_spinner_register' type='submit'>
            {
                loading ? <img src="./img/spinner.gif" alt='spinner_not_load' /> : 'REGISTER'
            }
        </button>
    )
}
export default LoadingSpinnerRegister;