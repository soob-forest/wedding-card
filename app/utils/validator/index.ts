export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  // 한국 휴대폰 번호 형식에 맞는 정규식 패턴 (- 없이)
  const phoneRegex = /^01[016789]\d{3,4}\d{4}$/;

  // 정규식 패턴과 입력된 번호가 일치하는지 확인
  return phoneRegex.test(phoneNumber);
};
