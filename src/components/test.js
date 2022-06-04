import React from 'react'
import { useEffect, useState } from 'react'

export default function Test() {
    const [title, setTitle] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
            setTitle(data.title)
        })
    }, [])
     return (
        <h2>{title}</h2>
     )
 }

