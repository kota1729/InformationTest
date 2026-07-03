(function () {
    const SUBJECT_ID = "hoken";
    const SUBJECT_NAME = "保健";
    const SUBJECT_ORDER = 9;

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
