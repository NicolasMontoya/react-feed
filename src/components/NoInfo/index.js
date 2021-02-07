import { Container } from "./styles"

export const NoInfo = () => {

  const emptyImg = "https://firebasestorage.googleapis.com/v0/b/eecowin-773e2.appspot.com/o/undraw_empty_xct9.svg?alt=media&token=055f8be4-903e-4125-88c2-a80e3123aeb7";

  return (
      <>
        <Container>
            <img src={emptyImg} width="400px" height="auto" alt="empty image posts"></img>
            <p>No hay información disponible</p>
        </Container>
      </>
    ) 

}