import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }

  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize',onResize)
  },[])

  const [page,setPage] = useState(0)

  const questionList = [
    {q: ['안녕?', '넌 처음보는 얼굴같은데?'],
    a:[{type:'I',text:'안녕..난 전학생이야 잘 부탁해'},
      {type:'E',text:'안녕!!! 반가워!! 난 오늘 전학왔어! 넌 이름이 뭐야?? 아니 나 어제 먹은 마라탕 진짜 맛있었는데 너 마라탕 좋아해??'}]},

    {q: ['야', '너 방과후 동아리 어디 들어갈거야?'],
    a:[{type:'I',text:'영화감상동아리나 독서동아리가 마음에 드네'},
      {type:'E',text:'댄스동아리나 축구동아리 가야지!!! 너는 어떤 동아린데? 나랑 같이 들어갈래?'}]},

    {q: ['나 결심했어', '신상 옷 사러가야겠어.', '너 이번 주말에 뭐해???'],
    a:[{type:'I',text:'학교 적응하느라 개힘들어; 주말내내 집에서 침대랑 한 몸으로 지낼 예정이야'},
      {type:'E',text:'안그래도 학교 적응하느라 지루했는데 나도 갈래!!! 같이ㄱㄱㄱ 이 근처 맛집 다 알아놨어'}]},

    {q: ['주술학교 오기전에 가장 좋아했던 과목이 뭐였어?'],
    a:[{type:'S',text:'난 나한테 실용적이고 기술적이거나 경험적인 과목을 좋아했어'},
      {type:'N',text:'음.....창의적이거나 이론적인 과목?'}]},

    {q: ['주술사하면 뭐가 떠올라??'],
    a:[{type:'S',text:'오컬트, 주령, 술식...'},
      {type:'N',text:'만약 내가 최강의 주술사가 된다면...'}]},

    {q: ['오늘', '점심 뭐 먹을래?'],
    a:[{type:'S',text:'떡볶이 먹으러 가자.'},
      {type:'N',text:'어제부터 짬뽕이 먹고싶었어 근데 오늘은 또 피자가 먹고싶어. 저녁에 짬뽕 먹을까?'}]},

    {q: ['네가 새로운 전학생이냐?', '싸움도 못하게 생겼는데???'],
    a:[{type:'F',text:'날 언제부터 봤다고 무시하냐?? 너도 싸움 못 할 거 같은데?'},
      {type:'T',text:'전학생인건 맞는데, 내가 싸움을 못하는지 네가 어떻게 알아? 본 적 있어?'}]},

    {q: ['나 너무 우울해서', '여행 갈려고'],
    a:[{type:'F',text:'무슨 일있어?? 고죠 선생님이 괴롭혔어????'},
      {type:'T',text:'어디로 갈건데??? 요즘 국내여행도 좋더라!'}]},

    {q: ['시험 개망했어...ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ','ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ','ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ'],
    a:[{type:'F',text:'힘내! 다음에 잘 하면 돼!! 맛있는 거 먹으러 갈까?'},
      {type:'T',text:'무슨 시험인데?? 많이 어려웠어?'}]},

    {q: ['이번 주령 제거 임무는 어떻게 진행해야할까?'],
    a:[{type:'P',text:'융통성 있게 접근해서 상황에 따라 유연하게 대처해야지!!!'},
      {type:'J',text:'계획을 세워서 구조적으로 문제를 해결해볼까?'}]},

    {q: ['2주뒤에 시험인데 시험공부 언제 할거야?'],
    a:[{type:'P',text:'시험이 2주나 남았어? 한참 멀었네ㅎㅎ'},
      {type:'J',text:'난 한달 전부터 계획대로 공부중인데?'}]},

    {q: ['방학때 여행계획 다 짰어??'],
    a:[{type:'P',text:'ㅇㅇ 애들이랑 바다가서 고기 구워먹고 놀다가 폭죽놀이 할거야'},
      {type:'J',text:'7시 30분 모이기, 8시 버스타기, 8시 30분 숙소도착, 9시 아침먹기, 9시 30분 바다도착...'}]},
  
      {q:['테스트가 모두 끝났습니다!!!', '결과를 보러 갈까요??'],
      a:[{type:'',text:'결과 보러 가기'}]}
    ]

  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0}, {name:'E',count:0}, {name:'S',count:0}, {name:'N',count:0}, 
    {name:'F',count:0}, {name:'T',count:0}, {name:'P',count:0}, {name:'J',count:0}, 
  ])

  const handleCkAnswer = (type,idx) => {
    let ls = mbtiList
    for(let i = 0; i < ls.length; i++){
      if(ls[i].name===type){
        ls[i].count = ls[i].count + 1
      }
    }

    setMbtiList(ls)
    setPage(page+1)

    if(idx+1 === questionList.length){

    }

  }

  return (
    <div className="mbtiLayout">
      {page===0?
      <div className='startPageLayout'>
        <div className='startLogo'>
          <div>내가 주술회전의 주술고등학교에 전학간다면
            <br></br> 
            나랑 잘 맞는 주인공은 누굴까?</div>
            <div>▼</div>
          </div>
          <div onClick={() => setPage(1)} className='startButton'>테스트 시작하기</div>
        </div>
        : page <= questionList.length ?
          <div className='questionLayout'>
            <div className='mbtiTitle'>
              <div>MBTI 테스트</div>
              <div>{`${page} / ${questionList.length}`}</div>
            </div>

            {questionList.map((val, idx) =>
              <div className='questionList' style={{ display: page === idx + 1 ? 'flex' : 'none' }} key={idx}>
                <div className='questionItemLayout'>
                  <div className='profileImg'>
                    <div></div>
                  </div>

                  <div className='chatListLayout'>
                    {val.q.map((qval, qidx) =>
                      <div key={qidx} className='chatBox'>
                        <div>◀</div> <div>{qval}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='answerItemLayout'>
                  <div className='aChatBox'>
                    <div>+</div> <div>#</div>
                  </div>

                  {val.a.map((aval, aidx) =>
                    <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(aval.type,idx)}>
                      {aval.text}
                    </div>
                  )}
                </div>
                <div className='questionList'>
                </div>

              </div>
            )}
          </div>
          :
          <div>
            결과페이지
          </div>
      }
    </div>
  );
}

export default App;