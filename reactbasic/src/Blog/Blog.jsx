import React, { forwardRef } from 'react'
import './blog.css'
import { useState } from 'react'

const Blog = (props) => {
  const [title, setTitle] = useState(["Dw아카데미 501호","Dw아카데미 502호", "Dw아카데미 503호"])
  const [text, setText] = useState(['인호성','여상현','김상현'])
  const [modal , setModal] = useState();
  const [name , setName] = useState(0)
  
  const deleteRemove = (index) => {
    const newDelete = [...title]
    newDelete.splice(index,1)
    setTitle(newDelete)
  }

  const deleteModal = () => {
    setModal(false);
  }

  return (
    <div>
      <div className='nav'>
        <h1>BLOG</h1>
      </div>
      {
        title.map((item, i)=> {
          return (
            <div className='list' onClick={()=> {setModal(true) }} >
              <h4>{item}</h4>
              <p>안녕하세요 저는 {text[i]}입니다.</p>
              <button onClick={() => deleteRemove(i)}>글 삭제</button>
            </div>
          )
        })
      }
      {modal === true && <Modal deleteModal={deleteModal} title={title} text={text} name={name} />}

    </div>
  )
}


function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.name]}</h4>
      <p>{props.text[props.name]}</p>
      <button onClick={props.deleteModal}>닫기</button>
    </div>
  );
}

export default Blog
