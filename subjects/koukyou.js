(function () {
    const SUBJECT_ID = "koukyou";
    const SUBJECT_NAME = "公共";
    const SUBJECT_ORDER = 4;

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
