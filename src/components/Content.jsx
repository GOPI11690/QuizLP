import showImg from './assets/images/firstPageImg.png'
function Content() {
  return (
    <div className="content">
        <div className='leftSide'>
          <h1>Make any Quiz, Form, or Survey in Minutes</h1>
          <p>Get more responses with visual conversational quizzes, polls, surveys & forms. Make beautiful & on-brand.</p>
          <div className="login">
            <a id="signUp" href="#" >Sign Up For Free</a>
            <h5>Rated 4.8 /5 on G2.com  ★ ★ ★ ★ ★</h5>
        </div>
        </div>
        <div className='rightSide'>
          <img src={showImg}></img>
        </div>
    </div>
  )
}

export default Content