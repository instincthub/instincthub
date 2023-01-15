import { React, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom';
import { previousBlogSlug } from '../assets/js/help_func'

export default function UserProfile() {
    let { slug } = useParams();
    // Redirect all slug that matches the blog posts
    // before switching to React App.

    if(previousBlogSlug.includes(slug)){
        return (
            <>
                <Navigate to={"/blog/"+slug}/>
            </>
        )
    }
}
