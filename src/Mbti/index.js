
import './mbti.css';
import { useEffect,useState } from 'react';
import logo from '../resource/logo.png'
import icKakao from '../resource/icKakao.svg'
import icLink from '../resource/icLink.svg'

const Mbti = (()=> {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  };

  setVh()

  useEffect(()=>{
    setVh();

    function onResize(){
        setVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  const [page,setPage] = useState(0)
  const [mbtiContents, setMbtiContents] = useState([])
  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},
    {name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0}
  ])


  const questionList = [
    {q: ['안녕?', '넌 처음보는 얼굴같은데?'],
    a:[{type:'I',text:'아...안녕 오늘 여기로 전학왔어..'},
      {type:'E',text:'안녕!!! 난 오늘 전학왔어 넌 이름이 뭐야?? 아니 내가 어제 마라탕을 먹었는데 말이야..'}]},

    {q: ['너 방과후 동아리 어디 들어갈거야?'],
    a:[{type:'I',text:'영화감상동아리나 독서동아리가 마음에 드네'},
      {type:'E',text:'댄스동아리나 축구동아리 가야지!!! 너는 어떤 동아린데? 나랑 같이 들어갈래?'}]},

    {q: ['야야ㅑ야야ㅑ야야ㅑㅑ', '너 주말에 뭐해???'],
    a:[{type:'I',text:'학교 적응하느라 개힘들었어; 주말내내 집에서 침대랑 한 몸으로 지낼거야'},
      {type:'E',text:'안그래도 적응하느라 노잼이였는데ㅡㅡ 놀러갈까???? 이 근처 맛집 다 알아놨어'}]},

    {q: ['가장 좋아하는 과목이 뭐야?'],
    a:[{type:'S',text:'난 나한테 실용적이고 기술적이거나 경험적인 과목을 좋아해'},
      {type:'N',text:'음.....창의적이거나 이론적인 과목?'}]},

    {q: ['라면하면 뭐가 떠올라??'],
    a:[{type:'S',text:'파, 계란, 스프, 물조절...'},
      {type:'N',text:'만약 내가 매출 1위 라면회사 사장이 된다면.......'}]},

    {q: ['오늘', '점심 뭐 먹을래?'],
    a:[{type:'S',text:'떡볶이 먹으러 가자.'},
      {type:'N',text:'어제부터 짬뽕이 먹고싶었어 근데 오늘은 또 피자가 먹고싶어. 저녁에 짬뽕 먹을까?'}]},

    {q: ['네가 새로운 전학생이냐?', '싸움도 못하게 생겼는데???'],
    a:[{type:'F',text:'지금 시비거는거야???? 너도 싸움 못 할 거 같은데?'},
      {type:'T',text:'전학생인건 맞는데, 내가 싸움을 못하는지 네가 어떻게 알아? 본 적 있어?'}]},

    {q: ['나 너무 우울해서', '여행 갈려고'],
    a:[{type:'F',text:'무슨 일있어?? 누가 괴롭혔어????'},
      {type:'T',text:'어디로 갈건데??? 요즘 국내여행도 좋더라!'}]},

    {q: ['시험 개망했어...ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ','ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ','ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ'],
    a:[{type:'F',text:'힘내! 다음에 잘 하면 돼!! 맛있는 거 먹으러 갈까?'},
      {type:'T',text:'무슨 시험인데?? 많이 어려웠어?'}]},

    {q: ['이번 조별 수행평가는 어떻게 진행해야할까?'],
    a:[{type:'P',text:'융통성 있게 접근해서 상황에 따라 유연하게 대처해야지!!'},
      {type:'J',text:'계획을 세워서 구조적으로 문제를 해결해볼까?'}]},

    {q: ['2주뒤에 시험인데 시험공부 언제 할거야?'],
    a:[{type:'P',text:'시험이 2주나 남았어? 한참 멀었네ㅎㅎㅎㅎㅎㅎ'},
      {type:'J',text:'난 한달 전부터 계획대로 공부중인데?'}]},

    {q: ['방학때 여행계획 다 짰어??'],
    a:[{type:'P',text:'ㅇㅇ 애들이랑 바다가서 고기 구워먹고 놀다가 폭죽놀이 할거야'},
      {type:'J',text:'7시 30분 만남, 8시 버스타기, 8시 30분 숙소도착, 9시 아침먹기, 9시 30분 바다도착...'}]},
  
      {q:['테스트가 모두 끝났습니다!!!', '결과를 보러 갈까요??'],
      a:[{type:'',text:'나의 MBTI 결과 보러 가기'}]}
    ]

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
      setMbti()
    }
  }

  function setMbti(){
    let ls = mbtiList
    let mc = [
      {mbti: 'ENTP', contents:['말을 잘해요','다재다능하고 재주가 많아요','평범한 거 싫어해요','모범생과는 거리가 좀 멀어요',
      '본인 스스로가 잘났다고 생각해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
      {mbti: 'INTP', contents:['분석, 추리하는 거 좋아해요','무뚝뚝한 편이고 잡담은 별로 좋아하지 않아요','팩폭을 잘해요','감수성이 풍부해요',
      '맞춤법에 예민해요','술자리 별로 안 좋아해요','주관이 뚜렷해요']},
      {mbti: 'ESFJ', contents:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요',
      '상대방에게 사랑을 주면 그만큼 돌려받고 싶어 해요','계획 틀어지면 예민해져요','눈물이 많아요','변화를 좋아하지 않아요']},
      {mbti: 'ESTP', contents:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요','어른들이 좋아해요',
      '술자리 재미없으면 그냥 집에 가요','남한테 관심 없고 생각하는 것도 귀찮아요','스트레스를 잘 안 받아요']},
      {mbti: 'ISFJ', contents:['남 챙기는 거 좋아해요','공감 잘 해요','겉으론 무덤덤해 보여도 속으론 온갖 생각 다 해요',
      '살짝 비판적인 모습도 있어요','뒤끝 있어요','내가 싫은 건 남한테도 안 해요','나가는 건 귀찮은데 정작 나가면 잘 놀아요']},
      {mbti: 'ISTP', contents:['평소엔 조용한데 친해지면 말 많고 장난도 잘 쳐요','효율적인 거 좋아해요','관찰력이 뛰어나요',
      '기계조작 잘 하고 좋아해요','누가 내 욕해도 별로 신경 안 써요','만사가 귀찮아요','카톡 할 말 없으면 읽씹 잘해요']},
      {mbti: 'ENFJ', contents:['분위기 메이커예요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요','완벽한 척하지만 허당끼가 있어요',
      '센스 있고 눈치가 빨라요','지나치게 이상주의자예요','느긋해 보여요']},
      {mbti: 'INFJ', contents:['집돌이/집순이 성향이 강해요','본인 스스로에게 엄격해요','사람을 보는 통찰력이 있어요',
      '주변 사람들의 기분을 금방 알아차려요','의미 없는 관계 맺기를 싫어해요','자신만의 철학이 있어요','삶과 죽음에 대해 많이 생각해요']},
      {mbti: 'ENTJ', contents:['털털하고 칠칠맞아 보이는데 은근 꼼꼼해요','강강약약 스타일이에요','반복되는 실수를 참지 못해요',
      '직감이 좋은 편이에요','주변 사람을 잘 챙겨요','4차원이라는 소리 은근 들어요','열등감이 없어요']},
      {mbti: 'INTJ', contents:['혼자있는거 좋아해요','돈관리 잘해요','공상 많이해요','남 눈치 안 봐요',
      '평소엔 조용하지만 관심있거나 아는 주제로 토론할땐 적극적이에요','감정에 휘둘리는거 싫어해요','이성적인데 또 은근 감성적이에요']},
      {mbti: 'ENFP', contents:['소통과 공감을 잘 해요','은근 독립적인 성격이에요','생각을 많이 해요','감정 표현이 풍부해요',
      '감동을 잘 받아요','오지라퍼 소리를 종종 들어요','즉흥적이에요']},
      {mbti: 'INFP', contents:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','벼락치기 많이 하는데 은근 성적이 잘 나와요','호불호가 명확해요',
      '남에게 폐 끼치는 거 싫어해요','게으른데 완벽주의자예요','내 방식에 이래라저래라 하는 거 정말 싫어해요']},
      {mbti: 'ISFP', contents:['갈등이 발생하는 걸 정말 싫어해요','노는 거 은근 좋아해요','근데 집에 있는 것도 좋아요',
      '화났어도 시간 지나면 왜 화났었는지 잘 기억이 안 나요','마이웨이 성향이 강해요','고집쟁이인데 고집 세 보이는 건 싫어해요',
      '참견하는 거, 참견받는 거 싫어해요']},
      {mbti: 'ESFP', contents:['사람의 단점보단 장점을 보려고 노력해요','사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요',
      '덜렁거린다는 이야기 많이 들어요','얼굴에 표정이 잘 드러나는 편이에요','성격이 급해요']},
      {mbti: 'ESTJ', contents:['계획을 잘 세우고 또 잘 지켜요','필요한 물건 바리바리 챙겨 다니는 스타일이에요','호불호가 명확하고 단호해요',
      '공감 능력 없어서 위로를 잘 못해요','기억력이 좋아요','완벽주의자 기질이 있어요','약속 어기는 거 싫어해요']},
      {mbti: 'ISTJ', contents:['모든 일을 냉정하고 객관적으로 바라봐요','원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요',
      '거짓말을 안 해요','장남/장녀 같다는 이야기 많이 들어요','융통성 없다는 얘기 종종 들어요']},
    ]

    let IorE = ls.find(function(data){return data.name === 'I'}).count > ls.find(function(data){return data.name === 'E'}).count?'I':'E'
    let SorN = ls.find(function(data){return data.name === 'S'}).count > ls.find(function(data){return data.name === 'N'}).count?'S':'N'
    let ForT = ls.find(function(data){return data.name === 'F'}).count > ls.find(function(data){return data.name === 'T'}).count?'F':'T'
    let PorJ = ls.find(function(data){return data.name === 'P'}).count > ls.find(function(data){return data.name === 'J'}).count?'P':'J'
     
    let mbti = IorE + SorN + ForT + PorJ

    setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])

  }

  function linkCopy(){
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = 'https://sooani.github.io/mbtitest';
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
 };


