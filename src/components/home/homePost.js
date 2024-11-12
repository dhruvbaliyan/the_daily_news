import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions';
import { Spinner,Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';

const HomePost = ()=>{
    const homePosts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        dispatch(getPosts({},1,"desc",6 ))
    },[dispatch])
    const loadMorePost = ()=>{
        const page = homePosts.page+1;
        setLoading(true);
        dispatch(getPosts(homePosts,page,"desc",6)).then(()=>{
            setLoading(false);
        });
    }

    return(
        <>
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {
                    homePosts.posts?
                    homePosts.posts.map((item)=>(
                        <div key={item.id}>
                            <img
                                style={{width:'100%',height:'200px'}}
                                src={item.image}
                                alt='Faulty Image SRC'
                            />
                            <div className='author'>
                                <span>{item.author} - </span>
                                <Moment format='MMM Do YY'>{item.createdAt}</Moment>
                            </div>
                            <div className='content'>
                                <div className='title'>{item.title}</div>
                                <div className='excerpt'>{item.excerpt}</div>
                                <LinkContainer 
                                    to={`/articles/${item.id}`}
                                    className='mt-4'>
                                    <Button className='light'>
                                        Read More
                                    </Button>
                                </LinkContainer>
                            </div>
                        </div>
                    ))
                    :null
                }
        </Masonry>

        {
            loading ? 
            <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
            :null
        }
        {
            !loading && !homePosts.end  ?
            <Button
                variant='outline-dark'
                onClick={ ()=>loadMorePost() }>
                Load More
            </Button> 
            :null
        }
        </>
    )
}

export default HomePost;