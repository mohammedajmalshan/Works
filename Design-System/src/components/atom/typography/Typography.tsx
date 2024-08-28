import React from "react"
import TypographyPropsType from "./type"
const Typography = ({tag, text, className, style, role}: TypographyPropsType) => {
  return React.createElement(tag, {className: className, style,}, text,role
  )
}

export default Typography