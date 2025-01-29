import profilePic from './assets/Praveen.jpg'

function Card(){
    return (
        <div className="card">
            <img className='card-image' 
                 src={profilePic} 
                 alt="Profile picture" />
            <h2 className='card-title'>Mr.Praveen Baruri</h2>
            <p className='card-text'>Project Manager with over 7 years of experience in software development and project leadership..</p>
        </div>
    );
}

export default Card;