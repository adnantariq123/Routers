import React, {memo} from "react"

const MemoChild=()=>{
    console.log("came to Memo child")
    return (
        <>
        <p>Coming from Child memo component</p>
        </>
    )
}
export default memo(MemoChild);
//export default MemoChild;