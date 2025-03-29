import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <iframe
        src="YOUR_GOOGLE_FORM_URL"
        width="100%"
        height="800px"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="mx-auto"
        title="お問い合わせフォーム"
      >
        読み込み中...
      </iframe>
    </div>
  );
};

export default ContactForm; 