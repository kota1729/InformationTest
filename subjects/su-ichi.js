(function () {
    const SUBJECT_ID = "su-ichi";
    const SUBJECT_NAME = "数学I";
    const SUBJECT_ORDER = 2;

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
