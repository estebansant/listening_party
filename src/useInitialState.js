import React from 'react';

const useInitialState = () => {
    const [page, setPage] = React.useState("chooseButtons");

    return {
        page,
        setPage,
    };
}

export {useInitialState}