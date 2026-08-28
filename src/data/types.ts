export interface ExternalLink {
  label: string;
  url: string;
}

export interface AboutPoint {
  title: string;
  body: string;
}

export interface SkillItem {
  name: string;
  /** 주력 기술 여부 — 칩 강조 표시 */
  primary?: boolean;
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export interface Experience {
  company: string;
  role: string;
  team: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, 재직 중이면 null */
  end: string | null;
  summary: string;
  /** `**굵게**`, `==수치 강조==` 인라인 마커 사용 가능 */
  highlights: string[];
  tech: string[];
}

export interface CompanyProject {
  name: string;
  org: string;
  start: string;
  end: string | null;
  /** 무엇을 한 프로젝트인지 1~2문장. 문제에서 출발한 프로젝트는 그 맥락을 자연스럽게 녹인다 */
  summary: string;
  /** 주요 작업 */
  work: string[];
  /** 실제 성과가 있는 프로젝트에만 */
  outcome?: string[];
  tech: string[];
}

export interface SideProject {
  name: string;
  description: string;
  period: string;
  role: string;
  tech: string[];
  repo: string;
}

export interface TimelineItem {
  title: string;
  detail: string;
  start: string;
  end: string;
}
