import React, {useState} from 'react'

const CollapsibleDiv = ({children}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [header, ...rest] = children
  const handleClick = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div onClick={handleClick}>
      {header}
      {!collapsed && rest }
    </div>
  )
}

export default CollapsibleDiv