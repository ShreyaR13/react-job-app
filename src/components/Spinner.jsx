// https://github.com/davidhu2000/react-spinners

import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color='#338ca'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner