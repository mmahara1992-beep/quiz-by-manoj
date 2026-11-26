import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900">About Quiz by Manoj</h1>
        <p className="text-slate-600 leading-relaxed">
          <strong>Quiz by Manoj</strong> is a free, student-centric productivity platform created by <strong>Manoj</strong> to simplify document preparation and self-assessment for competitive exams, school studies, and self-paced learning.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Many study materials, question banks, and e-newspapers come formatted in dense multi-column PDFs that are difficult to read on mobile phones. Our browser-based <strong>PDF Vertical Cut</strong> and <strong>Manual Horizontal Cut</strong> tools solve this instantly without uploading your private files to any server.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Combined with our <strong>PDF to Quiz Smart Tool</strong> and <strong>Custom Quiz Maker</strong>, learners can transform passive reading into active Computer-Based Test (CBT) practice sessions complete with timers, question palettes, and detailed scorecards.
        </p>
      </div>
    </div>
  );
}
