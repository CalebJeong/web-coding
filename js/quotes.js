const quotes = [{
    quote: "영원히 살 것처럼 꿈꾸고, 오늘 죽을 것처럼 살아라",
    author: "제임스틴",
},
{
    quote: '"지금이 최악"이라고 말할 힘이 있다면 아직은 최악이 아니다',
    author: "윌리엄 셰익스피어",
},
{
    quote: "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다",
    author: "데일 카네기",
},
{
    quote: "never give up, never never give up",
    author: "윈스턴 처칠",
},
{
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
},
{
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
},
{
    quote: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다",
    author: "괴테",
},
{
    quote: "눈물로 씨를 뿌리는 자는 기쁨으로 거두리라",
    author: "시편 126편 5절",
},
{
    quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다",
    author: "알베르트 아인슈타인",
},
{
    quote: "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다 단 하루면 인간적인 모든 것을 멸망시킬수도 다시 소생시킬수도 있다",
    author: "소포클레스",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random()  * quotes.length)];

quote.innerText = `${toDaysQuote.quote} -`;
author.innerText = toDaysQuote.author; 