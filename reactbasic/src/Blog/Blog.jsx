import React from 'react'
import './blog.css'
import { useState } from 'react'

const Blog = () => {
  const [title, setTitle] = useState(["Title1","Title2", "Title3",])
  const [text, setText] = useState(['이름1','이름2','이름3',])
  
  
  const deleteRemove = (index) => {
    const newDelete = [...title]
    newDelete.splice(index,1)
    setTitle(newDelete)
  }
  
  return (
    <div>
      <div className='nav'>
        <h1>BLOG</h1>
      </div>
      {
        title.map((item, i)=> {
          return (
            <div className='list'>
              <h4>{item}</h4>
              <p>안녕하세요 저는 {text[i]}입니다.</p>
              <button onClick={() => deleteRemove(i)}>글 삭제</button>
            </div>
          )
        })
      }
    </div>
  )
}

function Modal() {
  return(
    <div className='modal'>
      <h4>Title</h4>
      <p>Content</p>
      <button>닫기</button>
    </div>
  )
}

export default Blog

