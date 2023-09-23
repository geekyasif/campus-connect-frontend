import React, { useState } from 'react'

function useLoading() {

    const [loading, setLoading] = useState(false);

    function startLoading(){
        setLoading(true)
    }

    function stopLoading(){
        setLoading(false)
    }

    return {startLoading, stopLoading, loading};

}

export default useLoading;