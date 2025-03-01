import PropTypes from 'prop-types'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
function Likebutton  ({isLiked}) {
    const [isLike, setIsLike] = useState(isLiked);
  return (
    <>
      <button onClick={() => setIsLike(!isLike)}>
        {isLike ? <FaHeart color="red" size={30}/> : <FaRegHeart size={30} />}
      </button>
    
      
    </>
  )
}

Likebutton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};

export default Likebutton
