import React, { PropTypes } from 'react'
import SubHeader from 'components/styled/SubHeader'

const addBreaks = str => {
  return str.replace(/\n/g, '<br>')
}

const renderNotes = str => {
  return {
    __html: addBreaks(str)
  }
}

const Notes = ({notes}) => notes && (
  <div>
    <SubHeader>
      Notes
    </SubHeader>
    
    {Object.keys(notes).map(user => (
      <article
        key={user}>
        <h3>{user} says</h3>
        <p
          dangerouslySetInnerHTML={renderNotes(notes[user])}></p>
      </article>
    ))}
  </div>
) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
