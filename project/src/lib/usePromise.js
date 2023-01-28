import { useEffect, useState } from "react";

// promiseCreator : promise를 만들어주는 함수, 데이터를 가져오는 함수(axios,fetch)가 들어가야한다.
// deps: 의존배열
// 이 두 인자에는 지금 특별한 값이 들어가지 않았다. 고정틀을 위해 임시로 넣어준 것들임.
export default function usePromise(promiseCreator, deps) {
  // 대기중/완료/실패에 대한 상태관리
  const [loading, setLoading] = useState(false); //대기
  const [resolved, setResolved] = useState(null); //완료(데이터)
  const [error, setError] = useState(null); //실패
  // useEffect()로
  useEffect(() => {
    //process 함수
    const process = async () => {
      setLoading(true); //로딩중임!!!!💞
      try {
        // promiseCreator() 함수(axois, fetch 등)로 데이터를 가져와라..
        // await - promiseCreator()가 값을 가져올 때까지 존버하겠다.
        const resolved = await promiseCreator();
        // resolved에 데이터 입력완.
        setResolved(resolved);
      } catch (err) {
        //에러가 생길 경우
        //콘솔로 찍어주세요
        setError(err);
      }
      //로딩끝♥
      setLoading(false);
    };
    //process 실행
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // ↑ esLint 경고를 막기 위한 주석
  }, deps);
  //deps는 useEffect의 의존배열. 특별한 값은 없고 틀을 만들기 위해 임시로 넣어준 값임

  //로딩 상태, 데이터 상태, 에러 상태를 반환함
  return [loading, resolved, error];
}
