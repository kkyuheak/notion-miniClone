### 기본 요구 사항

Vanilla JS만을 사용해 노션을 클로닝 합니다.
기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러 값 등은 원하는 대로 커스텀 할 수 있습니다.

- History API를 이용해 SPA 형태로 만듭니다.

  - 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.
  - /documents/{documentId} 로 접속 시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

- 전체 구조

  - 글 단위를 Document라고 합니다. Document는 Document 여러 개를 포함할 수 있습니다.
  - 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링 합니다.
  - Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링 합니다.
  - 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
  - Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집 화면으로 넘깁니다.

- 편집기
  - 편집기는 기본적으로 textarea 기본으로 단순한 텍스트 편집기로 시작합니다. 편집기에는 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.
