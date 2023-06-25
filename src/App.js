import './App.css';


function App() {


    const profileData={
        imageUrl:"https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-19/297394144_167040512540904_7036046417429315765_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=100&_nc_ohc=w4-MYBjTWj8AX96KYX3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDiE1QdURhMYdTjzif6nhDc3K22PCit8Q6XRsnEPKDKoQ&oe=649CE7F4&_nc_sid=f70a57",
        name:"Yash Munjal"
    }

  return (
    <div classNameName="App">
      
      <header>
        <div className="share-button">
            <svg width="16" height="16" viewBox="0 0 16 16" enableBackground="new 0 0 24 24" className="sc-gKsewC iPWGYb"><path fillRule="evenodd" clipRule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
        </div>
    </header>
    <div className="container">
        <div className="image-container">
            <img
                    src={profileData.imageUrl}
                    alt={profileData.name} />
        </div>
        <h1>{profileData.name}</h1>

        <a className="tile" href="https://www.instagram.com/yashmunjal45/">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><rect width="256" height="256" fill="none" color="white" /><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
            <p>Instagram</p>
            <div className="tile-share-button" link="https://www.instagram.com/yashmunjal45/">
                <svg width="16" height="16" viewBox="0 0 16 16" enableBackground="new 0 0 24 24" className="sc-gKsewC iPWGYb"><path fillRule="evenodd" clipRule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
            </div>
        </a>
    </div>
    </div>
  );
}

export default App;
