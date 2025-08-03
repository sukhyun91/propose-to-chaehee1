import React, { useState } from 'react';
import './App.css';

const cards = [
  { id: 1, text: "출근전엔 내가 삶은 계란과 바나나 준비해줄게 채희의 허기는 중요하니까 >.<" },
  { id: 2, text: "주말엔 같이 장 봐서 내가 요리해줄게 대신 실패해도 맛있게 먹어줄거지? 🍳🛒" },
  { id: 3, text: "리버풀 경기하면 가끔씩은 닭강정 시켜서 먹으면서 봐도될까?🐔⚽ 물론 같이 보면 너무 좋고!! ❤️❤️" },
  { id: 4, text: "퇴근하고는 둘이서 밥 먹으면서 하루 일과 보고하기! 물론 채희 이야기 듣는 게 제일 재밌을 예정이야 😆🍚" },
  { id: 5, text: "재밌는 드라마 나오면 우리 같이 정주행 하는거야.! 근데 나 중간에 잠들어도 이해해줘야햇..ㅎㅎ" },
  { id: 6, text: "앞으로 평생 채희 편만 들건데 각오되어있지? 물론 이미 나는 채희만의 편이긴 해 😎🤗" },
  { id: 7, text: "내가 괜히 삐졌을 때는 먼저 다가와 줄 수 있어..?.. 호호" },
  { id: 8, text: "채희 눈에 내가 답답해보여도 너무 뭐라하지 않고 상냥하게 대해줄 수 있어...?..호호" },
  { id: 9, text: "나랑 결혼해줄래? 💍" },
  { id: 10, text: "다시한번 물어볼께,,, 이런 순간들을 너와 함께하고 싶어. 나랑 결혼해줄래? 💍" }
];

function App() {
  const [step, setStep] = useState(0);
  const next = () => {
    if (step === 8) return; // '아니오' 눌렀을 때 멈춤
    setStep((prev) => Math.min(prev + 1, cards.length - 1));
  };
  const handleYes = () => setStep((prev) => Math.min(prev + 1, cards.length - 1));
  const handleNo = () => step === 8 && setStep(9);

  return (
    <div className="container">
      <div className="card">
        <p>{cards[step].text}</p>
        {step === 8 && (
          <div className="btns">
            <button onClick={handleYes}>예</button>
            <button onClick={handleNo}>아니오</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;