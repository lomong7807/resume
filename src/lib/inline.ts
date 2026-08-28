const escapeHtml = (text: string): string =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

/**
 * 데이터 문자열의 제한적 인라인 마커를 HTML로 변환한다.
 * `**텍스트**` → <strong>, `==텍스트==` → <span class="num"> (수치 강조)
 */
export const inline = (text: string): string =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/==(.+?)==/g, '<span class="num">$1</span>');
