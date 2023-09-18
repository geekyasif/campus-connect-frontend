import React from 'react'
import SuggestionItem from './SuggestionItem'

function SuggestionContainer({results}) {
  return (
    <div className="bg-white rouneded border absolute w-[250px] ">{
        results?.map((data) => (
            <SuggestionItem data={data}/>

        ))
    }
    </div>
  )
}

export default SuggestionContainer