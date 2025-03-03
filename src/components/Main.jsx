import React, { useState } from 'react'

const Main = ({tempMovieData, tempWatchedData, children}) => {

  return (
	<main className="main">
		{children}
  </main>
  )
}

export default Main