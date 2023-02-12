import React from 'react'

export default function Pagination(gotoNextpage,gotoPrevpage) {
  return (
    <div>
      {gotoPrevpage && <button onClick={gotoPrevpage}>previous</button>}
      {gotoNextpage && <button onClick={gotoNextpage}>Next</button>}
    </div>
  )
}
