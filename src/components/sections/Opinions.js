import React, { useState } from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import OpinionsCard from "components/molecules/OpinionsCard"
import OpinionsForm from "components/molecules/OpinionsForm"

const StyledContainer = styled.section`
  width: 100%;
  padding: 50px;
  text-align: right;

  @media ${response.phone} {
    padding: 50px 80px;
  }
`

const StyledOpinionsTitle = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.grey};
  text-align: left;
`

const StyledFormOpenButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  margin: 10px 0 0;
`

const Data = [
  {
    points: "5",
    comment:
      "They work with my client to build a space that reflects their own unique style.",
    date: "12.07.2020",
    author: "Dariusz K.",
  },
  {
    points: "1",
    comment: "You are funny company!",
    date: "176.07.2020",
    author: "Funny guy",
  },
  {
    points: "10",
    comment: "Wow! Awesome work by you",
    date: "27.11.2020",
    author: "Happy client",
  },
]

const Opinions = () => {
  const [isFormOpen, setFormOpenmet] = useState(false)

  return (
    <StyledContainer>
      <StyledOpinionsTitle>Opinie o naszej firmie:</StyledOpinionsTitle>
      {Data.map(opinion => (
        <OpinionsCard data={opinion} key={opinion.author} />
      ))}
      <StyledFormOpenButton onClick={() => setFormOpenmet(!isFormOpen)}>
        {isFormOpen ? "Nie chcę dodawać opinii" : "Dodaj opinię"}
      </StyledFormOpenButton>
      {isFormOpen && <OpinionsForm />}
    </StyledContainer>
  )
}

export default Opinions
