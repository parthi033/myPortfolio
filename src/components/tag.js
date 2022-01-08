import React from "react";

const Tag = (Props) =>{

    const renderTags = () => {
        if(!Props.tags) return null;
        return(
            Props.tags.items.map((item)=>{
                return(
                    <div className="tag">{item.title}</div>
                )
            })
        )
    }
    return (
        <div className="tag-container">
            <h2>{Props.tags.title}</h2>
            {renderTags()}
        </div>
    )
}

export default Tag;