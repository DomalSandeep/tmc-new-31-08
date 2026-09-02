// HomepageSelector.jsx
import React from 'react';
import './HomepageSelector.css';
import { QUESTIONS, LABELS, HELP, QUESTION_META, DEFAULT_MOCK_CONTENT, DEFAULT_PDF_FOLDER } from './constants';
import { useHomepageSelector } from './useHomepageSelector';
import QuestionSlider from './QuestionSlider';
import PaletteGrid from './PaletteGrid';
import PreviewMock from './PreviewMock';
import PdfPreview from './PdfPreview';
// import nationalCancerGridLogo from "../assets/logo/national-cancer-grid.svg";
// import nationalCancerGridLogoWhite from "../assets/logo/national-cancer-grid-white.svg";

// import location from '../assets/icons/location.svg'
// import mail from '../assets/icons/email.svg'
// import phone from '../assets/icons/phone.svg'


export default function HomepageSelector({
  title = 'Home Page Selector',
  mockContent = DEFAULT_MOCK_CONTENT,
  pdfFolder = DEFAULT_PDF_FOLDER,
  checkPdfExists,
}) {
  const {
    page,
    answers,
    setAnswer,
    palette,
    paletteOptions,
    selectPalette,
    styleCode,
    pdfPath,
    pdfStatus,
    verifyPdf,
    zoom,
    zoomIn,
    zoomOut,
    goToResult,
    goToQuestions,
  } = useHomepageSelector({ pdfFolder, checkPdfExists });

  const downloadDisabled = pdfStatus !== 'found';

  return (

<>
     <div className="headTitleBg">
        <div className="container">
          <h1><span>2.</span> Home Page Selector</h1>
        </div>
      </div>

    <div className="page-content">
      <div className="container">

        <div className="ncc-homepage-selector">

          <div className="ncc-content">
            {page === 'questions' && (
              <div id="ncc-page-questions">
                {QUESTIONS.map((key, i) => (
                  <QuestionSlider
                    key={key}
                    index={i + 1}
                    questionKey={key}
                    meta={QUESTION_META[key]}
                    labels={LABELS[key]}
                    help={HELP[key]}
                    value={answers[key]}
                    onChange={setAnswer}
                  />
                ))}

                <div className="ncc-cta-row">
                  <button className="ncc-btn ncc-btn-primary" onClick={goToResult}>
                    Create Homepage
                  </button>
                </div>
              </div>
            )}

            {page === 'result' && (
              <div id="ncc-page-result">
                <div className="ncc-result-head">
                  <div>
                    <h2>Your Recommended Homepage</h2>
                  </div>
                  <div className='ncc-btn-wrap'>
                     <button className="ncc-btn ncc-btn-ghost" onClick={goToQuestions}>
                    Change Your Answers
                  </button>
                  <a
                    className={`ncc-btn ncc-btn-primary${downloadDisabled ? ' disabled' : ''}`}
                    href={downloadDisabled ? '#' : pdfPath}
                    download={downloadDisabled ? undefined : `${styleCode}.pdf`}
                    onClick={(e) => downloadDisabled && e.preventDefault()}
                  >
                    Download PDF
                  </a>
                  </div>
                </div>

                <PaletteGrid options={paletteOptions} selected={palette} onSelect={selectPalette} />

                <PreviewMock styleCode={styleCode} palette={palette} zoom={zoom} />

                {/* <PdfPreview pdfPath={pdfPath} status={pdfStatus} onVerify={verifyPdf} /> */}

                <div className="ncc-result-actions">
                  <button className="ncc-btn ncc-btn-ghost" onClick={goToQuestions}>
                    Change Your Answers
                  </button>
                  <div className="ncc-a-wrap">
                    <a
                      className={`ncc-btn ncc-btn-primary${downloadDisabled ? ' disabled' : ''}`}
                      href={downloadDisabled ? '#' : pdfPath}
                      download={downloadDisabled ? undefined : `${styleCode}.pdf`}
                      onClick={(e) => downloadDisabled && e.preventDefault()}
                    >
                      Download PDF
                    </a>
                  </div>

                </div>
              </div>
            )}
          </div>



        </div>
      </div>
    </div>

</>

  );
}
