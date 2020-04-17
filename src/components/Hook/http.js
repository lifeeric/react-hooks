import axios from 'axios';
import { useEffect, useState } from 'react';

export default ({url, dependencies}) => {

    // State
    const [getPosts, setPost] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // axios.get('https://jsonplaceholder.typicode.com/posts/'+ postid)
        axios.get(url)
            .then(response => {
                setLoading(false)
   
                setPost(response.data)
            })
            .catch(error => {
                setLoading(true);
                console.log(`Error ${error}`);
            });

            return () => {
                console.log('cleaning up post');
            }
    }, dependencies);
    console.log(getPosts);

    return [isLoading, getPosts];
}