// Facebook
const shareFacebook = () => {
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + `https://sooani.github.io/mbtitest`);
}

// Twitter
const shareTwitter = () => {
  const text = '나의 MBTI는?'
  window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + 'https://sooani.github.io/mbtitest')
}

const shareKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 MBTI는?',
      description: '친구와 대화하는 느낌으로 편하게 MBTI 검사를 받아보자!',
      imageUrl: logo,
      link: {
        webUrl : 'https://sooani.github.io/mbtitest',
        mobileWebUrl : 'https://sooani.github.io/mbtitest',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          webUrl : 'https://sooani.github.io/mbtitest',
          mobileWebUrl : 'https://sooani.github.io/mbtitest',
        },
      },
    ]
  })
}


return (
    <div className="mbtiLayout">
      {page === 0 ? (
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>나의 MBTI는?</div>
            <div>▼</div>
          </div>
          <div onClick={() => setPage(1)} className='startButton'>테스트 시작하기</div>
          <div className='socialButtons'>
            <img src={icKakao} onClick={shareKakao} className='socialIcon' alt='Kakao' />
            <img src={icLink} onClick={linkCopy} className='socialIcon' alt='Link' />
          </div>
        </div>
      ) : page <= questionList.length ? (
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI TEST𓍢ִ໋🌷͙֒⋆₊💌˚⊹♡</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>
          {questionList.map((val, idx) => (
            <div className='questionList' style={{ display: page === idx + 1 ? 'flex' : 'none' }} key={idx}>
              <div className='questionItemLayout'>
                <div className='profileImg'>
                  <div></div>
                  <div></div>
                </div>
                <div className='chatListLayout'>
                  {val.q.map((qval, qidx) => (
                    <div key={qidx} className='chatBox'>
                      <div>◀</div> <div>{qval}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='answerItemLayout'>
                <div className='aChatBox'>
                  <div>+</div> <div>#</div>
                </div>
                {val.a.map((aval, aidx) => (
                  <div key={aidx} className='answerBox' onClick={() => handleCkAnswer(aval.type, idx)}>
                    {aval.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI TEST𓍢ִ໋🌷͙֒⋆₊💌˚⊹♡</div>
            <div onClick={() => window.location.reload()}>다시하기</div>
          </div>
          <div className='questionList' style={{ display: 'flex' }}>
            <div className='questionItemLayout'>
              <div className='profileImg'>
                <div></div>
                <div></div>
              </div>
              <div className='chatListLayout'>
                <div className='chatBox'>
                  <div>◀</div> <div>당신의 MBTI는 {mbtiContents.mbti}입니다.</div>
                </div>
                <div className='chatBox'>
                  <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                </div>
                {mbtiContents.contents.map((val, idx) => (
                  <div className='chatBox' key={idx}>
                    <div>◀</div> <div>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
)});

export default Mbti;