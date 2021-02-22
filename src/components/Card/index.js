import { BodySection, Container, HeadSection, SharedSection, HeartSection } from "./styles"
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from "react"
import { CircularButton } from '../Buttons'


export const Card = ({
  element,
  buttons,
  width = '100%',
  maxWidth = '600px',
  height = 'auto',
  heightImage= "400px",
  radius = '20px'
}) => {

  const [loading, setLoading] = useState(true);
  const [relativeHeight, setRelativeHeight] = useState('0px');
  
  const handleEvent = () => {
    setRelativeHeight(heightImage);
    setLoading(false);
  }

  useEffect(() => {
    if (!!!element.image) {
      setLoading(false);
    }
  })

  const handleDate = (date) => {
    return !!date ? new Date(date.seconds * 1000).toLocaleDateString("en-US") : new Date();
  }

  return (
      <>
        {
        !!element &&
          <Container radius={radius} maxWidth={maxWidth} width={width} height={height}>
            <HeadSection>
              <h1>{(!loading && element.title) || <Skeleton/>}</h1>
              <span>{(!loading && handleDate(element.createdDate) || <Skeleton count={4}/>)}</span>
            </HeadSection>
            <BodySection>
              {!!element.image && <img onLoad={handleEvent} src={element.image} width={width} height={relativeHeight} ></img>}
              <div>{(!loading && element.description) || <Skeleton/>}</div>
            </BodySection>
            <HeartSection>{(!loading && <span>{element.likes} corazones </span>) || <Skeleton/>}</HeartSection>
            {
              <SharedSection>
                {
                  buttons.map(button => 
                    <CircularButton key={button.name} icon={button.icon} onClick={button.onClick(element)} colorOver={button.colorOver} overBackground="Transparent" size={button.size} color={button.color}></CircularButton>
                  )
                }
              </SharedSection>
            }
          </Container>
        }
      </>
    ) 

}