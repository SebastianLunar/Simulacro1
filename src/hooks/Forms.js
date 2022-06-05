import { useState } from 'react'

export const Forms = (initialState = {}) => {

    const [data, setData] = useState(initialState);

    const reset = () => setData(initialState)

    const handleChange = ({target}) => setData({
        ...data,
        [target.name]: target.value
    });

    const uploadImg = (url) => setData({
        ...data,
        img: url
    })

  return [data, handleChange, reset, uploadImg]
}

export default Forms