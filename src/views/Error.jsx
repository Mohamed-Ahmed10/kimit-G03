import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h2>Error 404 not found</h2>
            <Link to="/">Go home</Link>
        </div>
    )
}
