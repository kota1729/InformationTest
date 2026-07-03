(function () {
    const SUBJECT_ID = "boki";
    const SUBJECT_NAME = "簿記";
    const SUBJECT_ORDER = 7;

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
