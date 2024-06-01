import React from 'react'
import { Container, PostForm } from '../Components/Index'
import appWriteService from "../Appwrite/Config"
import { useState , useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'


function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if(slug){
            appWriteService.getPost(slug).then( (post) => {
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    } , [slug,navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

    
}

export default EditPost