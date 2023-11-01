function scrapKakao() {
    const title = '대한민국 1등 옷장 정리 서비스';
    const description = '해당 프로모션 링크로 서비스 신청 시 즉시 할인 혜택을 받을 수 있습니다!';
    const pathName = 'form/reservation?promotionCode=123'; 

    Kakao.Share.sendCustom({
      templateId: 100221,
      templateArgs: {
                title: title,
                description: description,
                pagePathname: pathName
              },
            });

}