import React from 'react'
import ForumTag from './ForumTag'

function ForumTags() {
  return (
    <div className='flex flex-wrap gap-4 my-2'>
        <ForumTag text="Interview Experience" />
        <ForumTag text="General Discuss" />
        <ForumTag text="Career" />
        <ForumTag text="React" />
        <ForumTag text="Data Structure & Algorithm" />
        <ForumTag text="DBMS" />
        <ForumTag text="Operating System" />
        <ForumTag text="System Design" />
        <ForumTag text="Interview Question" />
        <ForumTag text="FANG" />
    </div>
  )
}

export default ForumTags