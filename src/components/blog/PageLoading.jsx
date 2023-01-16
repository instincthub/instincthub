import React from 'react'
import styled from 'styled-components'

export const PageLoading = ({labels}) => {
  return (
    <Loading className="container">
      <p className="mt-10">{labels} Loading...</p>
    </Loading>
  )
}

const Loading = styled.div`
  height: 80vh;
  p{
    text-align: center;
    margin-top: 200px;
  }
`