(function () {
    const SUBJECT_ID = "genkoku";
    const SUBJECT_NAME = "現代国語";
    const SUBJECT_ORDER = 1;

    const questions = [
            
    ];

    window.QUIZ_SUBJECTS = window.QUIZ_SUBJECTS || {};
    window.QUIZ_SUBJECTS[SUBJECT_ID] = {
        id: SUBJECT_ID,
        name: SUBJECT_NAME,
        order: SUBJECT_ORDER,
        questions: questions
    };
})();
