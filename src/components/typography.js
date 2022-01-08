import React from "react";

const Typography = (Props) =>{ 

    const {type, classNames, content, ...otherProps} = Props;
    
    return (
        <Props.type className={Props.classNames} {...otherProps}>{Props.content}</Props.type>
    )
}

export default Typography;