import PropTypes from 'prop-types'
import Likebutton from './likebutton'
const Postcard = ({profileImage, username, content,isLiked}) => {
  return (
    <>
      <div className="h-[500px] w-[300px] flex flex-col border border-black ">
        <img src={profileImage} alt={username} className="object-cover w-full h-3/4"/>

        <h1 className="font-bold text-3xl">{username}</h1>
        <p>{content}</p>

        <div className='pl-[250px]'>
        <Likebutton  isLiked={isLiked} />
        </div>
        
      </div>
    </>
  )
}

Postcard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired
};


export default Postcard
