import React from 'react'
import Button from '../../UI/Button'

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <h5 className="sidebar__title">Сортировка</h5>
        <div className="sidebar__btn">
          <Button>по городу</Button>
        </div>
        <div className="sidebar__btn">
          <Button>по компании</Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar