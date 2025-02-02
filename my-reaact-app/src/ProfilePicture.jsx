function ProfilePicture(){

    const imageUrl = './src/assets/Praveen.jpg';
    
    const imageStyle = {
        height: '150px',
        width: '120px',
        borderRadius: '50%',
        cursor: 'pointer'
    };

    const handleClick = (e) => {
        console.log("Image clicked");
    };

    return(
        <>
            <img onClick={(e) => handleClick(e)} style={imageStyle} src={imageUrl}/>
        </>
    );

}

export default ProfilePicture;