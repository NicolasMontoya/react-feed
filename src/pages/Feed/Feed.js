import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Card } from "../../components/Card";
import { CardsContainer } from './styles';
import GlobalFonts from '../../assets/fonts/fonts';
import { FaHeart, FaFacebook, FaTwitter } from "react-icons/fa";


export const Feed = () => {

  let page = 0;

  const emptyImg = "https://firebasestorage.googleapis.com/v0/b/eecowin-773e2.appspot.com/o/undraw_empty_xct9.svg?alt=media&token=055f8be4-903e-4125-88c2-a80e3123aeb7";

  const postColletion = useFirestore().collection(process.env.REACT_APP_POSTS)
  const {data: posts} = useFirestoreCollectionData(postColletion.orderBy('createdDate').startAt(page).limit(1), { idField: "id" });
  


  const handleLike = (post) => () => {
    const likes = post.likes + 1;
    postColletion.doc(post.id).update({likes}).then(res => {
      console.log(res);
    });
  }

  const sharedFaceBook = (post) => () => {
    console.log(page);
    page = 1;
  };

  const sharedTwitter = (post) => () => {
    console.log(page);
  };

  const buttons = [
    {
      name: 'Like',
      color: 'red',
      size: '40px',
      onClick: handleLike,
      colorOver: 'red',
      icon: FaHeart
    },
    {
      name: 'FaceBook',
      color: '#1877f2',
      size: '40px',
      onClick: sharedFaceBook,
      colorOver: '#1877f2',
      icon: FaFacebook
    },
    {
      name: 'Twitter',
      color: '#1da1f2',
      size: '40px',
      onClick: sharedTwitter,
      colorOver: '#1da1f2',
      icon: FaTwitter
    }
  ];


  return (
    <>
      <GlobalFonts />
      <CardsContainer>
      {!!posts && posts.map((post, i) => (
          <Card key={i} width="600px" buttons={buttons} element={post}></Card>
        ))}
      {!!posts && posts.length == 0 && 
        <div>
          <img src={emptyImg} width="200px" alt="empty image posts"
          ></img>
          No hay información disponible
        </div>
      }
      </CardsContainer>
    </>)

}