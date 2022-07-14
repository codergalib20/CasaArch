import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./Posts.css";
import { GrFormAdd } from 'react-icons/gr';
import Footer from '../components/Footer/Footer';
const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        fetch('/posts.json')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setPosts(data);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            })
    }
    useEffect(() => {
        getPosts();
    }, [])
    console.log(posts);
    return (
        <div>
            <Header />
            <div>
                <div className="container">
                    <div className="make_post_box">
                        <div>
                            <h2>Hello, <span>KARTHIKEYAN R</span></h2>
                            <p>Welcome to your Personal Dashboard!
                                You can use this Space to Track your Ongoing Projects!</p>
                        </div>
                        <div>
                            <button className='add_post'><GrFormAdd />
                                <span>Post requirement</span></button>
                        </div>
                    </div>
                    <div className="post_box">
                        <div className='box'>
                            {posts && !isLoading && <div>
                                <div className='post_header'>
                                    <div>Serial</div>
                                    <div>Project Name</div>
                                    <div>Project Location</div>
                                    <div>Date</div>
                                    <div>Status</div>
                                </div>
                                {posts.map((post, index) => {
                                    return (
                                        <div className='post_body'>
                                            <div>{index + 1}</div>
                                            <div>{post.name}</div>
                                            <div>{post.location}</div>
                                            <div>{post.date}</div>
                                            <div >
                                                <button className={`status ${post?.status?.toLowerCase()}`}>{post.status}</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Posts;