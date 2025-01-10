import showImg from "./assets/images/firstPageImg.png";
import Templates from "./Templates";
import Testimonials from "./Testimonials";

function Content() {
  return (
    <div>
      <div className="mainContent">
        <div className="leftSide">
          <h1>Make any Quiz, Form, or Survey in Minutes</h1>
          <p>
            Get more responses with visual conversational quizzes, polls,
            surveys & forms. Make beautiful & on-brand.
          </p>
          <div className="login">
            <a id="demoQuiz" href="/#tempCont">   {/*button for navigate to demo quiz templates*/}
              Demo Quiz
            </a>
          </div>
        </div>
        <div className="rightSide">
          <img id="banner" src={showImg}></img>
        </div>
      </div>
      <Templates />
      <Testimonials />
    </div>
  );
}

export default Content;
