import * as React from "react"
const DragAndDrop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={6}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M0 0h12v1H0zm0 5h12v1H0z" />
  </svg>
)
export default DragAndDrop
