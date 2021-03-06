import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Card } from "../../components/Card";
import { CardsContainer } from './styles';
import { FaHeart, FaFacebook, FaTwitter } from "react-icons/fa";
import { useCallback, useEffect, useState  } from 'react';
import { NoInfo } from '../../components/NoInfo';



const Feed = () => {

  const size = 10;
  let [limit, setLimit] = useState(10);

  const fireStore = useFirestore();
  const postColletion = fireStore.collection(process.env.REACT_APP_POSTS)
  const query = postColletion.orderBy('order').limit(limit);

  const handlePage = useCallback(event => {
    
    if (status != 'loading') {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) 
      {
        const newLimit = limit + size;
        setLimit(newLimit);
      }
    }
  })


  useEffect(() => {
    window.addEventListener('scroll', handlePage);

    return () => {
      window.removeEventListener('scroll', handlePage);
    };
  }, [handlePage]);

  const {data: posts, status} = useFirestoreCollectionData(query, {idField: 'id'});
  


  const handleLike = (post) => () => {
    const likes = post.likes + 1;
    postColletion.doc(post.id).update({likes}).then(res => {
      console.log(res);
    });
  }

  const sharedFaceBook = (post) => () => {
    
  };

  const sharedTwitter = (post) => () => {
    
  };

  const buttons = [
    {
      name: 'Like',
      color: 'red',
      size: '40px',
      onClick: handleLike,
      colorOver: '#FF4C4C',
      icon: FaHeart
    }
  ];


  return (
    <>
      <CardsContainer>
        {!!posts && posts.map((post, i) => (
            <Card key={i} maxWidth="800px" width="100%" buttons={buttons} element={post}></Card>
        ))}
        {!!posts && posts.length == 0 && <NoInfo />}
      </CardsContainer>
    </>)

}

export default Feed;