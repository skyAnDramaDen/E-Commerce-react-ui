import './App.css';
import { useState } from 'react';

function LocationRow({ location }) {
    return (
        <tr>
            <th>
                { location }
            </th>
        </tr>
    )
}

function FollowButton() {
    return (
        <button>Follow</button>
    );
}