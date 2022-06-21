import React from 'react'

const Prop = (props) => {
    const {language,tech} = props
    // const language=props.language
    // const tect=props.tech
  return (
    <>
    <h2> We are learning {language}.It is mainly used for {tech}</h2>
    </>
  )
}

export default Prop