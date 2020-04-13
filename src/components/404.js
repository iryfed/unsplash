import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
      <div className="container error">
        <h1>404</h1>
        <h2>Ошибка</h2>
        <p>Страница не найдена</p>
        <Link className="btn btn-home" to="/">на главную</Link>
      </div>
  )
}

export default PageNotFound
