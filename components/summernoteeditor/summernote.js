import React, { useEffect } from 'react';
import $ from 'jquery';
import 'summernote/dist/summernote-lite.min.css';

export default function SummernoteEditor({ content, onChange }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('summernote/dist/summernote-lite.min.js').then(() => {
        $('#summernote').summernote({
          height: 300,
          callbacks: {
            onChange: (contents) => onChange(contents),
          }
        });

        // ✅ Set initial HTML content
        $('#summernote').summernote('code', content || '');
      });
    }

    return () => {
      if (typeof window !== 'undefined' && $('#summernote').data('summernote')) {
        $('#summernote').summernote('destroy');
      }
    };
  }, [content]); // ✅ important to re-set if content changes

  return (
    <div
      id="summernote"
      style={{ border: "1px solid #ccc", minHeight: "300px" }}
    />
  );
}
