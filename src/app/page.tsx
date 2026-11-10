export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 p-4 text-slate-800">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 text-center transition-all">
        {/* 프로필 아바타 / 아이콘 */}
        <div className="mx-auto w-24 h-24 mb-6 rounded-full flex items-center justify-center text-4xl shadow-sm bg-gradient-to-tr from-amber-200 via-rose-200 to-indigo-200 select-none">
          👩‍🏫
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
          박은옥
        </h1>

        {/* 신분 / 직무 배지 */}
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 mb-6">
          ✨ 예비 한국어 교사
        </div>

        {/* 소개글 */}
        <p className="text-slate-600 text-base leading-relaxed break-keep mb-8">
          한국어의 매력을 세계에 전하는 그날까지!<br />
          배우는 즐거움과 성장의 기쁨을 함께할 준비를 하고 있어요 ✨
        </p>

        {/* 구분선 */}
        <hr className="border-slate-100 mb-6" />

        {/* 관심 분야 키워드 */}
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs border border-slate-200">
            📚 한국어 교육
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs border border-slate-200">
            🌏 언어 & 문화
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs border border-slate-200">
            🌱 배움과 성장
          </span>
        </div>
      </div>
    </main>
  );
}
